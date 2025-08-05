import React from "react";
import Style from "../style/finance.module.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";
function Community() {
  //     const [galleryVisible, setGalleryVisible] = useState(false);
  //   const images = [
  //     '/comm1.webp',
  //     '/comm2.webp',
  //     '/comm3.webp',
  //     '/comm4.webp',
  //     '/comm5.webp',
  //     '/comm6.webp',
  //     '/comm7.webp',

  //   ];

  //   const openGallery = () => {
  //     setGalleryVisible(true);
  //   };

  //   const closeGallery = () => {
  //     setGalleryVisible(false);
  //   };
  return (
    <>
      <section className={Style.communitySec} id="community">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-6 text-center">
              <h2>Media Coverage</h2>
            </div>
          </div>
          <div className="row mt-md-4">
            <div className="mt-2 ps-0 pe-1 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm1}
                loading="eager"
                className={`${Style.commImg} ${Style.borderRadius} opacity-25`}
              />
            </div>
            <div className="mt-2 px-1 col-md-4 col-7 ">
              <DefaultImage
                src={Files?.courses?.comm2}
                loading="eager"
                className={Style.commImg}
              />
            </div>
            <div className={`mt-2 px-1 col-md-4 col-7 ${Style.cusOrder1}`}>
              <DefaultImage
                src={Files?.courses?.comm3}
                loading="eager"
                className={Style.commImg}
              />
            </div>
            <div className="mt-2 ps-1 pe-0 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm4}
                loading="eager"
                className={`${Style.commImg} ${Style.borderRadius1} opacity-25`}
              />
            </div>
            <div className="mt-2 px-2 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm5}
                loading="eager"
                className={`opacity-25 ${Style.commImg}`}
              />
            </div>
            <div className="mt-2 px-1 col-md-2 col-5">
              <DefaultImage
                src={Files?.courses?.comm6}
                loading="eager"
                className={Style.commImg}
              />
            </div>
            <div className={`${Style.cusOrder2} mt-2 px-1 col-md-4`}>
              <DefaultImage
                src={Files?.courses?.comm7}
                loading="eager"
                className={Style.commImg}
              />
            </div>
            <div className="mt-2 px-1 col-md-2 col-5 ">
              <DefaultImage
                src={Files?.courses?.comm5}
                loading="eager"
                className={Style.commImg}
              />
            </div>
            <div className="mt-2 px-2 col-md-2 d-none d-md-block">
              <DefaultImage
                src={Files?.courses?.comm6}
                loading="eager"
                className={`opacity-25 ${Style.commImg}`}
              />
            </div>
          </div>
          <div className="row d-md-none d-block mt-3"></div>
        </div>
      </section>
    </>
  );
}

export default Community;
