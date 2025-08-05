import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Modal from "react-bootstrap/Modal";
import "./TabForm.css";
import { Rating } from "@mui/material";
import Link from "next/link";

function TabForm() {
  const [activeTabKey, setActiveTabKey] = useState("Investor");
  const [errorMessage, setErrorMessage] = useState("");
  const [show, setShow] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [data, setData] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleTabChange = (key) => {
    setActiveTabKey(key);
  };

  const clearErrorMessage = () => {
    setErrorMessage("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
      email: "",
      experience: "",
      exploreFutureAndOptions: false,
      name: "",
      phoneNumber: "",
      userType: activeTabKey,
    };

    formData.forEach((value, key) => {
      if (key === "fullname") {
        data.name = value;
      } else if (key === "email") {
        data.email = value;
      } else if (key === "contact") {
        data.phoneNumber = value;
      } else if (key === "experience") {
        data.experience = value;
      } else if (key === "explore") {
        data.exploreFutureAndOptions = value === "Yes";
      }
    });

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BROKER_API_URL}/api/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            secret:
              "bce25d786301218b8803978b63474d9601742657aee7555eb774bb57c80b4aad",
          },
          body: JSON.stringify(data),
        }
      );

      const responseData = await response.json();
      if (response.status !== 200) {
        setErrorMessage(responseData[0].msg);
      } else {
        setShow(true);
        setErrorMessage("");
        setRecommendations(responseData?.data?.recommendations);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect hook to fetch data when the component mounts
  //     useEffect(() => {
  //       const fetchData = async () => {
  //         try {
  //           // Make a GET request using fetch
  //           const response = await fetch('https://dev.finnovationz.com:3250/api/broker');

  //           // Check if response is successful (status code 200)
  //           if (response.ok) {
  //             // If successful, parse the JSON response
  //             const jsonData = await response.json();

  //             // Update the state with the fetched data
  //             setData(jsonData);
  //           } else {
  //             // If response is not successful, throw an error
  //             throw new Error('Failed to fetch data');
  //           }
  //         } catch (error) {
  //           console.error('Error fetching data:', error);
  //         }
  //       };

  //       // Call the fetchData function when the component mounts
  //       fetchData();
  //     }, []);

  //   const uptoxRating = data?.data[0].ratings.platformRating

  //   const angleRating = data?.data[1].ratings.platformRating
  //   const dhanRating = data?.data[3].ratings.platformRating

  return (
    <div className="ctaAction">
      <Tabs
        defaultActiveKey="Investor"
        id="justify-tab-example"
        className=""
        justify
        activeKey={activeTabKey}
        onSelect={handleTabChange}
      >
        <Tab eventKey="Investor" title="Investor">
          <form action="" onSubmit={handleSubmit}>
            <input type="hidden" name="userType" value="investor" />
            <div className="form-group position-relative mt-4 mt-md-3">
              <label className="form-lebel" htmlFor="fullname">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label className="form-lebel" htmlFor="email">
                Email id <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label className="form-lebel" htmlFor="contact">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="contact"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label className="form-lebel" htmlFor="experience">
                What’s your experience as an Investor?{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                name="experience"
                id="experience"
                className="form-control form-select"
                onChange={clearErrorMessage}
              >
                <option value="beginner">Beginner</option>
                <option value="1+ year">1+ years</option>
                <option value="3+ year">3+ years</option>
              </select>
            </div>
            <div className="d-flex align-items-center justify-content-between experience mt-4 mt-md-3">
              <span>
                Would you like to explore futures and options in future?
              </span>
              <select
                name="explore"
                id=""
                className="form-control form-select"
                onChange={clearErrorMessage}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {errorMessage && (
              <div className="text-danger mt-4 mt-md-3">{errorMessage}</div>
            )}
            <div className="text-center">
              <button className="site_btn submit-btn">Submit Now</button>
            </div>
          </form>
        </Tab>
        <Tab eventKey="Trader" title="Trader">
          <form action="" onSubmit={handleSubmit}>
            <input type="hidden" name="userType" value="trader" />
            <div className="form-group position-relative mt-4 mt-md-3">
              <label htmlFor="fullname">
                Full Name <span className="text-danger">*</span>
              </label>
              <input
                type="text"
                className="form-control"
                name="fullname"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label htmlFor="email">
                Email id <span className="text-danger">*</span>
              </label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label htmlFor="contact">
                Contact Number <span className="text-danger">*</span>
              </label>
              <input
                type="number"
                className="form-control"
                name="contact"
                onChange={clearErrorMessage}
              />
            </div>
            <div className="form-group position-relative mt-4 mt-md-3">
              <label htmlFor="experience">
                What’s your experience as a Trader?{" "}
                <span className="text-danger">*</span>
              </label>
              <select
                name="experience"
                id="experience"
                className="form-control form-select"
                onChange={clearErrorMessage}
              >
                <option value="beginner">Beginner</option>
                <option value="1+ year">1+ years</option>
                <option value="3+ year">3+ years</option>
              </select>
            </div>
            <div className="d-flex align-items-center justify-content-between experience mt-4 mt-md-3">
              <span>
                Would you like to explore futures and options in future?
              </span>
              <select
                name="explore"
                id=""
                className="form-control form-select"
                onChange={clearErrorMessage}
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            {errorMessage && (
              <div className="text-danger mt-4 mt-md-3">{errorMessage}</div>
            )}
            <div className="text-center">
              <button className="site_btn submit-btn">Submit Now</button>
            </div>
          </form>
        </Tab>
      </Tabs>

      {show ? (
        <Modal
          show={show}
          size="lg"
          onHide={handleClose}
          className="form-popup"
        >
          <Modal.Header closeButton>
            <Modal.Title>Select Broker</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              {recommendations.map((recommendation, index) => {
                const stars = [4.7, 4.7, 4.8, 4.6]; // Assuming stars array corresponds to each recommendation
                return (
                  <div
                    key={recommendation._id}
                    className="col-md-6 mt-4 mt-md-3"
                  >
                    <div className="d-block broker-inner-detail shadow rounded-4 p-4 ">
                      <div className="text-center rating d-flex d-lg-block align-items-center">
                        <img
                        loading="lazy"
                          src={recommendation.logo}
                          alt={recommendation.name}
                          className="brand_logo_i"
                        />
                        <div className="text-start text-lg-center">
                          <h3 className="mb-1">{recommendation.name}</h3>
                          <span>
                            {" "}
                            <Rating
                              name="platform-rating"
                              value={stars[index]}
                              precision={0.5}
                              size="large"
                              readOnly
                              sx={{
                                "& .MuiRating-iconFilled": {
                                  color: "#FFC107",
                                  fontSize: "16px",
                                },
                                "& .MuiRating-iconEmpty": {
                                  color: "#CCCCCC",
                                  fontSize: "16px", 
                                },
                              }}
                            />
                          </span>
                          <br />
                          <span>({stars[index]}/5.0 ratings)</span>{" "}
                        </div>
                      </div>
                      <Link
                        href={recommendation.url}
                        className="text-center d-block text-decoration-none site_btn mt-4 demat-form-btn"
                      >
                        Open Demat Account
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default TabForm;
