import React, { useState, useEffect } from "react";
import Script from 'next/script';

function MuiltiStepForm(props) {
  const { courseBool = false} = props;
  const [currentStep, setCurrentStep] = useState(0);
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [NameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedBrokerLink, setSelectedBrokerLink] = useState("");

 useEffect(() => {
  if(courseBool) {
    // Inject Google Analytics script if needed
    if (currentStep === 5) {
      gtag('event', 'conversion', {'send_to': 'AW-10807341659/U5oeCO7-usIZENvkq6Eo'});
      // const script = document.createElement("script");
      // script.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_TRACKING_ID}`;
      // script.async = true;
      // document.body.appendChild(script);

      // script.onload = () => {
      //   window.dataLayer = window.dataLayer || [];
      //   function gtag(){dataLayer.push(arguments);}
      //   gtag('js', new Date());

      //   gtag('config', process.env.NEXT_PUBLIC_GA_TRACKING_ID);
      // };
    }
    
    // Inject Google Ads conversion tracking script if needed
    if (currentStep === 5) {
      // const adsScript = document.createElement("script");
      // adsScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_ADS_TRACKING_ID}`;
      // adsScript.async = true;
      // document.body.appendChild(adsScript);

      // adsScript.onload = () => {
      //   window.dataLayer = window.dataLayer || [];
      //   function gtag(){dataLayer.push(arguments);}
      //   gtag('js', new Date());
        gtag('config', 'AW-10807341659');

        // Conversion Tracking
        gtag('event', 'conversion', {
          'send_to': `${'AW-10807341659'}/YOUR_CONVERSION_ID`,
        });
      };
    }
 }, [currentStep, courseBool])

  function handleName(e) {
    setname(e.target.value);
    setCurrentStep(1);
  }
  function handleNumber(e) {
    setWhatsapp(e.target.value);
    setCurrentStep(2);
  }
  function handleEmail(e) {
    setEmail(e.target.value);
    setCurrentStep(3);
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "optradio") {
      setSelectedBrokerLink(value);
      setCurrentStep(5);
    }
  };

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
      } else {
        // Handle error
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
      setNameError("Please enter a Name");
      isValid = false;
    }
    if (!/^\d+$/.test(whatsapp)) {
      setWhatsappError("Please enter a valid WhatsApp number");
      isValid = false;
    } else if (whatsapp.length > 10 || whatsapp.length < 10) {
      setWhatsappError(
        "Please enter a valid WhatsApp number (maximum 10 digits)"
      );
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
        platform: "Free stoke market course",
      };

      if (currentStep === 3) {
        postDataToAPI(data);
      }
      if (currentStep === 5 && selectedBrokerLink) {
        typeof window !== "undefined" &&
          window.open(selectedBrokerLink, "_blank");
      }
      setCurrentStep(currentStep + 1);
    }
  };
  const handleBackButtonClick = (event) => {
    event.preventDefault();
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
    if (currentStep === 1) {
      setname("");
    } else if (currentStep === 2) {
      setWhatsapp("");
    } else if (currentStep === 3) {
      setEmail("");
    }
  };

  return (
    <>
     {courseBool &&   
       <Script
        src={`https://www.googletagmanager.com/gtag/js?id=AW-10807341659`}
        strategy="afterInteractive"
      /> }
     {courseBool &&     <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10807341659');
        `}
      </Script> }
      <section className="stepForm ModelForm">

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="steps d-flex align-items-center justify-content-around">
                <div
                  className={`number field4 ${
                    currentStep > 4 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 4 ? "✔" : "1"}
                </div>
                <div
                  className={`number field6 ${
                    currentStep >= 6 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 6 ? "✔" : "2"}
                </div>
              </div>
            </div>

            {currentStep < 4 ? (
              <div className="col-xl-6 mt-5">
                <form className="step_forms">
                  <div className="form-group mb-4">
                    <label htmlFor="fname">
                      We are FinnovationZ, and you are?
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
                        onChange={handleName}
                      />
                      {NameError && (
                        <span className="error-message">{NameError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="whatsapp">
                      WhatsApp number you would like to use for Finance Club
                    </label>
                    <fieldset>
                      <legend>
                        WhatsApp no <span className="text-danger">*</span>
                      </legend>
                      <input
                        type="number"
                        id="whatsapp"
                        name="whatsapp"
                        className="form-control"
                        value={whatsapp}
                        onChange={handleNumber}
                      />
                      {whatsappError && (
                        <span className="error-message">{whatsappError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group mb-4">
                    <label htmlFor="email">
                      Mail ID you would like to use for Finance Club
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
                        onChange={handleEmail}
                      />
                      {emailError && (
                        <span className="error-message">{emailError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="fromBtn backbtn"
                      onClick={handleBackButtonClick}
                    >
                      Back
                    </button>
                    <button
                      className="fromBtn nextbtn"
                      onClick={handleNextButtonClick}
                    >
                      Next
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              <>
                <div className="col-md-12 text-center ModelFormHeadings mt-5">
                  <h2>
                    Open a free Demat Account With any of the below stock
                    brokers
                  </h2>
                  <p className="mb-0">
                    Niche diye gaye kisi bhi ek stock broker ke sath apna free
                    demat account kholiye
                  </p>
                </div>

                <div className="col-md-4 resPadding">
                  <div className="ModelCard">
                    <div className="ModelCardHeader">
                      <div className="d-flex align-items-center">
                        <img src="/upstox.svg" alt="upstox" />
                        <h4>Upstox</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input radio_button"
                          id="radio1"
                          name="optradio"
                          value="https://rebrand.ly/fngqxga"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="ModelCardBody">
                      <h5>
                        <span>Account Opening Charges</span> - Free
                      </h5>
                      <h5>
                        <span>Annual Maintenance Charges</span> - Free
                      </h5>
                      <h5>
                        <span>Brokerage</span> - Rs. 20 or 0.25%{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 resPadding">
                  <div className="ModelCard">
                    <div className="ModelCardHeader">
                      <div className="d-flex align-items-center">
                        <img src="/dhan.svg" alt="dhan" />
                        <h4>Dhan</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input radio_button"
                          id="radio1"
                          name="optradio"
                          value="https://invite.dhan.co/?join=PRWE10"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="ModelCardBody">
                      <h5>
                        <span>Account Opening Charges</span> - Free
                      </h5>
                      <h5>
                        <span>Annual Maintenance Charges</span> - Free
                      </h5>
                      <h5>
                        <span>Brokerage</span> - Rs. 20 or 0.03% Delivery is
                        free
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 resPadding">
                  <div className="ModelCard">
                    <div className="ModelCardHeader">
                      <div className="d-flex align-items-center">
                        <img src="/angel_one.svg" alt="angleone" />
                        <h4>Angel One</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          className="form-check-input radio_button"
                          id="radio1"
                          name="optradio"
                          value="https://tinyurl.com/2yc8cteu"
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="ModelCardBody">
                      <h5>
                        <span>Account Opening Charges</span> - Free
                      </h5>
                      <h5>
                        <span>Annual Maintenance Charges</span> - Free for the
                        first year, then Rs 23.6/month
                      </h5>
                      <h5>
                        <span>Brokerage</span> - Rs. 20 or 0.25%
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-md-8 mt-4">
                  <div className="d-flex align-items-center justify-content-center">
                    <button
                      className="fromBtn backbtn"
                      onClick={handleBackButtonClick}
                    >
                      Back
                    </button>
                    <button
                      className="fromBtn nextbtn"
                      onClick={handleNextButtonClick}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default MuiltiStepForm;
