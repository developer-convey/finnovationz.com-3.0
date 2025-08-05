import Congratulations from "@/app/quiz/components/Congratulations";
import "../../../app/quiz/quiz.css";
import dynamic from "next/dynamic";

function Certificate() {
  return (
    <>
      <Congratulations />
    </>
  );
}

export default dynamic(() => Promise.resolve(Certificate), { ssr: false });
