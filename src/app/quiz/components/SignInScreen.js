"use client";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LoginStyle from "../style/login.module.css";
import OTPVerification from "./otpverification";
import FillNumber from "./FillNumber";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

import { useFormik } from "formik";
function SignInScreen({ setIsShow }) {
  const router = useRouter();
  const [lgShow, setLgShow] = useState(true);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const [isFieldFocused, setFieldFocus] = useState(false);

  const [isRegistered, setIsRegistered] = useState(false);
  const currentPathname = router.pathname;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: phone,
  });
  const setRegistered = (registered) => {
    setIsRegistered(registered);
  };

  const initialValues = {
    name: "",
    email: "",
    mobile: phone,
  };
  useEffect(() => {
    formik.resetForm({
      values: {
        name: "",
        email: "",
        mobile: phone,
      },
    });
  }, [phone]);
  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Full Name is eequired field";
    }

    if (!values.email.trim()) {
      errors.email = "Email is required field";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      errors.email = "Invalid email address";
    }

    const mobile = values.mobile.trim();
    if (!mobile) {
      errors.mobile = "Phone number required field";
    } else if (!/^\d+$/.test(mobile)) {
      errors.mobile = "Invalid mobile number";
    } else if (mobile.length !== 10) {
      errors.mobile = "Mobile number must be exactly 10 digits";
    }

    return errors;
  };

  const handleSubmit = (values) => {
    localStorage.setItem("registerData", JSON.stringify(values));
    setStep(4);
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const { handleChange, handleSubmit: formSubmit, values, errors } = formik;

  return (
    <>
      {/* <GoogleOAuthProvider /> */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setLgShow(false);
          router.push("/");

          if (currentPathname === "/login") router.push("/");
        }}
        aria-labelledby="example-modal-sizes-title-lg"
        className="login_popup"
      >
        <Modal.Header
          className={`${LoginStyle.login_header}`}
          closeButton
        ></Modal.Header>
        <Modal.Body className={`${LoginStyle.login_content} pb-md-0`}>
          <div className="row  equal-height-row">
            <div className="col-md-6 position-relative">
              <img
                src="/quiz_logo.svg"
                className={`${LoginStyle.quiz_logo} quiz_logo pb-md-0`}
              />
              <img
                src="/login_img.svg"
                className={`${LoginStyle.login_content_img} login_content_img pb-md-0 w-100`}
              />
              <img
                src="/white_shadow.svg"
                className="white_shadow d-md-none d-block"
              />
            </div>
            <div className="col-md-6 bg-white main_content">
              {step == 3 && (
                <div className="text-center ps-lg-3 pe-lg-3 ">
                  <h2 className="d-md-block d-none pt-md-4">Get started</h2>
                  <p className="d-md-block d-none">
                    Please enter your details and get started
                  </p>
                  <form className="" onSubmit={formSubmit}>
                    <div
                      className={`${LoginStyle.form_group} position-relative`}
                    >
                      <label>Full Name</label>
                      <input
                        type="text"
                        name="name"
                        className="input-lg"
                        placeholder="Enter your full name"
                        value={values.name}
                        onChange={(e) => {
                          setFieldFocus(true);
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className={`${LoginStyle.error_message}`}>
                      {errors.name}
                    </div>
                    <div
                      className={`${LoginStyle.form_group} position-relative`}
                    >
                      <label>Email ID</label>
                      <input
                        type="text"
                        name="email"
                        className="input-lg"
                        placeholder="Enter your email ID"
                        value={values.email}
                        onChange={(e) => {
                          setFieldFocus(true);
                          handleChange(e);
                        }}
                      />
                    </div>
                    <div className={`${LoginStyle.error_message}`}>
                      {errors.email}
                    </div>
                    <div
                      className={`${LoginStyle.form_group} position-relative input-group`}
                    >
                      <label>Mobile Number</label>
                      <span className="input-group-text bg-transparent border-0">
                        +91
                      </span>
                      <input
                        inputMode="numeric"
                        type="tel"
                        name="mobile"
                        className={`${LoginStyle.tel_input} input-lg border-start ps-2`}
                        placeholder="Enter your mobile number"
                        value={values.mobile}
                        onChange={(e) => {
                          setFieldFocus(true);
                          handleChange(e);
                        }}
                        maxLength={10}
                      />
                    </div>
                    <div className={`${LoginStyle.error_message}`}>
                      {errors.mobile}
                    </div>
                    <button
                      type="submit"
                      className={`${
                        Object.keys(formik.errors).length !== 0 ||
                        !isFieldFocused
                          ? "opacity-50"
                          : ""
                      }`}
                      disabled={Object.keys(formik.errors).length !== 0}
                    >
                      Get OTP
                    </button>
                  </form>
                  <p>or</p>
                  {/* <button className={`${LoginStyle.gooogle_button}`}>
                      <img src='/google.svg' /> Login with Google
                    </button> */}
                </div>
              )}
              <div className="">
                {(step == 2 || step == 4) && (
                  <OTPVerification
                    isRegistered={isRegistered}
                    formData={formik.values}
                    phone={phone}
                    step={step}
                    setStep={setStep}
                    otp={otp}
                    setOtp={setOtp}
                  />
                )}
              </div>
              {step == 1 && (
                <div className="">
                  <FillNumber
                    setStep={setStep}
                    phone={phone}
                    setRegistered={setRegistered}
                    setPhone={setPhone}
                  />
                </div>
              )}
              <p className={`${LoginStyle.tem_con} text-center bottom_term`}>
                By continuing, I agree to FiinnovationZ <br />
                <strong>Terms & Conditions</strong>
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      {/* </GoogleOAuthProvider> */}
    </>
  );
}

export default SignInScreen;
