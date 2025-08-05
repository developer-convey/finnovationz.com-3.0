import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";

function FmvmMultipleForm(props) {
  const { courseBool = false } = props;
  const router = useRouter();
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");

  useEffect(() => {
    if (courseBool) {
      // Inject Google Analytics script if needed
      //   gtag("config", "AW-10807341659");
    }
  }, [courseBool]);

  const postDataToAPI = async (data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_FORM_API_URL}users/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        // Handle success
        // Redirect to thank you page
        router.push("/courses/fmvm/thankyou");
      } else {
        console.error("Failed to post data to the API");
      }
    } catch (error) {
      console.error("Error posting data to the API:", error);
    }
  };

  const handleNextButtonClick = (event) => {
    event.preventDefault();
    let isValid = true;

    if (name === "") {
      setNameError("Please enter your name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!/^\d+$/.test(whatsapp) || whatsapp.length !== 10) {
      setWhatsappError("Please enter a valid WhatsApp number (10 digits)");
      isValid = false;
    } else {
      setWhatsappError("");
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      const data = {
        email: email,
        mobileNo: parseInt(whatsapp),
        username: name,
        platform: "FMVM",
      };

      postDataToAPI(data);
    }
  };

  return (
    <>
      {courseBool && (
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=AW-10807341659`}
          strategy="afterInteractive"
        />
      )}
      <section className="stepForm ModelForm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 mt-5">
              <form className="step_forms">
                <div className="form-group mb-4">
                  <label htmlFor="fname">
                    Full Name
                  </label>
                  <fieldset>
                    <legend>
                      Full Name <span className="text-danger">*</span>
                    </legend>
                    <input
                      type="text"
                      id="fname"
                      name="fname"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                    {nameError && (
                      <span className="error-message">{nameError}</span>
                    )}
                  </fieldset>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="whatsapp">
                    WhatsApp number 
                  </label>
                  <fieldset>
                    <legend>
                      WhatsApp no <span className="text-danger">*</span>
                    </legend>
                    <input
                      type="text"
                      id="whatsapp"
                      name="whatsapp"
                      className="form-control"
                      value={whatsapp}
                      onChange={(e) => setWhatsapp(e.target.value)}
                    />
                    {whatsappError && (
                      <span className="error-message">{whatsappError}</span>
                    )}
                  </fieldset>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="email">
                    Mail ID 
                  </label>
                  <fieldset>
                    <legend>
                      Email id <span className="text-danger">*</span>
                    </legend>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailError && (
                      <span className="error-message">{emailError}</span>
                    )}
                  </fieldset>
                </div>
                <div className="d-flex align-items-center">
                  <button
                    className="fromBtn nextbtn"
                    onClick={handleNextButtonClick}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FmvmMultipleForm;
