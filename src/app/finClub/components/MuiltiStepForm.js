import React, { useState } from "react";
import { useRouter } from "next/navigation";

function MuiltiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [NameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedBrokerLink, setSelectedBrokerLink] = useState("");
  const router = useRouter();

  // const apiUrl =process.env.REACT_APP_API_URL
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
        "https://money.finnovationz.com:3008/users/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.status == 200) {
        router.push("/money-mastery-marathi/thankyou");
      } else {
        if (response.status === 500) {
          // Handle 500 Internal Server Error
          alert("User already resister");
            window.location.href = "/money-mastery-marathi";
        } else {
          // Handle other errors
          console.error("Failed to post data to the API");
        }
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
    // Validation for WhatsApp number
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

    // Validation for Email
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (isValid) {
      // Perform actions specific to step 4 or handle submission
      const data = {
        email: email,
        mobileNo: parseInt(whatsapp), // Assuming WhatsApp is a number
        username: name, // Change this value as per your requirements
      };

    

      if (currentStep === 3) {
        postDataToAPI(data);
      }
      // Open the selected broker link if available
      if (currentStep === 5 && selectedBrokerLink && typeof window !== "undefined" ) {
        window.open(selectedBrokerLink, "_blank"); // Open link in a new tab
      }
      setCurrentStep(currentStep + 1);

      // Move to the next step
    }
  };
  const handleBackButtonClick = (event) => {
    event.preventDefault();
    // Move back one step if the current step is greater than 0
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
      <section className="stepForm ModelForm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              {/* <div className="steps d-flex align-items-center justify-content-around">
                <div className={`dots field1 active ${currentStep >= 1 ? 'green' : ''}`}></div>
                <div className={`dots field2 ${currentStep >= 2 ? 'green' : ''}`}></div>
                <div className={`dots field3 ${currentStep >= 3 ? 'green' : ''}`}></div>
                <div
                  className={`number field4 ${
                    currentStep > 4 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 4 ? "✔" : "1"}
                </div>
                <div className={`dots field5 ${currentStep >= 5 ? 'green' : ''}`} ></div>
                <div
                  className={`number field6 ${
                    currentStep >= 6 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 6 ? "✔" : "2"}
                </div>
              </div> */}
            </div>

            <div className="col-xl-6 mt-5">
              <form className="step_forms">
                <div className="form-group mb-4">
                  <label htmlFor="fname">
                    {/* We are FinnovationZ, and you are? */}
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
                      onChange={handleName}
                    />
                    {NameError && (
                      <span className="error-message">{NameError}</span>
                    )}
                  </fieldset>
                </div>
                <div className="form-group mb-4">
                  <label htmlFor="whatsapp">WhatsApp Number</label>
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
                  <label htmlFor="email">E-mail ID</label>
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
                    Submit
                  </button>
                </div>
              </form>
            </div>

            {/* <div className="col-md-12 text-center ModelFormHeadings mt-5">
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
                        <img src="./upstox.svg" alt="upstox" />
                        <h4>Upstox</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          class="form-check-input radio_button"
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
                        <img src="./dhan.svg" alt="dhan" />
                        <h4>Dhan</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          class="form-check-input radio_button"
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
                        <img src="./angel_one.svg" alt="angleone" />
                        <h4>Angel One</h4>
                      </div>
                      <div>
                        <input
                          type="radio"
                          class="form-check-input radio_button"
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
                </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default MuiltiStepForm;
