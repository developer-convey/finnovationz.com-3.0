
import React, { useState } from "react"; 
import Files from "@/config/file";
import Style from "../style/course.module.css";
import LoginScreen from "./LoginScreen";
import { useRouter } from "next/navigation";
 
function UpcomingQuiz({ quizdata }) {
  const [isShow, setIsShow] = useState(false);
  const [quizId, setquizId] = useState(false);
  const [isPrivate, setisPrivate] = useState('');
  const router = useRouter();

  const handlequizform = (id, isPrivate) => {
    setIsShow(true);
    setquizId(id);
    setisPrivate(isPrivate);
  }

  return (
    <>
      {/* {isShow && <LoginScreen setIsShow={setIsShow} quizId={quizId} isPrivate={isPrivate} />} */}
      <section className={` ${Style.UpcomingQuiz} `}>
        <div className={` ${Style.custome_container}  container`}>
          <div className="row jjustify-space-between align-items-center">
          {quizdata
              .filter(item => item.isPrivate === 0) 
              .map((item) => {
              return (
                <div className="col-md-6 " key={item._id}>
                  <div className={` ${Style.custome_card}`}>
                    <div
                      className={` ${Style.custome_card_img_parent} position-relative`}
                    >
                      <img
                        loading="lazy"
                        src={item.imageUrl}
                        className={` ${Style.card_img}`}
                      />
                      <span>LIVE NOW</span>
                    </div>
                    <h4>{item.quizName}</h4>
                    <img
                      loading="lazy"
                      src={Files?.courses?.userss}
                      className={` ${Style.card_group_img}`}
                    />
                    <hr className={` ${Style.card_hr}`} />
                    <div className={` ${Style.card_footer} d-block`}>
                      <a href={`/quiz/${item._id}`}
                        // onClick={() => handlequizform(item._id, item.isPrivate)}
                        className="d-flex align-items-center justify-content-between w-100"
                      >
                        {" "}
                        <span>Join This Quiz Now</span>
                        <img loading="lazy" src="/card_footer_icon.svg" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className='col-md-6 '>
                <div  className={` ${Style.custome_card} ${Style.custome_card_yellow}`}>
                    <div className={` ${Style.custome_card_img_parent} position-relative`} >
                        <img loading="lazy" src='/quiz_img2.svg'  className={` ${Style.card_img}`}/>
                        <span>OPENS IN 2 DAYS</span>
                    </div>
                    <h4>How much do you know about mutual funds?</h4>
                    <img loading="lazy" src='/userss.webp'  className={` ${Style.card_group_img}`}/>
                    <hr className={` ${Style.card_hr}`} />
                    <div className={` ${Style.card_footer}`} >
                        <span>Join This Quiz Now</span>
                        <a href='#'>
                            <img loading="lazy" src='/card_footer_icon.svg' />
                        </a>
                    </div>
                </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default UpcomingQuiz;
