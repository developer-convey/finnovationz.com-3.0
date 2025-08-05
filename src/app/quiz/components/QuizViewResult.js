import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../style/quizViewResult.module.css';

function QuizViewResult() {
  const router = useRouter();
  const [scoreData, setScoreData] = useState(null);
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

  const formatTime = (seconds) => {
    if (typeof seconds !== 'number' || isNaN(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

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

  const goBack = () => {
    router.push('/quiz/result');
  };

  if (!scoreData || questionsData.length === 0) {
    return <div>Loading...</div>;
  }
  
  const percentage = Math.round((scoreData.userMarks / scoreData.totalMarks) * 100);
  const correctAnswersCount = questionsData.filter(q => q.isCorrect).length;
  const incorrectAnswersCount = questionsData.filter(q => !q.isCorrect).length;
  const totalQuestions = questionsData.length;
  const userMarks=scoreData.userMarks

  return (
    <>
      <div className={styles['quiz-view-result-container']}>
        <div className={styles.container}>
          <div className={styles.header}>
            <div className={styles['header-content']}>
              <div className={styles['header-left']}>
                <h1><i className="fas fa-chart-line"></i> Performance Analysis</h1>
                <p>Detailed breakdown of your Stock Market Knowledge Assessment</p>
              </div>
              <button className={styles['back-btn']} onClick={goBack}>
                <i className="fas fa-arrow-left"></i>
                Back to Results
              </button>
            </div>
          </div>

          <div className={styles['stats-row']}>
            <div className={styles['stat-mini']}>
              <div className={styles['stat-mini-number']}>{percentage}%</div>
              <div className={styles['stat-mini-label']}>Overall percentage</div>
            </div>
            <div className={styles['stat-mini']}>
              <div className={styles['stat-mini-number']}>{userMarks}</div>
              <div className={styles['stat-mini-label']}>Marks</div>
            </div>
            <div className={styles['stat-mini']}>
              <div className={styles['stat-mini-number']}>{correctAnswersCount}/{totalQuestions}</div>
              <div className={styles['stat-mini-label']}>Correct</div>
            </div>
            <div className={styles['stat-mini']}>
              <div className={styles['stat-mini-number']}>{formatTime(scoreData.completionTime)}</div>
              <div className={styles['stat-mini-label']}>Time Taken</div>
            </div>
            <div className={styles['stat-mini']}>
              <div className={styles['stat-mini-number']}>Top {scoreData.percentile || 'N/A'}%</div>
              <div className={styles['stat-mini-label']}>Ranking</div>
            </div>
          </div>

          <div className={styles['questions-section']}>
            <h2 className={styles['section-title']}>
              <i className="fas fa-list-alt"></i>
              Question-by-Question Analysis
            </h2>
            
            <div className={styles.filters}>
              <button 
                className={`${styles['filter-btn']} ${activeFilter === 'all' ? styles.active : ''}`} 
                onClick={() => filterQuestions('all')}
              >
                All Questions ({totalQuestions})
              </button>
              <button 
                className={`${styles['filter-btn']} ${activeFilter === 'correct' ? styles.active : ''}`} 
                onClick={() => filterQuestions('correct')}
              >
                Correct Only ({correctAnswersCount})
              </button>
              <button 
                className={`${styles['filter-btn']} ${activeFilter === 'incorrect' ? styles.active : ''}`} 
                onClick={() => filterQuestions('incorrect')}
              >
                Incorrect Only ({incorrectAnswersCount})
              </button>
            </div>

            <div className={styles['questions-container']}>
              {getFilteredQuestions().map((question, index) => {
                const isCorrect = question.isCorrect;
                const userAnswerText = question.userSelectedOption;
                const userAnswerIndex = question.chosenAnswers?.[0];
                const correctAnswerIndex = question.answers?.[0];
                
                return (
                  <div key={question.questionId} className={`${styles['question-item']} ${isCorrect ? styles.correct : styles.incorrect}`}>
                    <div className={styles['question-header']}>
                      <div className={styles['question-number']}>Q{index + 1}</div>
                      <div className={styles['question-text']}>{question.question}</div>
                      <div className={`${styles['question-status']} ${isCorrect ? styles.correct : styles.incorrect}`}>
                        <i className={`fas fa-${isCorrect ? 'check-circle' : 'times-circle'}`}></i>
                        {isCorrect ? 'Correct' : 'Incorrect'}
                      </div>
                    </div>
                    <div className={styles['answer-section']}>
                      {question.options && question.options.map((option, optIndex) => {
                        const optionIndex = (optIndex + 1).toString();
                        let classes = styles['answer-option'];
                        let indicator = String.fromCharCode(65 + optIndex);
                        
                        if (correctAnswerIndex && optionIndex === correctAnswerIndex) {
                          classes += ` ${styles.correct}`;
                          indicator = '✓ ' + indicator;
                        }
                        if (userAnswerIndex && optionIndex === userAnswerIndex && optionIndex !== correctAnswerIndex) {
                          classes += ` ${styles.incorrect} ${styles['user-selected']}`;
                          indicator = '✗ ' + indicator;
                        }
                        if (userAnswerIndex && optionIndex === userAnswerIndex && optionIndex === correctAnswerIndex) {
                          classes += ` ${styles['user-selected']}`;
                        }
                        
                        return (
                          <div key={optIndex} className={classes}>
                            <span className={styles['option-indicator']}>{indicator}</span>
                            <span>{option}</span>
                          </div>
                        );
                      })}
                    </div>
                    <div className={styles['answer-summary']}>
                      <div className={styles['answer-detail']}>
                        <strong>Your Answer:</strong> {userAnswerText}
                      </div>
                      <div className={styles['answer-detail']}>
                        <strong>Correct Answer:</strong> {question.options?.[parseInt(correctAnswerIndex) - 1] || 'N/A'}
                      </div>
                      <div className={styles['answer-detail']}>
                        <strong>Marks:</strong> {question.marksAwarded}/{question.marks}
                      </div>
                    </div>
                    {question.explanation && (
                      <div className={styles.explanation}>
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuizViewResult;