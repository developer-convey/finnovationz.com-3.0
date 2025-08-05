"use client";
import React, { useEffect, useState } from "react";
import LoginStyle from "../style/login.module.css";

import quizpageStyle from "../style/quizpage.module.css";
// import baseUrl from '../utils/baseUrl';
import { LOGIN_URL, BASE_URL } from "../utils/baseUrl";
import { useRouter } from "next/navigation";

const OTPVerification = (props) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [isDisable, setIsDisable] = useState(true);
  const [response, setResponse] = useState("");
  const [noApplicable, setNoApplicable] = useState(false);
  const router = useRouter();
  const inputRefs = [];

  const handleChange = async (index, event) => {
    const value = event.target.value;
    if (isNaN(value)) {
      return;
    }
    let newOtp;
    if (value.length > 1) {
      newOtp = props.otp
        .map((digit, i) => {
          if (i >= index && i < index + value.length) {
            return value[i - index] || digit;
          }
          return digit;
        })
        .slice(0, 6);
    } else {
      newOtp = props.otp
        .map((digit, i) => {
          if (i === index) {
            return value === "" ? "" : value;
          } else if (i > index && i == props.otp.length) {
            return "";
          }
          return digit;
        })
        .slice(0, 6);

      props.setOtp(newOtp);
    }
    props.setOtp(newOtp);
    if (newOtp[5]) {
      setIsDisable(false);
      // verifyOtp(newOtp)
    } else {
      setIsDisable(true);
    }

    if (value == "") {
      event.preventDefault();
      if (index > 0) {
        inputRefs[index - 1].focus();
      }
    } else if (value !== "" && index < 6) {
      inputRefs[index + 1]?.focus();
    }
  };
  const verifyOtp = async (newOtp = props.otp) => {
    setIsDisable(true);
    try {
      const pin = newOtp.join("");
      let data;
      if (props.step == 4) {
        data = {
          //phone: props.formData?.mobile,
          //pin: pin,
          //name: props.formData?.name,
          //email: props.formData?.email,
          //joined_from: 3,
          //device: "web",
          //app_version: "1.0"

          phone: props.formData?.mobile,
          pin: pin,
          name: props.formData?.name,
          joined_from: 3,
          device: "web",
          app_version: "1.0",
        };
      } else {
        data = {
          phone: props.phone,
          pin: pin,
          joined_from: 3,
        };
      }
      const response = await fetch(
        `${"https://news.finnovationz.com/api/"}user-auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const responseJson = await response.json();
      if (responseJson.status === 200) {
        let quizeResult = JSON.parse(localStorage.getItem("quizeResult"));
        const registerData = JSON.parse(localStorage.getItem("registerData"));
        localStorage.setItem(
          "userDetails",
          JSON.stringify({
            name: responseJson?.data?.name,
            email: responseJson?.data?.email,
            mobile: props.phone,
          })
        );
        if (!props.isRegistered) {
          // localStorage.setItem('userDetails', JSON.stringify({
          //   name: registerData?.name,
          //   email: registerData?.email,
          //   mobile: props.phone,
          // }))
          quizeResult = {
            ...quizeResult,
            ...{
              userType: "basic",
              mobileNumber: props.phone,
              name: registerData?.name,
              email: registerData?.email ? registerData?.email : "",
            },
          };
        } else {
          // localStorage.setItem('userDetails', JSON.stringify({
          //   name: responseJson?.data?.name,
          //   email: responseJson?.data?.email,
          //   mobile: props.phone,
          // }))
          quizeResult = {
            ...quizeResult,
            ...{
              userType: "basic",
              mobileNumber: props.phone,
              name: responseJson?.data?.name,
              email: responseJson?.data?.email ? responseJson?.data?.email : "",
            },
          };
        }
        const submitRes = await fetch(
          `https://quizbackend.finnovationz.com/api/results/user`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(quizeResult),
          }
        );
        const data = await submitRes.json();
        if (data.statusCode == 200) {
          await localStorage.setItem("quizId", data?.responseData?.quizId);
          await localStorage.setItem("userId", data?.responseData?.userId);
          router.push("/certificate");
        } else if (data.statusCode == 400) {
          setNoApplicable(true);
          setResponse({ message: data.responseData, status: data.statusCode });
        }
      } else if (responseJson.status === 400) {
        setResponse({
          message: responseJson.message,
          status: responseJson.status,
        });
        setTimeout(() => {
          setResponse("");
        }, 7000);
      } else {
        let quizeResult = JSON.parse(localStorage.getItem("quizeResult"));
        const registerData = JSON.parse(localStorage.getItem("registerData"));
        quizeResult = {
          ...quizeResult,
          ...registerData,
          ...{ userType: "basic" },
        };
      }
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  // const handleKeyDown = (index, event) => {
  //   // Move to the previous input field on backspace
  //   if (event.key === 'Backspace' && index > 0) {
  //     inputRefs[index - 1].focus();
  //   }
  // };

  const handleKeyDown = (index, event) => {
    if (event.key === "Backspace" && !event.target.value) {
      event.preventDefault(); // Prevent the default backspace behavior (such as navigating back in the browser)
      if (index > 0) {
        // handleChange(index - 1, { target: { value: '' } }); // Replace the previous digit with an empty string
        inputRefs[index - 1].focus();
      }
    }
  };

  useEffect(() => {
    setResponse("");
  }, [props?.otp]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setResponse("");
    }, 5000);
    return () => clearTimeout(timeout);
  }, []);

  const handleResend = async () => {
    props.setOtp(["", "", "", "", "", ""]);
    setIsDisable(true);
    try {
      const data = { phone: props.phone };
      const response = await fetch(
        `${"https://dev.convey.in:5002/api/"}user-auth/resend-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status === 200) {
        // props.setStep(2)
        const data = await response.json();
        setResponse({
          message: "OTP Sent Successfully",
          status: response.status,
        });

        // setQuizData(data.responseData);
      }
      setTimeout(() => {
        setResponse("");
      }, 5000);
    } catch (error) {
      console.error("Error fetching quiz data:", error);
    }
  };

  return (
    <>
      <div className="">
        <h4 className={`${LoginStyle.otp_heading}`}>OTP verification</h4>
        <div className={`${LoginStyle.otp_details} text-center`}>
          {response && (
            <div
              class={
                response.status == 400
                  ? "alert alert-danger"
                  : "alert alert-primary"
              }
              role="alert"
            >
              {response.message}
            </div>
          )}
          <p className="mb-0">We have sent a verification code to</p>
          <h2 className="mb-0">+91 {props.phone}</h2>
          <div className="d-flex justify-content-center">
            {props?.otp?.map((digit, index) => (
              <input
                key={index}
                type="tel"
                inputMode="numeric"
                value={digit}
                onChange={(event) => handleChange(index, event)}
                onKeyDown={(event) => handleKeyDown(index, event)}
                ref={(ref) => (inputRefs[index] = ref)}
                // maxLength="1"
                className={`${LoginStyle.otp_verification}`}
              />
            ))}
          </div>
          <div
            className="toast"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-body">Hello, world! This is a toast message.</div>
          </div>
          <div className="mt-2">
            <button
              className={`${quizpageStyle.quiz_next} ${
                isDisable || noApplicable ? "opacity-50" : ""
              }`}
              disabled={isDisable}
              onClick={() => {
                verifyOtp();
              }}
            >
              verify
            </button>
          </div>
          <button
            onClick={handleResend}
            disabled={noApplicable}
            className={`${LoginStyle.otp_resend_btn}`}
          >
            Resend OTP
          </button>
        </div>
      </div>
    </>
  );
};

export default OTPVerification;
