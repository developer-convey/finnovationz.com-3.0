import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import "../quiz.css";
import Files from "@/config/file";
import DefaultImage from "@/app/components/DefaultImage";

function Footer({ bool = false}) {
  const router = useRouter();
  const { pathname, query } = router;
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center top_footer">
            <Link href="/" style={{display:'flex' ,justifyContent:'center' , alignItems:'center'}}>
              <DefaultImage
                loading="lazy"
                src={Files?.finnovationzLogo?.logo}
                alt="logo"
                className="mb-5 f-logo"
             
              />
            </Link>
            <p className="mb-1">
              <span>Are you ready?</span>
            </p>
            <h2>Let’s get started</h2>
            <Link
              href={
                pathname === "/courses/free-stock-market-course"
                  ? "/courses/free-stock-market-course/form"
                  : "#pricing"
              }
              className="site_btn text-decoration-none footer_btn"
            >
             {bool ? "Apply Now" : "Explore Courses"} 
            </Link>
            <ul className="list-unstyled mb-0 flex-wrap d-flex align-items-center justify-content-center">
              {/* <li><Link to="/">Home</Link></li>
                            <li><Link to="/">About Us</Link></li> */}
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/Non-Refund-Policy">Non Refund  Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service">Terms & Condition</Link>
              </li>
            </ul>
            {/* <ul className='list-unstyled mb-0 mt-2 mt-md-4 d-flex align-items-center justify-content-center social_icon'>
                            <li><Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='_blank' rel="noreferrer"><img loading='eager' src="/linkdln.svg" alt="" /></Link></li>
                            <li><Link href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL" target='_blank' rel="noreferrer"><img loading='eager' src="/fb.svg" alt="" /></Link></li>
                            <li><Link href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09" target='_blank' rel="noreferrer"><img loading='eager' src="/twitter.svg" alt="" /></Link></li>
                            <li><Link href="https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer"><img loading='eager' src="/insta.svg" alt="" /></Link></li>
                            <li><Link href="https://youtube.com/@namaskarprasad?si=BKRmkkM9XKOBIfVN" target='_blank' rel="noreferrer"><img loading='eager' src="/utube.svg" alt="" /></Link></li>
                        </ul> */}
          </div>
        </div>
      </div>
      <p className="text-center mb-0">
        Copyright © 2023. FinnovationZ. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
