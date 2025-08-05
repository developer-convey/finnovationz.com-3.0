// import LoginScreen from "../components/LoginScreen";
"use client";
import SignInScreen from "@/app/quiz/components/SignInScreen";
import "bootstrap/dist/css/bootstrap.min.css";
import dynamic from "next/dynamic";

function Signin() {
  return (
    <>
      <SignInScreen />
    </>
  );
}

export default dynamic(() => Promise.resolve(Signin), { ssr: false });
