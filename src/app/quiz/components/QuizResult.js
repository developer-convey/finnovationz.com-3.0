import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import styles from '../style/quizResult.module.css'

function QuizResult() {
    const router = useRouter()
    const [scoreData, setScoreData] = useState(null)
    const [animatedScore, setAnimatedScore] = useState(0)
    const [quizData, setQuizData] = useState(null)
    const [questionsData, setQuestionsData] = useState([]);
    const [activeFilter, setActiveFilter] = useState('all');
  
    useEffect(() => {
      // Correctly get backend response and client-side answer data from local storage
      const quizResponse = JSON.parse(localStorage.getItem("quizResponse"));
      const quizAnswerData = JSON.parse(localStorage.getItem("quizanswerData"));
      const originalQuizData = JSON.parse(localStorage.getItem("quizData")); // Ensure this is being saved in Quizpage.js
  
      console.log('Backend response (quizResponse):', quizResponse);
      console.log('Client-side answer data (quizAnswerData):', quizAnswerData);
      console.log('Original quiz data:', originalQuizData);
  
      // Check if all necessary data exists
      if (quizResponse && originalQuizData && originalQuizData.quiz) {
        setScoreData(quizResponse);
  
        const mergedQuestions = originalQuizData.quiz.map(originalQuestion => {
          // Find the corresponding result and user answer data
          const resultQuestion = quizResponse.questionDetails.find(
            (q) => q.questionId === originalQuestion._id
          );
          const clientAnswer = quizAnswerData?.find(
            (a) => a.questionId === originalQuestion._id
          );
          
          // Combine all data into a single object
          return {
            ...originalQuestion, // Includes options, explanation, etc. from original quiz
            ...resultQuestion,   // Includes marksAwarded, isCorrect, etc. from backend response
            // Use client-side data for the user's selected option and explanation
            userSelectedOption: clientAnswer?.optionVal || 'N/A',
            explanation: clientAnswer?.explanation || originalQuestion.explanation,
          };
        });
        setQuestionsData(mergedQuestions);
      } else {
        console.error("Required quiz data not found in local storage.");
        // This log will still appear if `originalQuizData` or `quizResponse` are null.
        // Make sure Quizpage.js is saving `quizData` and QuizQuestion.js is not deleting `quizanswerData`.
      }
    }, []);
 
  
    const filterQuestions = (filter) => {
      setActiveFilter(filter);
    };
  
    const getFilteredQuestions = () => {
      switch (activeFilter) {
        case 'correct':
          return questionsData.filter((q) => q.isCorrect === true);
        case 'incorrect':
          return questionsData.filter((q) => q.isCorrect === false);
        default:
          return questionsData;
      }
    };
    useEffect(() => {
        // Initialize progress circle to 0
        document.documentElement.style.setProperty('--progress', '0deg')
        
        const quizResult = JSON.parse(localStorage.getItem('quizResponse'))
        const quizData = JSON.parse(localStorage.getItem('quizeResult'))
        if (quizResult) {
            setScoreData(quizResult)
            setQuizData(quizData)
            // Animate score counter
            const targetScore = Math.round(
                (quizResult.userMarks / quizResult.totalMarks) * 100
            )
            let currentScore = 0
            const increment = targetScore / 50

            const timer = setInterval(() => {
                currentScore += increment
                if (currentScore >= targetScore) {
                    currentScore = targetScore
                    clearInterval(timer)
                }
                const roundedScore = Math.round(currentScore)
                setAnimatedScore(roundedScore)
                
                // Update the CSS custom property for the progress circle
                const progressDegrees = (roundedScore / 100) * 360
                document.documentElement.style.setProperty('--progress', `${progressDegrees}deg`)
                
                // Also try to apply directly to the circle element
                const circleElement = document.querySelector(`.${styles['circle-bg']}`)
                if (circleElement) {
                    circleElement.style.setProperty('--progress', `${progressDegrees}deg`)
                }
                
            }, 40)
        }
    }, [])

    const formatTime = seconds => {
        const minutes = Math.floor(seconds / 60)
        const remainingSeconds = seconds % 60
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`
    }
    const correctAnswersCount = questionsData.filter(q => q.isCorrect).length;
    const totalQuestions = questionsData.length;
    const getResultMessage = percentage => {
        if (percentage >= 90)
            return {
                title: 'Market Maven! 📈',
                description:
                    "Outstanding performance! Your deep understanding of stock market fundamentals, investment strategies, and risk management principles puts you in the elite tier of investors. You're ready to navigate the markets with confidence and build long-term wealth!"
            }
        if (percentage >= 80)
            return {
                title: 'Investment Expert! 💰',
                description:
                    "Excellent work! You demonstrate strong knowledge of market concepts and investment strategies. With a bit more practice, you'll be ready to make informed investment decisions."
            }
        if (percentage >= 70)
            return {
                title: 'Market Savvy! 📊',
                description:
                    'Good performance! You have a solid foundation in stock market basics. Keep learning and practicing to enhance your investment skills.'
            }
        if (percentage >= 60)
            return {
                title: 'Learning Investor! 📚',
                description:
                    'Not bad! You have basic knowledge of the stock market. Consider taking our courses to strengthen your understanding.'
            }
        return {
            title: 'Beginner Trader! 🌱',
            description:
                'Keep learning! The stock market is complex, and everyone starts somewhere. Our courses can help you build a strong foundation.'
        }
    }

    const resultMessage = scoreData
        ? getResultMessage(animatedScore)
        : { title: '', description: '' }

    const retakeQuiz = () => {
        router.push('/quiz')
    }

    const viewAnswers = () => {
        router.push('/quiz/view-result')
    }

    const exploreCourses = () => {
        router.push('/courses')
    }

    const shareOn = platform => {
        const text = `I just scored ${animatedScore}% on the Finnovationz Stock Market Knowledge Assessment! Ready to master the markets! 📈💰`
        const url = window.location.href

        let shareUrl
        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09`
                break
            case 'facebook':
                shareUrl = `https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL`
                break
            case 'linkedin':
                shareUrl = `https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile`
                break
            case 'instagram':
                shareUrl = `https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA==`
                break
        }

        if (shareUrl) {
            window.open(shareUrl, '_blank', 'width=600,height=400')
        }
    }

    if (!scoreData) {
        return <div>Loading...</div>
    }

    const missedQuestions = (scoreData.questionDetails.length) - quizData?.answers?.filter(answer => answer.isAnswer === true).length

    return (
        <div className={styles['quiz-result-container']}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.logo}>FINNOVATIONZ</div>
                    <div className={styles['quiz-title']}>
                        Stock Market Knowledge Assessment
                    </div>
                    <div className={styles.tagline}>
                        Master the Markets • Build Wealth • Achieve Financial Freedom
                    </div>
                </div>

                <div className={styles['result-content']}>
                    <div className={styles['score-circle']}>
                        <div className={styles['circle-bg']}>
                            <div className={styles['circle-inner']}>
                                <div className={styles['score-percentage']}>
                                    {animatedScore}%
                                </div>
                                <div className={styles['score-label']}>Your Score</div>
                            </div>
                        </div>
                    </div>

                    <div className={styles['result-message']}>
                        <h1 className={styles['result-title']}>{resultMessage.title}</h1>
                        <p className={styles['result-description']}>
                            {resultMessage.description}
                        </p>
                    </div>

                    <div className={styles['stats-grid']}>
                        <div className={styles['stat-card']}>
                            <div className={styles['stat-icon']}>
                                <i className='fas fa-chart-line'></i>
                            </div>
                            <div className={styles['stat-number']}>{correctAnswersCount}/{totalQuestions}</div>
                            <div className={styles['stat-label']}>Correct Answers</div>
                        </div>
                        <div className={styles['stat-card']}>
                            <div className={styles['stat-icon']}>
                                <i className='fas fa-chart-line'></i>
                            </div>
                            <div className={styles['stat-number']}>{scoreData.userMarks}/{scoreData.totalMarks}</div>
                            <div className={styles['stat-label']}>Total Score</div>
                        </div>

                        <div className={styles['stat-card']}>
                            <div className={styles['stat-icon']}>
                                <i className='fas fa-chart-line-down'></i>
                            </div>
                            <div className={styles['stat-number']}>{missedQuestions}</div>
                            <div className={styles['stat-label']}>Missed Questions</div>
                        </div>

                        <div className={styles['stat-card']}>
                            <div className={styles['stat-icon']}>
                                <i className='fas fa-stopwatch'></i>
                            </div>
                            <div className={styles['stat-number']}>
                                {formatTime(scoreData.completionTime)}
                            </div>
                            <div className={styles['stat-label']}>Time Invested</div>
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <button
                            className={`${styles.btn} ${styles['btn-primary']}`}
                            onClick={retakeQuiz}
                        >
                            <i className='fas fa-redo'></i>
                            Retake Assessment
                        </button>
                        <button
                            className={`${styles.btn} ${styles['btn-secondary']}`}
                            onClick={viewAnswers}
                        >
                            <i className='fas fa-chart-bar'></i>
                            Analyze Performance
                        </button>
                        <button
                            className={`${styles.btn} ${styles['btn-tertiary']}`}
                            onClick={exploreCourses}
                        >
                            <i className='fas fa-graduation-cap'></i>
                            Explore Courses
                        </button>
                    </div>

                    <div className={styles['social-share']}>
                        <h3 className={styles['share-title']}>Share Your Achievement</h3>
                        <div className={styles['share-buttons']}>
                            <button
                                className={`${styles['share-btn']} ${styles.twitter}`}
                                onClick={() => shareOn('twitter')}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FaTwitter />
                            </button>
                            <button
                                className={`${styles['share-btn']} ${styles.facebook}`}
                                onClick={() => shareOn('facebook')}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FaFacebookF />
                            </button>
                            <button
                                className={`${styles['share-btn']} ${styles.linkedin}`}
                                onClick={() => shareOn('linkedin')}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FaLinkedinIn />
                            </button>
                            <button
                                className={`${styles['share-btn']} ${styles.instagram}`}
                                onClick={() => shareOn('instagram')}
                                target='_blank'
                                rel="noreferrer"
                            >
                                <FaInstagram />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuizResult
