import React, { useEffect, useState } from "react";
import "./blogfooter.css";
import Link from "next/link";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Brokerfooter() {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(typeof window !== "undefined" && window.innerWidth);
    };

    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial window width
      setWindowWidth(window.innerWidth);

      // Add event listener to handle window resize
      window.addEventListener("resize", handleResize);

      // Clean up event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <>
      <footer>
        <div className="container">
          <div className="flex justify-center w-full">
            <div
              className="lg:col-span-3 col-span-2 col-9"
              style={{ marginTop: windowWidth <= 450 ? "" : 28 }}
            >
              <div className="">
                <div
                  className="flex justify-center"
                  style={{
                    justifyContent: windowWidth <= 450 ? "center" : "",
                    display: windowWidth <= 450 ? "flex" : "",
                  }}
                >
                  <img
                    loading="lazy"
                    src="/finnovationzfooter.svg"
                    alt=""
                    style={{
                      justifyContent: windowWidth <= 450 ? "center" : "",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:mb-[120px] md:mb-[70px] mb-[40px]">
            <div className="my-3 flex justify-center pt-2">
              <ul className="mb-0 flex-wrap d-flex align-items-center justify-content-center md:gap-3 gap-3">
                <li>
                  <Link href="#" className="text-black no-underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black no-underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black no-underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black no-underline">
                    Refund Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-black no-underline">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>

            <div
              className="flex justify-center gap-3"
              style={{ justifyContent: windowWidth <= 450 ? "center" : "" }}
            >
              <Link
                href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
                target="_blank"
              >
                <img loading="lazy" src="/linkdln.svg" alt="Linkedin" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL"
                target="_blank"
              >
                <img loading="lazy" src="/fb.svg" alt="Facebook" />
              </Link>
              <Link
                href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09"
                target="_blank"
              >
                <img loading="lazy" src="/twittre.svg" alt="twiter" />
              </Link>
              <Link
                href="https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA=="
                target="_blank"
              >
                <img loading="lazy" src="/insta.svg" alt="instagram" />
              </Link>
              <Link
                href="https://youtube.com/@namaskarprasad?si=BKRmkkM9XKOBIfVN"
                target="_blank"
              >
                <img loading="lazy" src="/iconyoutube.svg" alt="Youtube" />
              </Link>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 ">
            <div className="lg:col-span-12 justify-center flex items-center copy-right">
              {" "}
              Copyright © 2024. FinnovationZ By Ikashi Fintech PVT LTD. All right reserved
            </div>
          </div>
        </div>
        <div>
          <div className="forbackimg"></div>
        </div>
      </footer>
    </>
  );
}

export default Brokerfooter;
