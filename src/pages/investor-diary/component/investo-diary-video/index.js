import React, { useState } from 'react';

const InvestorVideo = () => {
    const [playVideo, setPlayVideo] = useState(false);


    const handlePlay = () => {
        setPlayVideo(true);
    };


    return (
        <section id="video-section" className="investor_video my-20 mx-20">
            <h2
                className="text-6xl text-center font-bold mb-20 investor-ibm-font-family"
                style={{
                    fontWeight: "300",
                }}
            >
                How To Use the
                <span className="text-yellow-500"> Diary</span>
            </h2>
            <div
                className="video-container relative w-full"
                style={{ paddingTop: "40%" /* 16:9 aspect ratio */ }}
            >
                {!playVideo ? (
                    <div
                        className="thumbnail relative w-full h-full cursor-pointer"
                        onClick={handlePlay}
                        style={{
                            backgroundImage: `url('https://img.youtube.com/vi/T63dvjrn6Gc/maxresdefault.jpg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            width: "100%", // Ensure full width
                            height: "100%", // Ensure full height
                        }}
                    >
                        <div
                            className="play-button absolute flex items-center justify-center"
                            style={{
                                backgroundColor: "rgba(0, 0, 0, 0.5)",
                                borderRadius: "20%",
                                width: "100px",
                                height: "100px",
                                top: "50%", // Center vertically
                                left: "50%", // Center horizontally
                                transform: "translate(-50%, -50%)", // Offset for centering
                                zIndex: 10,
                            }}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="white"
                                width="50px"
                                height="50px"
                            >
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        </div>
                    </div>
                ) : (
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/T63dvjrn6Gc?si=WaaxStY2di-hOHAb&autoplay=1"
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className="absolute inset-0 w-full h-full"
                    ></iframe>
                )}
            </div>
        </section>
    );
};


export default InvestorVideo;


