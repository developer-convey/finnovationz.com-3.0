'use client';

import MyProvider from "@/app/careerFolder/contextApi/MyProvider";
import JobDetailsPageComponent from "@/app/careerFolder/pages/JobDetailsPageComponent";
import Brokerfooter from "@/app/components/brokerFooter";
import Header from "@/app/components/header";

const JobDetailsPage = ({ params }) => {
  const { id } = params;
  
  return (
    <>
    <MyProvider>
        <Header />
        <JobDetailsPageComponent jobId={id}></JobDetailsPageComponent>
        <Brokerfooter />
    </MyProvider>
    </>
  );
};

export default JobDetailsPage;
