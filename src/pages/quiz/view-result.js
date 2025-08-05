import QuizViewResult from "@/app/quiz/components/QuizViewResult";
import "../../app/quiz/quiz.css";
import dynamic from "next/dynamic";

function QuizViewResultPage() {
  return (
    <>
      <QuizViewResult />
    </>
  );
}

export default dynamic(() => Promise.resolve(QuizViewResultPage), { ssr: false }); 