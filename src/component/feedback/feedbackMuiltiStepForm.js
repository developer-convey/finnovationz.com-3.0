import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import '@/pages/feedback/feedback.css'
import { isMobile } from "react-device-detect";
function MuiltiStepForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [whatsapp, setWhatsapp] = useState("");
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [whatsappError, setWhatsappError] = useState("");
  const [NameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [selectedBrokerLink, setSelectedBrokerLink] = useState("");
  const [comment, setComment] = useState("");
  const [commentError, setcommentError] = useState("");

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
  function handleComment(e) {
    setComment(e.target.value);
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
        // Handle error, log or display an error message
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
    if (comment === "") {
      setcommentError("Please add your comment");
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
        platform: "feedback",
        comments: comment,
        ratings:'2.5'
      };

      if (currentStep === 3) {
        postDataToAPI(data);
      }
      // Open the selected broker link if available
      if (currentStep === 5 && selectedBrokerLink) {
        typeof window !== "undefined" &&
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
              <div className=" d-flex align-items-center justify-content-around  mt-5">
                {/* <div className={`dots field1 active ${currentStep >= 1 ? 'green' : ''}`}></div> */}
                {/* <div className={`dots field2 ${currentStep >= 2 ? 'green' : ''}`}></div> */}
                {/* <div className={`dots field3 ${currentStep >= 3 ? 'green' : ''}`}></div> */}
                {/* <div
                  className={`number field4 ${
                    currentStep > 4 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 4 ? "✔" : "1"}
                </div>
                {/* <div className={`dots field5 ${currentStep >= 5 ? 'green' : ''}`} ></div> */}
                {/* <div
                  className={`number field6 ${
                    currentStep >= 6 ? "donestep" : ""
                  }`}
                >
                  {currentStep >= 6 ? "✔" : "2"}
                </div>  */}
              </div>
            </div>

            {/* {currentStep < 4 ? ( */}
              <div className="col-xl-6 mt-5" style={{display:'flex',flexDirection:'column',alignContent:'center' ,justifyContent:'center'}}>
               <div style={{display:'flex' ,alignItems:"center" ,justifyContent:'center'}}>
                <p style={{fontSize: isMobile? '34px': '36px' ,lineHeight:'45.18px' ,color:'#000' ,fontWeight:'400'}}>Hi Finnovationz User! Please Rate your<span style={{color:'#3782D9'}}> Experience </span>with us</p>
               </div>
               <div style={{display:'flex' ,marginTop:20}}>
                <p style={{fontSize:'32px' ,lineHeight:'45.18px' ,color:'#000'}}>What do you think of us</p>
               </div>
               <ReactStars
                  count={5}
                  value={0} // Set the fixed value here
                  size={50}
                  activeColor="#FFC107"
                  isHalf={true}
                  edit={true} // Disable user interaction
                  className="custom-stars"
                />
              </div>
              <div className="col-xl-6 mt-5">
                <form className="step_forms">
                  <div className="form-group mb-4">
                  
                    <fieldset>
                  
                      <input
                        type="text"
                        id="fname"
                        name="fname"
                        className="inputfieldMain"
                        placeholder="Full Name *"
                        value={name}
                        onChange={handleName}
                      />
                      {NameError && (
                        <span className="error-message">{NameError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group mb-4">
                  
                    <fieldset>
                  
                      <input
                        type="number"
                        id="whatsapp"
                        name="whatsapp"
                        placeholder="Whatsapp No *"
                        className="inputfieldMain"
                        value={whatsapp}
                        onChange={handleNumber}
                      />
                      {whatsappError && (
                        <span className="error-message">{whatsappError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group mb-4">
                    
                    <fieldset>
                     
                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="email *"
                        className="inputfieldMain"
                        value={email}
                        onChange={handleEmail}
                      />
                      {emailError && (
                        <span className="error-message">{emailError}</span>
                      )}
                    </fieldset>
                  </div>
                  <div className="form-group mb-4">
                  
                    <fieldset>
                      {/* <legend>
                        comments <span className="text-danger">*</span>
                      </legend> */}
                      <textarea
                        rows={3}
                        type="text"
                        id="comments"
                        name="comments"
                        placeholder="comments *"
                        className="inputfieldMain"
                        value={comment}
                        onChange={handleComment}
                      />
                      {commentError && (
                        <span className="error-message">{commentError}</span>
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
            {/* ) : ( */}
              <>
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
                        <img src="/upstox.svg" alt="upstox" />
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
                        <img src="/dhan.svg" alt="dhan" />
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
                        <img src="/angel_one.svg" alt="angleone" />
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
                {/* <div
                  style={{
                    height: "40vh",
                    display: "flex",
                    justifyContent: "center",
                    paddingTop: 150,
                  }}
                >
                  <h1 className="text-center   font-extrabold">
                    Your feedback submited successfully
                  </h1>
                </div> */}
              </>
            {/* )} */}
          </div>
        </div>
      </section>
    </>
  );
}

export default MuiltiStepForm;
