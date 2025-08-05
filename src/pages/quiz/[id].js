import React, { useState, useEffect } from "react";
import "../../app/quiz/quiz.css";

import quizpageStyle from "../../app/quiz/style/quizpage.module.css";

import Header from "../../app/quiz/components/Header";
import { BASE_URL } from "../../app/quiz/utils/baseUrl"; // BASE_URL is imported but not used, consider removing if not needed.
import { useRouter } from "next/router";
import QuizQuestion from "@/app/quiz/components/QuizQuestion";
import LoginScreen from "@/app/quiz/components/LoginScreen";
import dynamic from "next/dynamic";
import QuizRule from "@/app/quiz/components/QuizRule";
import DiwaliOffSlider from "@/app/components/coursetopofferslider"; // DiwaliOffSlider is imported but not used, consider removing if not needed.
import Head from "next/head";
function Quizpage() {
  const router = useRouter();
  const { id } = router.query;

  const [quizData, setQuizData] = useState(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // Initialize isShow and isQuizRuleShow to true by default,
  // but they will be conditionally rendered based on isPrivate and isLoading.
  const [isShow, setIsShow] = useState(true); 
  const [isQuizRuleShow, setIsQuizRuleShow] = useState(false);
  const [answer, setAnswer] = useState([]);
  const [isPrivate, setisPrivate] = useState(null); // Initialize as null to indicate not yet fetched
  const [startTimer, setStartTimer] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // New state to manage loading

  useEffect(() => {
    if (id) {
      const fetchQuizData = async () => {
        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_QUIZ_API_URL}/quizzes/user/${id}`
          );
          if (response.status === 200) {
            const data = await response.json();
            setQuizData(data.responseData);
            localStorage.setItem('quizData', JSON.stringify(data.responseData));

            const answerData = data.responseData.quiz.map((element) => ({
              questionId: element._id,
              chosenAnswers: null,
              isAnswer: false,
              optionVal: null,
            }));
            setAnswer(answerData);

            // Set isPrivate value
            const privateStatus = data.responseData.isPrivate;
            setisPrivate(privateStatus);

            // Directly set states based on privateStatus after fetching
            if (privateStatus === 2) {
              setIsShow(false); // Do not show LoginScreen
              setIsQuizRuleShow(false); // Do not show QuizRule
              setStartTimer(true); // Start the timer directly
            } else {
              setIsShow(true); // Show LoginScreen for other private statuses
              setIsQuizRuleShow(false); // Initially hide QuizRule until login is complete
            }
            setIsLoading(false); // Data has been fetched and states are set
          } else {
            setIsLoading(false); // Stop loading even if fetch fails
          }
        } catch (error) {
          console.error("Error fetching quiz data:", error);
          setIsLoading(false); // Stop loading on error
        }
      };

      fetchQuizData();
    }
  }, [id]);

  const handleStepChange = (step) => {
    setCurrentStep(step);
    setCurrentQuestionIndex(step - 1);
  };

  if (isLoading) {
    // Optionally render a loading spinner or message here
    return (
      <>
        <Header />
        <section className={`${quizpageStyle.quiz_sec}`}>
          <div className={`${quizpageStyle.custom_container} container`}>
            Loading Quiz...
          </div>
        </section>
      </>
    );
  }

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
      <Header />
      {/* Conditionally render LoginScreen based on isShow and isPrivate status */}
      {isShow && isPrivate !== 2 && (
        <LoginScreen
          setIsShow={setIsShow}
          setIsQuizRuleShow={setIsQuizRuleShow}
          quizid={id}
          isPrivate={isPrivate}
        />
      )}

      {/* Conditionally render QuizRule based on isQuizRuleShow and isPrivate status */}
      {isQuizRuleShow && isPrivate !== 2 && (
        <QuizRule
          lgShow={isQuizRuleShow}
          setIsQuizRuleShow={setIsQuizRuleShow}
          setStartTimer={setStartTimer}
          quizid={id}
        />
      )}

      <section className={`${quizpageStyle.quiz_sec}`}>
        <div className={`${quizpageStyle.custom_container} container`}>
          {quizData ? (
            <div className="row justify-content-md-center alignitem-center">
              <div
                className={`${quizpageStyle.quiz_indication} col-2 col-lg-1 position-relative`}
              >
                <div>
                  <span
                    className={`${quizpageStyle.active_quiz} ${quizpageStyle.stepper_num}`}
                  >
                    <strong>{currentStep}</strong>
                  </span>
                </div>
              </div>
              <div className="col-md-10 col-lg-11">
                <div className="row">
                  {startTimer === true && (
                    <QuizQuestion
                      data={quizData}
                      quizId={id}
                      answer={answer}
                      setAnswer={setAnswer}
                      setIsShow={setIsShow}
                      currentStep={currentStep}
                      setCurrentStep={setCurrentStep}
                      handleStepChange={handleStepChange}
                      currentQuestionIndex={currentQuestionIndex}
                      setCurrentQuestionIndex={setCurrentQuestionIndex}
                      isPrivate={isPrivate}
                      showTimer={isPrivate !== 2} // Show timer if not private type 2
                      buttonUrl={quizData?.buttonUrl}
                      googleAnalyticsStatus={quizData.google_analytics_status}
                      googleAnalyticsId={quizData.google_analytics_id}
                      facebookPixelStatus={quizData.facebook_pixel_status}
                      facebookPixelId={quizData.facebook_pixel_id}
                      googleTagManagerStatus={quizData.google_tag_manager_status}
                      googleTagManagerId={quizData.google_tag_manager_id}
                      googleSheetsStatus={quizData.google_sheets_status}
                      googleSheetId={quizData.google_sheet_id}
                      pabblyStatus={quizData.pabbly_status}
                      pabblyId={quizData.pabbly_id}
                    />
                  )}
                </div>
              </div>
            </div>
          ) : (
            // This case will now be handled by the isLoading check if quizData is null initially.
            // If it's null after loading (e.g., quiz not found), you might want a specific message.
            !isLoading && <p>Quiz not found or an error occurred.</p>
          )}
        </div>
      </section>
    </>
  );
}

export default dynamic(() => Promise.resolve(Quizpage), { ssr: false });