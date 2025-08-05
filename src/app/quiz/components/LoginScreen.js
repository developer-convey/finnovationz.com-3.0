import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import LoginStyle from "../style/login.module.css";
import OTPVerification from "./otpverification";
import FillNumber from "./FillNumber";
import { useEffect } from "react";
import { useFormik } from "formik";
import { useRouter } from "next/router";


function LoginScreen({ setIsShow, quizid, isPrivate, setStartTimer, setIsQuizRuleShow }) {
  const [lgShow, setLgShow] = useState(true);
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const router = useRouter();
  const [isFieldFocused, setFieldFocus] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const quizId = quizid;

  const currentPathname = router.pathname;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: phone,
    studentid: "",
    financialModeling: "",
  });

  const initialValues = {
    name: "",
    email: "",
    mobile: phone,
    studentid: "",
    financialModeling: "",
  };

  useEffect(() => {
    formik.resetForm({
      values: {
        name: "",
        email: "",
        mobile: phone,
        studentid: "",
        financialModeling: "",
      },
    });
  }, [phone]);
  const validate = (values) => {
    const errors = {};

    if (!values.name.trim()) {
      errors.name = "Full Name is required field";
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

    if (isPrivate === 1 && !values.studentid.trim()) {
      errors.studentid = "Student Id is required field";
    }

    if (isPrivate === 1 && !values.financialModeling.trim()) {
      errors.financialModeling = "Please select 'Yes' or 'No' for financial modeling";
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    localStorage.removeItem("userDetails");

    if (values.studentid == "" || values.financialModeling == "") {
      localStorage.setItem("userDetails", JSON.stringify({
        mobileNumber: values.mobile,
        name: values.name,
        email: values.email,
        quizSubmitted: false,
        platform: values.platform || "web",
        quizId: quizid || '',
      }));
    } else {
      localStorage.setItem("userDetails", JSON.stringify({
        mobileNumber: values.mobile,
        name: values.name,
        email: values.email,
        studentId: values.studentid,
        financialModeling: values.financialModeling,
        quizSubmitted: false,
        platform: values.platform || "web",
        quizId: quizid || '',
      }));
    }

    const userDetailsData = JSON.parse(localStorage.getItem("userDetails"));

    try {
      const submitRes = await fetch(
        `${process.env.NEXT_PUBLIC_QUIZ_API_URL}/results/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetailsData),
        }
      );

      const data = await submitRes.json();
      localStorage.setItem("quizResponse", JSON.stringify(data));

      if (data.statusCode === 200) {
        if (quizId) {
          setIsShow(false);
          setIsQuizRuleShow(true);
        }
      } else if (data.statusCode === 400) {
        setNoApplicable(true);
        setResponse({ message: data.responseData, status: data.statusCode });
      }
    } catch (error) {
      console.error("Error submitting quiz result:", error);
    }
  };

  const formik = useFormik({
    initialValues,
    validate,
    onSubmit: handleSubmit,
  });

  const { handleChange, handleSubmit: formSubmit, values, errors } = formik;

  return (
    <>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => {
          setIsShow(false);
          if (currentPathname === "/quiz/[id]") router.push("/quiz");
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
              {step == 1 && (
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
                    <div className={`${LoginStyle.form_group} position-relative input-group`}>
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
                          const input = e.target.value;
                          if (/^[789]\d{0,9}$/.test(input) || input === "") {
                            handleChange(e);
                          }
                        }}
                        onKeyPress={(e) => {
                          if (!/^\d$/.test(e.key)) {
                            e.preventDefault();
                          }
                        }}
                        maxLength={10}
                      />
                    </div>

                    <div className={`${LoginStyle.error_message}`}>
                      {errors.mobile}
                    </div>


                    {isPrivate === 1 && (
                      <>
                        <div
                          className={`${LoginStyle.form_group} position-relative`}
                        >
                          <label>Student Id</label>
                          <input
                            type="text"
                            name="studentid"
                            className="input-lg"
                            placeholder="Enter your Student Id"
                            value={values.studentid}
                            onChange={(e) => {
                              setFieldFocus(true);
                              handleChange(e);
                            }}
                          />
                        </div>
                        <div className={`${LoginStyle.error_message}`}>
                          {errors.studentid}
                        </div>
                        <div className={`${LoginStyle.form_group} position-relative mt-3`}>
                          <label>Can you perform Financial Modeling of a company?</label>
                          <div className={`${LoginStyle.quiz_form_financial} d-flex align-items-center`}>
                            <input
                              type="radio"
                              name="financialModeling"
                              value={1}
                              id="yesOption"
                              onChange={(e) => {
                                setFieldFocus(true);
                                handleChange(e);
                              }}
                            />
                            <label htmlFor="yesOption" className="ms-2 me-4 p-3">Yes</label>

                            <input
                              type="radio"
                              name="financialModeling"
                              value={0}
                              id="noOption"
                              onChange={(e) => {
                                setFieldFocus(true);
                                handleChange(e);
                              }}
                            />
                            <label htmlFor="noOption" className="ms-2 p-3">No</label>
                          </div>
                        </div>
                        <div className={`${LoginStyle.error_message}`}>
                          {errors.financialModeling}
                        </div>

                      </>
                    )
                    }

                    <button
                      type="submit"
                      className={`${Object.keys(formik.errors).length !== 0 ||
                        !isFieldFocused
                        ? "opacity-50"
                        : ""
                        }`}
                      disabled={Object.keys(formik.errors).length !== 0}
                    >
                      Start Quiz
                    </button>
                  </form>
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
    </>
  );
}

export default LoginScreen;