"use client";
import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../app/web-storiesFolder/styles/webstories.css";
import dynamic from "next/dynamic";
import Header from "../components/header";
import Brokerfooter from "../components/brokerFooter";
import DiwaliOffSlider from "@/app/components/coursetopofferslider";

const WebStoriesList = dynamic(() => import("@/app/web-storiesFolder/components/WebStoriesList"), {
    ssr: false,
    loading: () => <p> </p>,
});
 
function WebStories() {
    return (
        <>
        <DiwaliOffSlider/>
            <Header />
            <WebStoriesList />
            <Brokerfooter />
        </>
    );
}

export default dynamic(() => Promise.resolve(WebStories), { ssr: false });
