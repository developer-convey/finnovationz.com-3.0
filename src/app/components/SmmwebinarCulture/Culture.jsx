import React, { useEffect, useState } from "react";
import useScreenSize from "@/app/careerFolder/hooks/useScreenSize";
import html2canvas from "html2canvas";
import { $ } from "utils-deva";
import { webinarsliderCultureImages } from "@/app/careerFolder/resources/data.json";
import ImageSlider from "./ImageSlider";
import MyProvider from "@/app/careerFolder/contextApi/MyProvider";
import "./culture.scss";

const sliderImages = webinarsliderCultureImages.map((el, i) => ({
  id: i + 1,
  img: el,
}));

const Culture = () => {
  const viewport = useScreenSize();
  const [SS, setSS] = useState("");
  const [showSlider, setShowSlider] = useState(false);

  const [imageOnLoad, setImageOnLoad] = useState("00000"); // each '0' for each images' loaded state

  function captureSSAndDisplay() {
    const el = $("#images_wrapper .images");
    html2canvas(el).then((canvas) => setSS(canvas.toDataURL("image/png")));
  }

  function setImageLoaded(index) {
    setImageOnLoad((prev) => {
      return prev.substring(0, index) + 1 + prev.substring(index + 1);
    });
  }

  useEffect(() => {
    if (!imageOnLoad.includes("0")) {
      setTimeout(captureSSAndDisplay);
    }
  }, [viewport, imageOnLoad]);

  return (
    <>
      <MyProvider>
        <main>
          <div className="careers_page">
            <section className="culture">
              <div className="container">
                {/* <h2>Office Culture</h2> */}
                <div id="images_wrapper">
                  <img
                    loading="lazy"
                    className="before"
                    src={SS}
                    alt="before"
                  />

                  {viewport === "desktop" ? (
                    <div className={"images " + viewport}>
                      <div className="parts" data-d="50-50">
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front1.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(0)}
                          />
                        </div>
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front2.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(1)}
                          />
                        </div>
                      </div>
                      <div className="parts" data-d="30-40-30">
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front3.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(2)}
                          />
                        </div>
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front4.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(3)}
                          />
                        </div>
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front5.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(4)}
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id="images_container" className={"images " + viewport}>
                      <div className="parts" data-d="60-40">
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front1.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(0)}
                          />
                        </div>
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front2.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(1)}
                          />
                        </div>
                      </div>
                      <div className="parts" data-d="40-60">
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front3.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(2)}
                          />
                        </div>
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front4.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(3)}
                          />
                        </div>
                      </div>

                      <div className="parts" data-d="100">
                        <div className="img">
                          <img
                            loading="lazy"
                            src="/front5.webp"
                            alt="office culture"
                            onClick={setShowSlider}
                            onLoad={() => setImageLoaded(4)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  <img loading="lazy" className="after" src={SS} alt="After" />
                </div>

                {/* <button
                  aria-label="Explore more Images"
                  onClick={setShowSlider}
                >
                  Explore more
                </button> */}
              </div>

              {showSlider && (
                <ImageSlider
                  images={sliderImages}
                  closeSlider={() => setShowSlider(false)}
                />
              )}
            </section>
          </div>
        </main>
      </MyProvider>
    </>
  );
};

export default Culture;
