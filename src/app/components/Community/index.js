import React, { useState } from "react";
import Style from "../../coursesStyle/home.module.css";
import GalleryPopup from "../GalleryPopup";
import Files from "@/config/file";
import DefaultImage from "../DefaultImage";
function Community() {
  const [galleryVisible, setGalleryVisible] = useState(false);
  const images = [
    [Files?.courses?.comm1, "Prasad as a key speaker"],
    [Files?.courses?.comm2, "College guest"],
    [Files?.courses?.comm3, "Meet up in Mumbai"],
    [Files?.courses?.comm4, "Our followers in Mumbai meet up"],
    [Files?.courses?.comm5, "Meet up Pune"],
    [Files?.courses?.comm6, "Meet up at Nagpur"],
    [Files?.courses?.comm7, "Guest lecture in college "],
  ];
 
  const openGallery = () => {
    setGalleryVisible(true);
  };

  const closeGallery = () => {
    setGalleryVisible(false);
  };
  return (
    <>
      {galleryVisible && (
        <GalleryPopup images={images} onClose={closeGallery} />
      )}
      <section className={Style.communitySec} id="community">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Our Community</h2>
              {/* <p className="mt-3 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br/> eiusmod tempor incididunt ut labore.</p> */}
              <button
                onClick={openGallery}
                className="mt-3 secondary_btn text-decoration-none d-md-inline-block d-none w-auto py-2 px-4"
              >
                Explore more
              </button>
            </div>
          </div>
          <div className="row mt-md-5">
            <div className="mt-2 ps-0 pe-1 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm1}
                alt="Prasad as a key speaker"
                className={`${Style.commImg} ${Style.borderRadius} opacity-25`}
              />
            </div>
            <div className="mt-2 px-1 col-md-4 col-7">
              <DefaultImage
                src={Files?.courses?.comm2}
                alt="College guest"
                className={Style.commImg}
              />
            </div>
            <div className={`mt-2 px-1 col-md-4 col-7 ${Style.cusOrder1}`}>
              <DefaultImage
                src={Files?.courses?.comm3}
                alt="Meet up in Mumbai"
                className={Style.commImg}
              />
            </div>
            <div className="mt-2 ps-1 pe-0 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm4}
                alt="Our followers in Mumbai meet up"
                className={`${Style.commImg} ${Style.borderRadius1} opacity-25`}
              />
            </div>
            <div className="mt-2 px-2 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm5}
                alt="Meet up Pune"
                className={`opacity-25 ${Style.commImg}`}
              />
            </div>
            <div className="mt-2 px-1 col-md-2 col-5">
              <DefaultImage
                src={Files?.courses?.comm6}
                alt="Meet up at Nagpur"
                className={Style.commImg}
              />
            </div>
            <div className={`${Style.cusOrder2} mt-2 px-1 col-md-4`}>
              <DefaultImage
                src={Files?.courses?.comm7}
                alt="Guest lecture in college "
                className={Style.commImg}
              />
            </div>
            <div className="mt-2 px-1 col-md-2 col-5 ">
              <DefaultImage src={Files?.courses?.comm5} alt="" className={Style.commImg} />
            </div>
            <div className="mt-2 px-2 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm6}
                alt=""
                className={`opacity-25 ${Style.commImg}`}
              />
            </div>
          </div>
          <div className="row d-md-none d-block mt-3">
            <div className="col-md-12 text-center ">
              <button
                onClick={openGallery}
                className="secondary_btn text-decoration-none d-inline-block w-auto py-2 px-4"
              >
                Explore more
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Community;
