// app/quiz/components/form.tsx (or LoginScreen.tsx)

import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import LoginStyle from "../style/login.module.css";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { toast } from 'react-toastify'; // Import toast for notifications
import Head from "next/head";
function LoginScreen({
  setIsShow,
  quizid,
  isPrivate,
  setStartTimer,
  setIsQuizRuleShow,
  onLoginComplete,
  buttonUrl,
  // New integration props
  googleAnalyticsStatus,
  googleAnalyticsId,
  facebookPixelStatus,
  facebookPixelId,
  googleTagManagerStatus,
  googleTagManagerId,
  googleSheetsStatus,
  googleSheetId,
  pabblyStatus,
  pabblyId,
}) {
  const [lgShow, setLgShow] = useState(true);
  const [step, setStep] = useState(1); // This state seems unused
  const [phone, setPhone] = useState(""); // This state seems to be managed by formik now
  const [otp, setOtp] = useState(["", "", "", "", "", ""]); // This state seems unused
  const router = useRouter();
  const [isFieldFocused, setFieldFocus] = useState(false); // This state seems largely unused
  const [isRegistered, setIsRegistered] = useState(false); // This state seems unused
  const quizId = quizid;
  const [noApplicable, setNoApplicable] = useState(false); // This state seems unused for display
  const [response, setResponse] = useState(null); // This state seems unused for display

  // The formData state is redundant if using Formik
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   mobile: phone,
  //   studentid: "",
  //   financialModeling: "",
  // });
const api='https://brockersbackend.finnovationz.com'
  const initialValues = {
    name: "",
    email: "",
    mobile: phone,
    studentid: "",
    financialModeling: "",
  };

  useEffect(() => {
    // Reset Formik form when phone (or other initialValues) changes, if necessary.
    // However, given the flow, this might not be strictly needed here.
    formik.resetForm({
      values: {
        name: "",
        email: "",
        mobile: phone, // This 'phone' state is still 0, consider if it should be values.mobile
        studentid: "",
        financialModeling: "",
      },
    });
  }, [phone]); // Dependency on phone, ensure 'phone' is updated correctly if needed from external source

  const validate = (values) => {
    const errors= {}; // Explicitly type errors object

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

    // isPrivate is a number, so use strict equality for 1
    if (isPrivate === 1 && !values.studentid.trim()) {
      errors.studentid = "Student Id is required field";
    }

    // isPrivate is a number, so use strict equality for 1
    if (isPrivate === 1 && (values.financialModeling === "" || values.financialModeling === null)) {
        errors.financialModeling = "Please select 'Yes' or 'No' for financial modeling";
    }
    return errors;
  };

  const handleSubmit = async (values) => {
    localStorage.removeItem("userDetails"); // Clear previous user details

    // Construct userDetails to save and send
    const userDetailsToSave = {
      mobileNumber: values.mobile,
      name: values.name,
      email: values.email,
      // Only include studentId and financialModeling if isPrivate is 1
      ...(isPrivate === 1 && { studentId: values.studentid, financialModeling: values.financialModeling }),
      quizSubmitted: false, // Will be updated to true after actual quiz submission
      platform: "web",
      quizId: quizid || '',
      googleAnalyticsStatus: googleAnalyticsStatus,
      googleAnalyticsId: googleAnalyticsId,
      facebookPixelStatus: facebookPixelStatus,
      facebookPixelId: facebookPixelId,
      googleTagManagerStatus: googleTagManagerStatus,
      googleTagManagerId: googleTagManagerId,
      googleSheetsStatus: googleSheetsStatus,
      googleSheetId: googleSheetId,
      pabblyStatus: pabblyStatus,
      pabblyId: pabblyId,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetailsToSave));

    console.log("--- LoginScreen handleSubmit initiated ---");
    console.log("User details to be submitted:", JSON.stringify(userDetailsToSave, null, 2));

    try {
      // Step 1: Submit user details to your backend's results/user endpoint
      const submitRes = await fetch(
        `${process.env.NEXT_PUBLIC_QUIZ_API_URL}/results/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userDetailsToSave), // Send user details
        }
      );

      const data = await submitRes.json();
      localStorage.setItem("quizResponse", JSON.stringify(data));
      console.log("Response from results/user API:", data);

      if (data.statusCode === 200) {
        // Step 2: Handle integrations if isPrivate is 2 (Campaign Quiz)
        if (isPrivate === 2) {
          const userInfo = {
            name: values.name,
            email: values.email,
            quizId: quizid || '',
            phoneNumber: values.mobile, // Assuming backend expects phoneNumber
          };

          // Define an object to hold integration data
          const integrationEvents = [];

          // Google Analytics
          if (googleAnalyticsStatus && googleAnalyticsId) {
            integrationEvents.push(async () => {
              console.log("Sending data to Google Analytics (Quiz):", { quizId, userInfo, gaId: googleAnalyticsId });
              try {
                await fetch(`${api}/api/form/log-event`, { // Adjust endpoint if needed
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    quizId: quizId, // Use quizId
                    integrationType: "google-analytics",
                    integrationId: googleAnalyticsId,
                    userInfo: userInfo,
                    event: "quiz_submission_details", // Example event name
                    // Add any other relevant data for GA here
                  }),
                });
                toast.success("Google Analytics event sent!");
              } catch (err) {
                console.error("Error sending GA event:", err);
                toast.error("Failed to send GA event.");
              }
            });
          }

          // Facebook Pixel
          if (facebookPixelStatus && facebookPixelId) {
            integrationEvents.push(async () => {
              console.log("Sending data to Facebook Pixel (Quiz):", { quizId, userInfo, fbPixelId: facebookPixelId });
              try {
                await fetch(`${api}/api/form/log-event`, { // Adjust endpoint if needed
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    quizId: quizId, // Use quizId
                    integrationType: "facebook-pixel",
                    integrationId: facebookPixelId,
                    userInfo: userInfo,
                    event: "quiz_lead", // Example event name
                    // Add any other relevant data for FB Pixel here
                  }),
                });
                toast.success("Facebook Pixel event sent!");
              } catch (err) {
                console.error("Error sending FB Pixel event:", err);
                toast.error("Failed to send FB Pixel event.");
              }
            });
          }

          // Google Tag Manager
          if (googleTagManagerStatus && googleTagManagerId) {
            integrationEvents.push(async () => {
              console.log("Sending data to Google Tag Manager (Quiz):", { quizId, userInfo, gtmId: googleTagManagerId });
              try {
                await fetch(`${api}/api/form/log-event`, { // Adjust endpoint if needed
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    quizId: quizId, // Use quizId
                    integrationType: "google-tag-manager",
                    integrationId: googleTagManagerId,
                    userInfo: userInfo,
                    event: "quiz_form_submit", // Example event name
                    // Add any other relevant data for GTM here
                  }),
                });
                toast.success("Google Tag Manager event sent!");
              } catch (err) {
                console.error("Error sending GTM event:", err);
                toast.error("Failed to send GTM event.");
              }
            });
          }

          // Google Sheets
          if (googleSheetsStatus && googleSheetId) {
            integrationEvents.push(async () => {
              console.log("Sending data to Google Sheets (Quiz):", { quizId, userInfo, sheetId: googleSheetId });
              try {
                // Adjust this endpoint if your backend has a dedicated one for Sheets
                await fetch(`${api}/api/form/log-event`, { // Assuming generic log-event endpoint
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    quizId: quizId, // Pass quizId
                    integrationType: "google-sheets",
                    sheetId: googleSheetId, // Pass sheetId
                    userInfo: userInfo,
                    timestamp: new Date().toISOString(),
                    // You might want to send structured quiz answers if relevant for the sheet
                    // e.g., quizResponses: { questionId1: answer1, questionId2: answer2 }
                  }),
                });
                toast.success("Google Sheets data sent!");
              } catch (err) {
                console.error("Error sending to Google Sheets:", err);
                toast.error("Failed to send data to Google Sheets.");
              }
            });
          }

          // Pabbly Webhook
          if (pabblyStatus && pabblyId) {
            integrationEvents.push(async () => {
              console.log("Sending data to Pabbly Webhook (Quiz):", { quizId, userInfo, webhookUrl: pabblyId });
              try {
                // Directly post to Pabbly Webhook URL from frontend, or proxy via backend
                // For simplicity, directly posting from frontend here, but backend proxy is safer.
                await fetch(pabblyId, { // Directly use pabblyId as the webhook URL
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    quizId: quizId,
                    userInfo: userInfo,
                    timestamp: new Date().toISOString(),
                    // Include any other data Pabbly expects from your quiz
                  }),
                });
                toast.success("Pabbly Webhook data sent!");
              } catch (err) {
                console.error("Error sending to Pabbly Webhook:", err);
                toast.error("Failed to send data to Pabbly Webhook.");
              }
            });
          }

          // Execute all queued integration events concurrently
          await Promise.all(integrationEvents.map(eventFn => eventFn()));

          // After all integrations are handled, redirect
          if (buttonUrl) {
            window.location.href = buttonUrl;
          } else {
            window.location.href = '/quiz'; // Default fallback
          }

        } else {
          // For non-campaign quizzes, proceed with quiz rules or direct submission
          if (quizId) {
            setIsShow(false);
            setIsQuizRuleShow(true);
          } else {
            // Fallback if quizId is not present
            window.location.href = '/quiz';
          }
        }

        // Call onLoginComplete to signal QuizQuestion that user details are submitted
        // Pass the user details to QuizQuestion so it can be used for final submission
        onLoginComplete(userDetailsToSave);

      } else if (data.statusCode === 400) {
        setNoApplicable(true);
        setResponse({ message: data.responseData, status: data.statusCode });
        toast.error(data.responseData || "Failed to submit user details.");
      }
    } catch (error) {
      console.error("Error submitting user details or integrations:", error);
      toast.error("An unexpected error occurred. Please try again.");
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
        <Head>
    <script
          dangerouslySetInnerHTML={{
            __html: `
               !function(f,b,e,v,n,t,s)
               {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
               n.callMethod.apply(n,arguments):n.queue.push(arguments)};
               if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
               n.queue=[];t=b.createElement(e);t.async=!0;
               t.src=v;s=b.getElementsByTagName(e)[0];
               s.parentNode.insertBefore(t,s)}(window, document,'script',
               'https://connect.facebook.net/en_US/fbevents.js');
               fbq('init', '403234998994611');
               fbq('track', 'PageView');
             `,
          }}
        />
    </Head>
      <Modal
        size="lg"
        show={lgShow}
        aria-labelledby="example-modal-sizes-title-lg"
        className="login_popup"
      >
        <Modal.Header
          className={`${LoginStyle.login_header}`}
        ></Modal.Header>
        <Modal.Body className={`${LoginStyle.login_content} pb-md-0`}>
          <div className="row equal-height-row">
            <div className="col-md-6 position-relative">
              <img
                src="/quiz_logo.svg"
                className={`${LoginStyle.quiz_logo} quiz_logo pb-md-0`}
                alt="Quiz Logo"
              />
              <img
                src="/login_img.svg"
                className={`${LoginStyle.login_content_img} login_content_img pb-md-0 w-100`}
                alt="Login Illustration"
              />
              <img
                src="/white_shadow.svg"
                className="white_shadow d-md-none d-block"
                alt="White Shadow"
              />
            </div>
            <div className="col-md-6 bg-white main_content">
              {step == 1 && ( // Using step 1, assuming it's the user details form
                <div className="text-center ps-lg-3 pe-lg-3 ">
                  <h2 className="d-md-block d-none pt-md-4">Result Time!</h2>
                  <p className="d-md-block d-none">
                    Where should we send you the result
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
                      <label>Phone Number (WhatsApp Preferred)</label>
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
                          if (/^\d{0,10}$/.test(input)) { // Allows empty string and up to 10 digits
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
                              value="1" // Use string value "1"
                              id="yesOption"
                              checked={values.financialModeling === "1"} // Check for string "1"
                              onChange={(e) => {
                                setFieldFocus(true);
                                handleChange(e);
                              }}
                            />
                            <label htmlFor="yesOption" className="ms-2 me-4 p-3">Yes</label>

                            <input
                              type="radio"
                              name="financialModeling"
                              value="0" // Use string value "0"
                              id="noOption"
                              checked={values.financialModeling === "0"} // Check for string "0"
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
                    )}

<button
  type="submit"
  className={`btn btn-primary d-flex align-items-center justify-content-center gap-2 ${
    Object.keys(formik.errors).length !== 0 || !isFieldFocused
      ? "opacity-50"
      : ""
  }`}
  disabled={Object.keys(formik.errors).length !== 0 || formik.isSubmitting}
>
  {formik.isSubmitting && (
    <span
      className="spinner-border spinner-border-sm"
      role="status"
      aria-hidden="true"
    ></span>
  )}
  {formik.isSubmitting ? "Submitting..." : "Send Me Result"}
</button>

                  </form>
                </div>
              )}

              <p className={`${LoginStyle.tem_con} text-center bottom_term`}>
                By continuing, I agree to FinnovationZ <br />
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