import Style from "../style/course.module.css";
function Banner({ quizdata }) {
  return (
    <>
      <section className={` ${Style.banner} `}>
        <div className={` ${Style.custome_container}  container`}>
          <div className="row justify-space-between align-items-center">
            <div className="col-md-6 col-lg-6">
              <h1 className={` ${Style.banner_h1} col-12`}>
                Gain share market knowledge in a fun way
              </h1>
              <p>Play a quiz to test your share market knowledge</p>
              <a
                href={
                  quizdata.length === 1
                    ? `/quiz/${quizdata[0]._id}`
                    : "#quiz-sec"
                }
              >
                <img src="/play_button.svg" />
                Play Now
              </a>
            </div>
            <div className="col-md-6 col-lg-5 mt-3">
              <img src="/banner.svg" />
            </div>
            <div className={` ${Style.Upcoming_quiz} col-12`} id="quiz-sec">
              <h2> Quizzes</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Banner;
