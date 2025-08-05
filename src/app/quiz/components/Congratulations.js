import { useState } from "react";
import CertificateStyle from "../style/certificate.module.css";
import { useEffect } from "react";
import Style from "../style/home.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import TrustedBroker from "./TrustedBroker/TrustedBroker";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Congratulations(props) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 576
  );
  const [visibleCards, setVisibleCards] = useState(3);

  const [timeTaken, settimeTaken] = useState(0);
  const [userMarks, setuserMarks] = useState(0);
  const [totalmarks, setTotalMarks] = useState(0);
  const [resultimgurl,setResultImgurl]=useState();
  const [rank,setRank]=useState();
  const [message,setMessage]=useState();


  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes > 0 ? minutes + ' minutes' : ''} ${remainingSeconds > 0 ? remainingSeconds + ' seconds' : ""}`;
  };


  useEffect(() => {
    const quizResult = JSON.parse(localStorage.getItem("quizResponse"));
    console.log(quizResult)
    settimeTaken(quizResult?.completionTime);
    setuserMarks(quizResult?.userMarks);
    setTotalMarks(quizResult?.totalMarks);
    setResultImgurl(quizResult?.resultImg);
    setRank(quizResult?.rank);
    setMessage(quizResult?.message);


    
  })

  const showMoreCards = () => {
    setVisibleCards(visibleCards + 3);
  };

  useEffect(() => {
    // Function to update isMobile state
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth <= 576);
    };

    // Add event listener for the resize event
    typeof window !== "undefined" &&
      window.addEventListener("resize", handleResize);

    // Remove the event listener when the component unmounts
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customPrevArrow = (
    <button>
      <img src="/right_arrow.svg" alt="Previous" />
    </button>
  );
  const customNextArrow = (
    <button>
      <img src="/left_arrow.svg" alt="Previous" />
    </button>
  );

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: customNextArrow,
    prevArrow: customPrevArrow,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          dots: false,
          arrows: false,
        },
      },
    ],
  };

  // const registerData = JSON.parse(localStorage.getItem('registerData'));
  const userDetail = JSON.parse(localStorage.getItem("userDetails"));
  const [isQualified, setIsQualified] = useState(true);

  useEffect(() => {
    props.data?.responseData?.percentile == 0
      ? setIsQualified(false)
      : setIsQualified(true);
  });

  return (
    <>
      <section className={`${CertificateStyle.certificate}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className={`col-md-6  col-12 text-center ${CertificateStyle.congratulation_trophy_div}`}>
            {isQualified ? (
  resultimgurl ? (
    <img
      src={resultimgurl}
      className={CertificateStyle.certificate_img}
      alt="Result Certificate"
    />
  ) : (
    <img
      src="/trophy.svg"
      className={CertificateStyle.certificate_img}
      alt="Trophy"
    />
  )
) : (
  <img
    src="/failed.svg"
    className={CertificateStyle.certificate_img}
    alt="Failed"
  />
)}

              {isQualified ? (
                rank ?(
                  <p className={`${CertificateStyle.strip_banner}`}>
                  {" "}
                  <span>{rank}</span>
                </p>

                ):(
                  <p className={`${CertificateStyle.strip_banner}`}>
                  {" "}
                  <span>{isQualified && `You are in top `}</span>
                </p>
                )

                
              ) : (
                ""
              )}
              <h3 className={`${CertificateStyle.strip_banner_h3}`}>
                {isQualified
                  ? `Your Result Is Here`
                  : `Your Result Is Here`}{" "}
              </h3>
              <p className={`${CertificateStyle.achievement_p}`}>
                {isQualified
                  ? 
                  <>
                    scored <strong>{userMarks}/{totalmarks} marks</strong>.
                    <br></br>
                    <br></br>
                    Hello <strong>{userDetail?.name}!</strong> You completed the test in <strong>  {formatTime(timeTaken)}</strong>
                  </>
                  : "Unfortunately you are not eligible for the rewards"}
              </p>
            </div>
            <div
              className={`${CertificateStyle.fundamental} col-11 col-md-12 col-lg-9`}
            >
              {isQualified ? (
                message ?(
                  <>
                  {" "}

                  <p className={`${CertificateStyle.share_text} `}>
                   {message}
                  </p>
                  {/* <h3>
                    <a href="https://www.finnovationz.com/courses/free-stock-market-course">
                      Take the next step and claim now.
                    </a>
                  </h3> */}
                </>
                ):(
                  <>
                  {" "}

                  <p className={`${CertificateStyle.share_text} `}>
                  You will soon get the ranking communicated to you
                  </p>
                  {/* <h3>
                    <a href="https://www.finnovationz.com/courses/free-stock-market-course">
                      Take the next step and claim now.
                    </a>
                  </h3> */}
                </>
                )
                
              ) : (
                <>
                  {" "}
                  <p className={`${CertificateStyle.share_text} `}>
                    But Congratulations! You unlocked the FREE Stock Market
                    Course.
                  </p>
                  {/* <h3>
                    {" "}
                    <a
                      href="https://courses.finnovationz.com/free-stock-market-course"
                      target="_blank"
                    >
                      Take the next step and claim now.
                    </a>
                  </h3> */}
                </>
              )}
            </div>
          </div>
          {/* <div className="row change_arrow courseSlider " id="allcourses">
            <div className="col-lg-12 text-center pt-5">
              <p>Since you have completed the quiz, you can</p>
              <h2 className="fw-bold fs-4">
                Get Animated Courses Worth 21,700 for Free
              </h2>
              <p>
                These six courses cover everything you need to know about
                <br className="d-none d-md-block" /> the Indian stock market
              </p>
            </div>
            <Slider {...settings}>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/11.svg" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/12.png" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/13.png" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/11.svg" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/12.png" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4  mt-4 before_border ">
                <div className={`${Style.sliderItem} h-100`}>
                  <a href="#" target="_blank" rel="noreferrer">
                    <img src="/13.png" alt="" className="w-100" />
                    <h3>
                      The complete course on Indian stock market for beginners
                      (Hindi)
                    </h3>
                    <p>It’s company management who...</p>
                    <div
                      className={`d-flex align-items-center justify-content-start  ${Style.author_lesson_detail}`}
                    >
                      <div className="d-flex align-items-center">
                        <img src="/clock.svg" alt="" className="rounded-0" />
                        <span className="ms-1">8 hrs 29 mins</span>
                      </div>
                      <div className="d-flex align-items-center ms-lg-4 ps-3">
                        <img
                          src="/lesson_icon.svg"
                          alt=""
                          className="rounded-0"
                        />
                        <span className="ms-1">16 lessons</span>
                      </div>
                    </div>
                    <div
                      className={`d-flex align-items-center ${Style.reviews} mt-3 justify-content-start `}
                    >
                      <div className="d-flex align-items-center me-2">
                        <img
                          src={`/4.9.svg`}
                          alt=""
                          className={Style.ratingStar}
                        />
                      </div>
                      <span>(4.8/5.0 ratings)</span>
                    </div>
                    <DefaultImage
                      src={Files?.courses?.userss}
                      alt=""
                      className={` ${Style.allusers} my-4`}
                    />

                    <div
                      className={`border-top pt-4 d-flex align-items-center justify-content-between ${Style.cardfooter} `}
                    >
                      <h4 className="mb-0">₹2999</h4>
                      <a
                        href="#"
                        target="_blank"
                        rel="noreferrer"
                        className={`site_btn text-decoration-none d-inline-block ${Style.coursebtn}`}
                      >
                        Buy Now
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </Slider>
          </div>
          <div className="row py-md-5 mt-lg-5">
            <div className="col-md-12">
              <div className="stocks-area">
                <p>
                  We have collaborated with some of the best companies to get
                  these courses to you for free. You just need to open a free
                  demat account with any one of them from the link below.
                </p>
              </div>
              <div className="all-stocks-name">
                <TrustedBroker />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Congratulations;
