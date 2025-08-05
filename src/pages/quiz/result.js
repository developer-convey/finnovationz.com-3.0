import QuizResult from "@/app/quiz/components/QuizResult";
import "../../app/quiz/quiz.css";
import dynamic from "next/dynamic";
import { useEffect } from "react";

function QuizResultPage() {
  useEffect(() => {
    // Hide result loader when result page loads
    if (window.hideResultLoader) {
      window.hideResultLoader();
    }
  }, []);

  return (
    <>
      <QuizResult />
    </>
  );
}

export default dynamic(() => Promise.resolve(QuizResultPage), { ssr: false }); 