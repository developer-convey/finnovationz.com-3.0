import React, { useState } from "react";
import data from "./data.json";
import Image from "next/image";

const WhatsAPPimages = () => {
  const [visibleScreenshots, setVisibleScreenshots] = useState(6); 
  const [visibleWhatsApp, setVisibleWhatsApp] = useState(6);
  const handleShowMoreScreenshots = () => {
    setVisibleScreenshots((prev) => prev + 6); // Show 6 more screenshots on each click
  };
  const handleShowMoreWhatsApp = () => {
    setVisibleWhatsApp((prev) => prev + 6); // Show 6 more WhatsApp screenshots on each click
  }
  return (
    <>
      <h1 className="text-center font-extrabold text-5xl mt-20">
        Testimonials from Our Community
      </h1>
      <h6 className="text-center  text-2xl mt-8">
      Here we will put the reviews provided to us on LinkedIn, Twitter and other socials
      </h6>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 max-w-4xl mx-auto mt-20">
        {data.whatsApp.slice(0, visibleWhatsApp).map((screenshot, index) => (
          <div key={index} className="w-full rounded">
            <Image
              src={screenshot?.whatsAppImage}
              alt="screenshot"
              layout="responsive"
              width={800}
              height={300}
              objectFit="cover"
              style={{ height: 300 }}
            />
          </div>
        ))}
      </div>
      {visibleWhatsApp < data.whatsApp.length && (
       
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center'  ,marginTop:'20px'}}>
        <div style={{ border:'1px solid #377BDC' ,borderRadius:'20px'}}  onClick={handleShowMoreWhatsApp}>
            <h4 style={{padding:"10px 20px" ,color:'#377BDC'}}> Show More</h4>
            </div>
       </div>
      )}
    
      <h1 className="text-center font-extrabold text-5xl mt-28">
      Some Facebook Reviews
      </h1>
      <h4 className="text-center text-2xl mt-5">
      Here we will put the reviews provided to us on LinkedIn, Twitter and other socials
      </h4>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-4xl mx-auto mt-20">
      {data.screenshots.slice(0, visibleScreenshots).map((screenshot, index) => (
          <div key={index} className="w-full">
            <Image
              src={screenshot?.screenShot}
              alt="screenshot"
              layout="responsive"
              width={1000}
              height={300}
              objectFit="cover"
              style={{ height: 300 }}
            />
          </div>
        ))}
      </div>
      {visibleScreenshots < data.screenshots.length && (
        
        <div style={{display:'flex' , justifyContent:'center' , alignItems:'center' ,marginTop:'20px'}}>
        <div style={{ border:'1px solid #377BDC' ,borderRadius:'20px'}}  onClick={handleShowMoreScreenshots}>
            <h4 style={{padding:"10px 20px" ,color:'#377BDC'}}> Show More</h4>
            </div>
       </div>
      )}
    </>
  );
};

export default WhatsAPPimages;
