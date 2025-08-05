'use client';
import React from "react";
import Style from "../../coursesStyle/course.module.css";
import useAnalyticsEventTracker from "../useAnalyticsEventTracker";
import Link from "next/link";

function PricingCombo(props) {
  const gaEventTracker = useAnalyticsEventTracker("Pricing section");

  const combos = [];
  combos.push({
    comboPrice: props.data.comboPrice,
    comboMRP: props.data.comboMRP,
    comboText1: props.data.comboText1,
    comboText2: props.data.comboText2,
    comboText3: props.data.comboText3,
    validity: props.data.validity,
    comboText4: props.data.comboText4,
    comboText5: props.data.comboText5,
    url: props.data.url2,
    btnText: props.data.btnText,
    key: "mainCombo",
    label: props.data.label,
  });
  if (props.combo1) combos.push({ ...props.combo1, key: "combo1" });
  if (props.combo2) combos.push({ ...props.combo2, key: "combo2" });

  const colClass =
    combos.length === 1
      ? "col-lg-5"
      : combos.length === 2
      ? "col-lg-4"
      : "col-lg-4";

  return (
    <section className={` ${Style.Pricingsec}`}>
      <div className="container">
        <div className="row align-items-stretch justify-content-center position-relative z-1">
          <div className="col-md-12 text-center mb-3">
            <h2 id='pricing'>Our Pricing</h2>
          </div>

          {combos.map((combo, index) => {
            const isThreeCards = combos.length === 3;
            const isEnrolNow = combo.btnText?.toLowerCase() === "enrol now";
            const btnClass =
              "site_btn text-decoration-none fs-5 py-3 d-inline-block " +
              (isThreeCards && isEnrolNow ? Style.wideEnrollBtn : "px-3");

            return (
              <div
                key={combo.key}
                className={`${colClass} d-flex`}
                style={{
                  marginTop: "16px",
                  marginBottom: "16px",
                  ...(typeof window !== "undefined" && window.innerWidth <= 768
                    ? { paddingBottom: "20px" }
                    : {}),
                }}
              >
                <div
                  className={`${Style.recommendedOffer} w-full d-flex flex-column`}
                >
                  <span className={Style.shape}>
                    {combo.label || "Combo Offer"}
                  </span>

                  <div
                    className={`${Style.top_content} flex-grow-1`}
                    style={{
                      textAlign:
                        [
                          combo.comboText2,
                          combo.comboText3,
                          combo.comboText4,
                          combo.comboText5,
                        ].filter(Boolean).length >= 1
                          ? "left"
                          : "center",
                    }}
                  >
                    <center>
                      <span className="position-relative align-center top-0">
                        {combo.validity || "Life-time Validity"}
                      </span>
                    </center>
                    {combo.comboText1 && (
                      <p className="mt-4 pt-3">{combo.comboText1}</p>
                    )}
                    {combo.comboText2 && <p>{combo.comboText2}</p>}
                    {combo.comboText3 && <p>{combo.comboText3}</p>}
                    {combo.comboText4 && <p>{combo.comboText4}</p>}
                    {combo.comboText5 && <p>{combo.comboText5}</p>}
                  </div>

                  <div
                    className={`border-0 bg-transparent pt-4 mt-3 ${Style.price_card}`}
                  >
                    {(combo.comboMRP || combo.MrpPrice) && (
                      <h4>
                        <del
                          style={{
                            position: "relative",
                            display: "inline-block",
                            textDecoration: "none",
                            fontSize: "20px",
                          }}
                        >
                          {combo.comboMRP || combo.MrpPrice}
                          <span
                            style={{
                              width: "60px",
                              height: "2px",
                              backgroundColor: "#0d6efd",
                              position: "absolute",
                              transform: "rotate(15deg)",
                              top: "17%",
                              left: "0%",
                              transformOrigin: "left center",
                              padding: "1px",
                              borderRadius: "13px",
                            }}
                            className="ml-2"
                          />
                        </del>
                      </h4>
                    )}

                    <h3>{combo.comboPrice || combo.discountedPrice}</h3>

                    <Link
                      href={combo.url}
                      onClick={() =>
                        gaEventTracker(
                          "Buy Now Clicked",
                          combo.label || "Combo Offer"
                        )
                      }
                      className={btnClass}
style={{fontSize:"10px"}}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {combo.btnText || "Buy Now"}
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PricingCombo;
