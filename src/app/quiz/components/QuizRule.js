import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/router";
import QuizRuleStyle from "../style/quizrule.module.css";

function QuizRule({ lgShow, setIsQuizRuleShow, quizid, setStartTimer }) {
    const router = useRouter();
    const quizId = quizid;
    const currentPathname = router.pathname;
    return (
        <>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => {
                    setIsQuizRuleShow(false);
                    if (currentPathname === "/quiz/[id]") router.push("/quiz");
                    if (currentPathname === "/login") router.push("/");
                }}
                aria-labelledby="example-modal-sizes-title-lg"
                className="login_popup"
            >
                <Modal.Header
                    className={`${QuizRuleStyle.login_header}`}
                    closeButton
                ></Modal.Header>
                <Modal.Body className={`${QuizRuleStyle.login_content} pb-md-0`}>
                    <div className="quiz-rules-container">
                        <h2 className="text-center mb-2">Quiz Rules and Regulations</h2>
                        <ul className="d-flex flex-column gap-1">
                            <li>Don't refresh!! If you refresh the page the quiz will submit automatically.</li>
                            <li>Read each question carefully before answering.</li>
                            <li>Do not use any external resources or help during the quiz.</li>
                            <li>Your final score will be displayed at the end of the quiz.</li>
                        </ul>
                        <div className="text-center mt-4 mb-4">
                            <button
                                className="btn btn-primary"
                                onClick={() => {
                                    setIsQuizRuleShow(false);
                                    setStartTimer(true);
                                    router.push(`/quiz/${quizId}`);
                                }}
                            >
                                Start Quiz
                            </button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default QuizRule;
