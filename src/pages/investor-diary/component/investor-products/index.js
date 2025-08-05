import React, { useState, useEffect } from 'react';


const InvestorProducts = (props) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [openDescriptionFAQIndex, setOpenDescriptionFAQIndex] = useState(null);


    useEffect(() => {
        if (props.investorDiaryData?.galleryImages?.nodes?.length > 0) {
            setCurrentIndex(0); // Default to the first image
        }
    }, [props.investorDiaryData]);


    const galleryImages = props.investorDiaryData?.galleryImages?.nodes || [];
    const imageUrls = galleryImages.map(image => image.sourceUrl);


    const videoMetaData = props.investorDiaryData?.metaData || [];
    const videoUrls = videoMetaData.find(meta => meta.key === 'vwg_video_url');
    const videoData = videoUrls ? JSON.parse(videoUrls.value) : {};


    const combinedMedia = galleryImages.map((image, index) => ({
        type: 'image',
        url: image.sourceUrl
    }));


    // If there's video data for a specific index, replace the corresponding image with a video
    Object.keys(videoData).forEach(index => {
        if (videoData[index]) {
            combinedMedia[index] = {
                type: 'video',
                url: videoData[index].video_url
            };
        }
    });


    const toggleDescriptionFAQ = (index) => {
        setOpenDescriptionFAQIndex(openDescriptionFAQIndex === index ? null : index);
    };


    const descriptionfaqs = [
        { question1: "The Details", answer: "Designed to scientifically record your reasons for making an investment." },
        { question1: "Dimensions & Paper Quality", answer: "The dimensions of the diary are 7.5 x 9.5 inches and contains 192 pages of 90 GSM." },
        { question1: "Shipping", answer: "We will start shipping on 26th January 2025." },
    ];


    return (
        <section className="product_section relative bg-black mx-20 my-20 py-8 px-8" style={{ backgroundImage: "url('/images/background_feature.png')", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", borderRadius: "20px" }}>
            <h3 className="text-4xl font-bold mt-10 mb-20 lg:text-left investor-ibm-font-family" style={{ fontWeight: "300", textAlign: "center" }}>Pre-Order Now</h3>


            <div className="product_container container mx-auto flex flex-col lg:flex-row px-6 lg:px-12">
                <div className="product_image_container flex flex-row" style={{ width: "50%" }}>
                    <div id="image_gallery" className="flex flex-col mr-5">
                        {combinedMedia.map((media, index) => (
                            <div key={index}>
                                {media.type === 'image' ? (
                                    <img
                                        src={media.url}
                                        alt={`Thumbnail ${index + 1}`}
                                        className={`my-2 object-cover cursor-pointer ${currentIndex === index ? "border-2 border-yellow-500" : ""}`}
                                        style={{ width: "100px", height: "auto" }}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ) : (
                                    <video
                                        src={media.url}                                        
                                        className={`my-2 object-cover cursor-pointer ${currentIndex === index ? "border-2 border-yellow-500" : ""}`}
                                        style={{
                                            width: "100px",
                                            height: "55px",
                                        }}
                                        onClick={() => setCurrentIndex(index)}
                                            onPlay={(e) => {
                                                const videos = document.querySelectorAll('video');
                                                videos.forEach((video, idx) => {
                                                    if (idx !== index) {
                                                        video.pause();
                                                    }
                                                });
                                            }}
                                            poster={media.thumbnailUrl}
                                            controlsList="nodownload noplaybackrate nofullscreen"                                      
                                    />
                                )}
                            </div>
                        ))}
                    </div>


                    <div className="relative">
                        <div className="carousel">
                            {combinedMedia.map((media, index) => (
                                <div key={index} className={`carousel-image ${currentIndex === index ? "active" : "hidden"}`}>
                                    {media.type === 'image' ? (
                                        <img
                                            src={media.url}
                                            alt={`Product image ${index + 1}`}
                                            className="object-cover"
                                            style={{ width: "500px", height: "auto" }}
                                        />
                                    ) : (
                                        <video
                                            src={media.url}
                                            controls
                                            className="object-cover"
                                            style={{ width: "550px",height: "350px", borderRadius: "5px" }}
                                        />
                                    )}
                                </div>
                            ))}
                        </div>


                        <div className="carousel-dots mt-4 flex justify-center space-x-2">
                            {combinedMedia.map((_, index) => (
                                <span
                                    key={index}
                                    className={`dot ${currentIndex === index ? "bg-yellow-500" : "bg-gray-600"} investor-features-line rounded-full w-2 h-2 cursor-pointer`}
                                    onClick={() => setCurrentIndex(index)}
                                ></span>
                            ))}
                        </div>
                    </div>
                </div>


                <div className="product_content_container text-center ml-20" style={{ width: "50%" }}>
                    <h1 className='investor-ibm-font-family' style={{ fontSize: "40px", lineHeight: "1.15", letterSpacing: "0.025em", fontWeight: "300", textAlign: "left" }}>
                        {props.investorDiaryData?.name}
                    </h1>
                    <p className="text-lg mb-6 investor-sf-font-family" style={{ textAlign: "left", color: "#a7a8a9" }}>
                        <span dangerouslySetInnerHTML={{ __html: props.investorDiaryData?.shortDescription }} />
                    </p>
                    <div className="my-6">
                        <p className="text-2xl font-bold text-white text-left line-through">
                        {"₹1992.00"}
                        </p>
                        <p className="text-2xl font-bold text-white-500" style={{ textAlign: "left" }}>{props.investorDiaryData?.price}</p>
                         {/* <div className="flex mt-2 mb-4">
                            <div className="flex text-yellow-400">
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                                <span>★</span>
                            </div>
                            <p className="ml-2 text-gray-600" style={{ color: "#a7a8a9" }}>(144 Reviews)</p>
                        </div> */}
                    </div>
                    <div className='w-full d-flex'>
                        <a
                            href="https://rzp.io/rzp/FBIntDiary"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-2 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-300 rounded-lg border border-gray-600 shadow-md hover:shadow-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                        >
                            Pre-order Now
                        </a>
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: props.investorDiaryData?.description }} style={{ textAlign: "left" }} />


                    <div className="mt-6">
                        {descriptionfaqs.map((faq1, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    className="flex justify-between items-center cursor-pointer py-2 border-b border-gray-600"
                                    onClick={() => toggleDescriptionFAQ(index)}
                                >
                                    <h3 className="text-lg" style={{ color: "#FDF4F0" }}>{faq1.question1}</h3>
                                    <span className="text-2xl">{openDescriptionFAQIndex === index ? "x" : "+"}</span>
                                </div>
                                {openDescriptionFAQIndex === index && (
                                    <p className="mt-2 text-left" style={{ color: "#a7a8a9" }}>{faq1.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}


export default InvestorProducts;


