import quizpageStyle from '../style/quizpage.module.css'
import { useEffect, useState } from "react";
import { ProgressBarWithTimer } from './Timer';
import { useRouter } from "next/router";
import LoginScreen from './LoginScreen'; // Import the LoginScreen component
import Form from './form' // Assuming 'form' is the component for user details when isPrivate === 2
function QuizQuestion(props) {
    const [selectedOption, setSelectedOption] = useState(null);
    const [isNextButtonDisabled, setNextButtonDisabled] = useState(true);
    const [currentAnswer, setCurrentAnswer] = useState(null);
    const [isTimeOut, setIsTimeOut] = useState(false);
    const [scrollableClass, setScrollableClass] = useState("");
    const [showExitWarning, setShowExitWarning] = useState(false);
    const [pendingExit, setPendingExit] = useState(false);
    const [showLoginScreen, setShowLoginScreen] = useState(false);
    const [isQuizRuleShow, setIsQuizRuleShow] = useState(false); // This state seems unused in this component now
    const [exitAttempts, setExitAttempts] = useState(0);
    const [noApplicable, setNoApplicable] = useState(false);
    const [response, setResponse] = useState(null); // This state seems unused in rendering
    const router = useRouter();

    const enterFullScreen = () => {
        const element = document.documentElement;
        if (element.requestFullscreen) {
            element.requestFullscreen().catch((error) => {
                console.error("Full-screen request failed:", error);
            });
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    };

    const exitFullScreen = () => {
        if (
            document.fullscreenElement ||
            document.mozFullScreenElement ||
            document.webkitFullscreenElement ||
            document.msFullscreenElement
        ) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    const handleKeyDown = (event) => {
        const key = event.key;
        const code = event.keyCode;
    
        const isEscape = key === "Escape" || code === 27;
        const isF11 = key === "F11" || code === 122;
        const isF5 = key === "F5" || code === 116;
        const isCtrlR =
          (event.ctrlKey || event.metaKey) &&
          (key.toLowerCase() === "r" || code === 82);
        const isCtrlW =
          (event.ctrlKey || event.metaKey) &&
          (key.toLowerCase() === "w" || code === 87);
        const isAltF4 = event.altKey && (key === "F4" || code === 115); // F4 edge case
    
        if (isEscape || isF11 || isF5 || isCtrlR || isCtrlW || isAltF4) {
          event.preventDefault();
          event.stopPropagation();
          setShowExitWarning(true);
          return false;
        }
      };
    
      // beforeunload handler
      const handleBeforeUnload = (event) => {
        event.preventDefault();
        event.returnValue = "";
        showExitPopup();
        return "";
      };
    
      // fullscreen change handler
      const handleFullscreenChange = () => {
        if (
          !document.fullscreenElement &&
          !document.mozFullScreenElement &&
          !document.webkitFullscreenElement &&
          !document.msFullscreenElement
        ) {
          if (!pendingExit && !showExitWarning) {
            showExitPopup();
            setTimeout(() => {
              enterFullScreen();
            }, 100);
          }
        }
      };
    
      useEffect(() => {
        enterFullScreen();
    
        // Register all event listeners
        document.addEventListener("keydown", handleKeyDown, true);
        document.addEventListener("beforeunload", handleBeforeUnload);
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        document.addEventListener("mozfullscreenchange", handleFullscreenChange);
        document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
        document.addEventListener("msfullscreenchange", handleFullscreenChange);
    
        // Expose submitResults function globally for LoginScreen to call
        window.triggerQuizSubmission = () => {
          setPendingExit(true);
          submitResults();
        };
    
        return () => {
          // Cleanup on unmount
          document.removeEventListener("keydown", handleKeyDown, true);
          document.removeEventListener("beforeunload", handleBeforeUnload);
          document.removeEventListener("fullscreenchange", handleFullscreenChange);
          document.removeEventListener(
            "mozfullscreenchange",
            handleFullscreenChange
          );
          document.removeEventListener(
            "webkitfullscreenchange",
            handleFullscreenChange
          );
          document.removeEventListener(
            "msfullscreenchange",
            handleFullscreenChange
          );
    
          // Clean up global function
          delete window.triggerQuizSubmission;
    
          if (!pendingExit) {
            exitFullScreen();
          }
        };
      }, []);
    
      // Handle warning popup OK button
      // Add this state at component top level
    
    const handleExitCancel = () => {
        setShowExitWarning(false);

        setTimeout(() => {
            if (
                !document.fullscreenElement &&
                !document.mozFullScreenElement &&
                !document.webkitFullscreenElement &&
                !document.msFullscreenElement
            ) {
                enterFullScreen();
            }
        }, 100);
    };

    const handleExitConfirm = () => {
        setPendingExit(true);
        setShowExitWarning(false);
        exitFullScreen();
        submitResults();
    };

    const showExitPopup = () => {
        setExitAttempts((prevAttempts) => {
            const updatedAttempts = prevAttempts + 1;

            if (updatedAttempts >= 3) {
                handleExitConfirm();
            } else {
                setShowExitWarning(true);
            }

            return updatedAttempts;
        });
    };

    const customScrollToQuestionaries = () => {
        const questionariesElement = document.getElementById("questionaries");
        if (questionariesElement) {
            const yOffset = -300;
            const targetOffset = questionariesElement.offsetTop + yOffset;
            const initialOffset = typeof window !== "undefined" && window.pageYOffset;
            const distance = targetOffset - initialOffset;
            const duration = 100;

            const startTime = performance.now();
            const scrollAnimation = () => {
                const currentTime = performance.now();
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                typeof window !== "undefined" && window.scrollTo(0, initialOffset + distance * progress);
                if (progress < 1) {
                    requestAnimationFrame(scrollAnimation);
                }
            };

            requestAnimationFrame(scrollAnimation);
        }
    };

    const handleOptionChange = (option, index) => {
        const updatedAnswers = [...props.answer];
        const currentQIndex = props.currentQuestionIndex;
        const currentQuestion = props.data.quiz[currentQIndex]; // Get the current question object
        const chosenAnswerIndex = (index + 1).toString();
    
        updatedAnswers[currentQIndex] = {
            ...updatedAnswers[currentQIndex],
            chosenAnswers: [chosenAnswerIndex],
            isAnswer: true,
            optionVal: option,
            explanation: currentQuestion.explanation, // Add the explanation here
        };
    
        props.setAnswer(updatedAnswers);
        localStorage.setItem('quizanswerData', JSON.stringify(updatedAnswers));
    
        setSelectedOption(option);
        setCurrentAnswer(index);
        setNextButtonDisabled(false);
    
        console.log(`Question ${currentQIndex + 1}: Selected option ${option}, chosenAnswers: ${chosenAnswerIndex}`);
    };
    const handleNextButtonClick = () => {
        setScrollableClass("scrollable");
        setTimeout(() => setScrollableClass(""), 1000);

        const nextIndex = props.currentQuestionIndex + 1;
        if (nextIndex < props.data?.quiz?.length) {
            props.setCurrentQuestionIndex(nextIndex);
            props.handleStepChange(props.currentStep + 1);

            const nextAnswer = props.answer[nextIndex] || {};
            const chosenAnswer = nextAnswer.chosenAnswers?.[0];
            const selectedIndex = chosenAnswer ? parseInt(chosenAnswer) - 1 : -1;

            setSelectedOption(nextAnswer.optionVal || null);
            setCurrentAnswer(selectedIndex >= 0 ? selectedIndex : -1);
            setNextButtonDisabled(!nextAnswer.optionVal);

            console.log(`Mapsd to Question ${nextIndex + 1}: Loaded option ${nextAnswer.optionVal || 'none'}, chosenAnswers: ${chosenAnswer || 'none'}`);
        }
    };

    const handlePrevButtonClick = () => {
        setScrollableClass("scrollable");
        setTimeout(() => setScrollableClass(""), 1000);

        const prevIndex = props.currentQuestionIndex - 1;
        if (prevIndex >= 0) {
            props.setCurrentQuestionIndex(prevIndex);
            props.handleStepChange(props.currentStep - 1);

            const prevAnswer = props.answer[prevIndex] || {};
            const chosenAnswer = prevAnswer.chosenAnswers?.[0];
            const selectedIndex = chosenAnswer ? parseInt(chosenAnswer) - 1 : -1;

            setSelectedOption(prevAnswer.optionVal || null);
            setCurrentAnswer(selectedIndex >= 0 ? selectedIndex : -1);
            setNextButtonDisabled(!prevAnswer.optionVal);

            console.log(`Mapsd to Question ${prevIndex + 1}: Loaded option ${prevAnswer.optionVal || 'none'}, chosenAnswers: ${chosenAnswer || 'none'}`);
        }
        customScrollToQuestionaries();
    };

    const submitResults = async (userDetails = null) => {
      console.log("entry")
        const arraysEqual = (a, b) => {
            if (!Array.isArray(a) || !Array.isArray(b)) return false;
            if (a.length !== b.length) return false;
            const sortedA = [...a].map(String).sort();
            const sortedB = [...b].map(String).sort();
            return sortedA.every((val, i) => val === sortedB[i]);
        };

        let currentAnswer1 = [...props.answer];
        const totalSpenTime = JSON.parse(localStorage.getItem("totalSpenTime")) || 0;

        currentAnswer1 = currentAnswer1.map((ans) => ({
            ...ans,
            chosenAnswers: ans.isAnswer && ans.chosenAnswers?.length ? ans.chosenAnswers : undefined,
            optionVal: ans.isAnswer && ans.optionVal ? ans.optionVal : undefined,
        }));

        console.log('Submitting answers:', JSON.stringify(currentAnswer1, null, 2));

        let totalScore = 0;
        const questions = props.data.quiz || [];

        currentAnswer1.forEach((answer, i) => {
            const question = questions[i];
            if (!question || !answer || !answer.isAnswer) return;

            const isCorrect = arraysEqual(answer.chosenAnswers, question.answers);
            const marks = question.marks || 0;

            if (isCorrect) {
                totalScore += marks;
            }
        });

        let userData = JSON.parse(localStorage.getItem("userDetails")) || {};

        // For isPrivate === 2, use the form data if provided
        if (props.isPrivate === 2 && userDetails) {
            userData = {
                name: userDetails.name,
                email: userDetails.email,
                mobileNumber: userDetails.phone, // Assuming userDetails.phone for mobileNumber
            };
        }

        let data = {
            quizId: props.data?._id,
            platform: "web",
            completionTime: totalSpenTime,
            answers: currentAnswer1,
            name: userData.name || '',
            email: userData.email || '',
            mobileNumber: userData.mobileNumber || '',
            userType: "basic",
            quizSubmitted: true,
            totalScore: totalScore,
        };

        if (userData.studentId) {
            data.studentId = userData.studentId;
            data.financialModeling = userData.financialModeling;
        }

        localStorage.setItem('quizeResult', JSON.stringify(data));

        console.log('Submitting payload:', JSON.stringify(data, null, 2));

        try {
            const submitRes = await fetch(`${process.env.NEXT_PUBLIC_QUIZ_API_URL}/results/user`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const responseData = await submitRes.json();

            if (responseData.statusCode === 200) {
                const newData = {
                    ...responseData.responseData,
                    completionTime: totalSpenTime,
                };

                await localStorage.setItem("quizResponse", JSON.stringify(newData));
                await localStorage.setItem("quizId", responseData?.responseData?.quizId);
                await localStorage.setItem("userId", responseData?.responseData?.userId);

                localStorage.removeItem("totalSpenTime");
                const showresults = props.data?.showResult?.toLowerCase(); // normalize to lowercase for safety

                // For isPrivate === 2, navigate to custom URL instead of certificate
                if (props.isPrivate === 2) {
                    // Use props.buttonUrl for navigation after form submission
                    const redirectUrl = props.buttonUrl || "/quiz/thankyou";
                    router.push(redirectUrl);
                } else if(showresults === "yes"){
                    router.push("/quiz/result");
                } else {
                  router.push("/quiz/certificate");
                }
            } else if (responseData.statusCode === 400) {
                setNoApplicable(true);
                setResponse({ message: responseData.responseData, status: responseData.statusCode });
            }
        } catch (error) {
            console.error("Error submitting quiz result:", error);
        }
    };

    const handleSubmitClick = () => {
        if (props.isPrivate === 2) {
            // For campaign type 2, show login screen (Form component)
            setShowLoginScreen(true);
        } else {
            // For other types, submit directly
            setPendingExit(true);
            submitResults();
        }
    };

    // Handler for when LoginScreen/Form closes/submits successfully
    const handleLoginComplete = (userDetails) => { // Receive userDetails from Form
        setShowLoginScreen(false);
        // After login completion, submit the results with userDetails
        setPendingExit(true);
        submitResults(userDetails);
    };

    useEffect(() => {
        if (isTimeOut === true) {
            setPendingExit(true);
            submitResults();
        }
    }, [isTimeOut, submitResults]); // Added submitResults to dependencies

    useEffect(() => {
        if (isTimeOut === true && props.isPrivate !== 2) {
            router.push("/quiz/certificate");
        }
    }, [isTimeOut, props.isPrivate, router]);

    const currentQuestion = props.data.quiz[props.currentQuestionIndex];

    const WarningPopup = () => {
        if (!showExitWarning || props.isPrivate === 2) return null;

        return (
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 10000,
                fontFamily: 'Segoe UI, sans-serif',
                transition: 'all 0.3s ease-in-out'
            }}>
                <div style={{
                    backgroundColor: '#fefefe',
                    padding: '30px',
                    borderRadius: '12px',
                    boxShadow: '0 12px 30px rgba(0, 0, 0, 0.15)',
                    textAlign: 'center',
                    maxWidth: '420px',
                    width: '90%',
                    animation: 'fadeIn 0.3s ease-in-out'
                }}>
                    <div style={{
                        fontSize: '48px',
                        color: '#ffa500',
                        marginBottom: '20px'
                    }}>
                        ⚠️
                    </div>
                    <h3 style={{
                        color: '#222',
                        marginBottom: '10px',
                        fontSize: '22px',
                        fontWeight: 600
                    }}>
                        Exit Quiz Attempt #{exitAttempts}/3
                    </h3>
                    <p style={{
                        color: '#555',
                        marginBottom: '20px',
                        fontSize: '16px',
                        lineHeight: '1.6'
                    }}>
                        Are you sure you want to exit the quiz? Your progress will be submitted and you won't be able to continue.
                    </p>
                    <p style={{
                        color: '#999',
                        fontSize: '14px',
                        marginBottom: '25px'
                    }}>
                        Attempts left: <strong>{3 - exitAttempts}</strong>
                    </p>
                    <div style={{
                        display: 'flex',
                        gap: '12px',
                        justifyContent: 'center'
                    }}>
                        <button
                            onClick={handleExitCancel}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#e0f7fa',
                                color: '#00796b',
                                border: '1px solid #b2dfdb',
                                borderRadius: '6px',
                                fontSize: '15px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#b2ebf2'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#e0f7fa'}
                        >
                            Stay in Quiz
                        </button>
                        <button
                            onClick={handleExitConfirm}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#ffcdd2',
                                color: '#b71c1c',
                                border: '1px solid #ef9a9a',
                                borderRadius: '6px',
                                fontSize: '15px',
                                fontWeight: 500,
                                cursor: 'pointer',
                                transition: 'all 0.3s'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#ef9a9a'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#ffcdd2'}
                        >
                            Exit & Submit
                        </button>
                    </div>
                </div>
            </div>
        );
    };


    return (
        <>
        {/* <Head> <script
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
        /></Head> */}
            <div className={`col-12 mb-5 questionaries ${scrollableClass}`} id="questionaries">
                {/* Removed redundant map loop if it's not rendering anything */}
                {/* {props.data?.quiz.map((element, index) => (
                    <div className="row" key={index}></div>
                ))} */}

<div className="row align-items-center">
  {/* 70% width for question (col-8.4 ≈ col-8) */}
  <div className="col-7 text-start ms-5 sm:ms-0">
  <h3>{currentQuestion?.question}</h3>
</div>


  {/* 10% gap (col-1.2 ≈ col-1) */}
  <div className="col-1"></div>

  {/* 20% for timer or question count (col-2.4 ≈ col-3 for better spacing) */}
  <div className="col-3 rounded-box timer d-flex justify-content-end">
    {props.isPrivate !== 2 ? (
      <ProgressBarWithTimer
        setIsTimeOut={setIsTimeOut}
        timer={props.data?.totalTime}
      />
    ) : (
      <h4 className={quizpageStyle.question_count}>
        Question: {props.currentQuestionIndex + 1} / {props.data?.questionCount}
      </h4>
    )}
  </div>
</div>

                <div className='col-12'>
                    <form action=''> {/* action attribute should be a valid URL or empty, not just '/action' */}
                        <div className='row'>
                            {props.currentQuestionIndex < props.data.questionCount && currentQuestion?.options?.map((option, index) => (
                                <div className='col-12 col-md-6' key={option}>
                                    <div
                                        className={`${quizpageStyle.quiz_select} d-flex align-items-center justify-content-between mt-lg-3`}
                                    >
                                        <input
                                            type='radio'
                                            className={`${quizpageStyle.quiz_radio} quiz_radio1`}
                                            id={option}
                                            name='option'
                                            value={option}
                                            checked={selectedOption === option}
                                            onChange={() => handleOptionChange(option, index)}
                                        />
                                        <label htmlFor={option}>{option}</label>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </form>
                </div>
                <div className={`${quizpageStyle.quiz_btn} col-12 text-center`}>
                    <button
                        className={`${quizpageStyle.quiz_prev}`}
                        disabled={props.currentQuestionIndex === 0}
                        onClick={handlePrevButtonClick}
                    >
                        Prev
                    </button>
                    {props.currentStep === props.data?.questionCount ? (
                        <button
                            className={`${quizpageStyle.quiz_next} ${isNextButtonDisabled ? "opacity-50" : ""}`}
                            disabled={isNextButtonDisabled}
                            onClick={handleSubmitClick}
                        >
                            Submit
                        </button>
                    ) : (
                        <button
                            className={`${quizpageStyle.quiz_next} ${isNextButtonDisabled ? "opacity-50" : ""}`}
                            disabled={isNextButtonDisabled}
                            onClick={handleNextButtonClick}
                        >
                            Next
                        </button>
                    )}
                </div>
            </div>

            {/* Warning Popup */}
            <WarningPopup />

            {/* LoginScreen Component for isPrivate === 2 */}
            {showLoginScreen && (
                <div >
                    <div >
                        <Form
                            setIsShow={setShowLoginScreen} // This prop is not used in Form, consider removing
                            setIsQuizRuleShow={setIsQuizRuleShow} // This prop is not used in Form, consider removing
                            quizid={props.data?._id}
                            isPrivate={props.isPrivate}
                            buttonUrl={props.buttonUrl}
                            onLoginComplete={handleLoginComplete}
                            googleAnalyticsStatus={props.googleAnalyticsStatus}
                            googleAnalyticsId={props.googleAnalyticsId}
                            facebookPixelStatus={props.facebookPixelStatus}
                            facebookPixelId={props.facebookPixelId}
                            googleTagManagerStatus={props.googleTagManagerStatus}
                            googleTagManagerId={props.googleTagManagerId}
                            googleSheetsStatus={props.googleSheetsStatus}
                            googleSheetId={props.googleSheetId}
                            pabblyStatus={props.pabblyStatus}
                            pabblyId={props.pabblyId} // Pass the handler for form submission
                        />
                    </div>
                </div>
            )}
        </>
    );
}

export default QuizQuestion;