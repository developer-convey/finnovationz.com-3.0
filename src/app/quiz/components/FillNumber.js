import React, { useState } from "react";
import LoginStyle from "../style/login.module.css";

import { useEffect } from "react";
import { LOGIN_URL } from "../utils/baseUrl";
import { useFormik } from "formik";

const FillNumber = (props) => {
  const [isDisable, setIsDisable] = useState(true);
  const [isFieldFocused, setFieldFocus] = useState(false);
  const formik = useFormik({
    initialValues: {
      phone: props.phone || "", // Assuming props.phone is the initial value
    },
    validate: (values) => {
      const errors = {};
      if (!values.phone) {
        errors.phone = "This field id Required";
      } else if (!/^\d+$/.test(values.phone)) {
        errors.phone = "Invalid phone number";
      } else if (values.phone.length !== 10) {
        errors.phone = "Phone number must be exactly 10 digits";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        props.setPhone(values.phone);

        const data = { phone: values.phone };
        const response = await fetch(
          `https://news.finnovationz.com/api/user-auth/request-otp`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
        const responseData = await response.json();
        if (responseData.status === 200) {
          props?.setRegistered(true);
          if (responseData.isRegistered) {
            props.setStep(2);
          } else {
            props.setStep(3);
          }
        }
      } catch (error) {
        console.error("Error fetching quiz data:", error);
      }
    },
  });

  const handleOTPSend = async (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    if (Object.keys(formik.errors).length !== 0) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [formik.errors]);
  return (
    <>
      <div className="">
        <div className={`${LoginStyle.FillNumber} text-center`}>
          <h4>Please enter your mobile number and get started</h4>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`${LoginStyle.form_group} position-relative input-group`}
            >
              <label>Mobile Number</label>
              <span className="input-group-text bg-transparent border-0">+91</span>
              <input
                // type="number"
                inputMode="numeric"
                type="tel"
                name="phone"
                value={formik.values.phone}
                onChange={(e) => {
                  setFieldFocus(true);
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                className={`${LoginStyle.tel_input} input-lg border-start ps-2`}
                placeholder="Enter your mobile number"
                step="1"
                maxLength="10"
                // onFocus={() => (true)}
              />
            </div>
            {formik.touched.phone && formik.errors.phone && (
              <div className={`${LoginStyle.error_message}`}>
                {formik.errors.phone}
              </div>
            )}
            <button
              type="submit"
              className={`${
                Object.keys(formik.errors).length !== 0 || !isFieldFocused
                  ? "opacity-50"
                  : ""
              }`}
              disabled={Object.keys(formik.errors).length !== 0}
            >
              Get started
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FillNumber;
