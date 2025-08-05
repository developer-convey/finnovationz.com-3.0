import React from 'react';
import Link from 'next/link'
import Files from '@/config/file';
import DefaultImage from '@/app/components/DefaultImage';

function Footer() {
    return ( 
        <footer>
            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-12 text-center top_footer mt-5">
                        <a href="/"><DefaultImage src={Files?.finnovationzLogo?.logo} alt="logo" className='logo'/></a>
                        <ul className='list-unstyled mb-0 flex-wrap d-flex align-items-center justify-content-center'>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/">About Us</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/Non-Refund-Policy">Non Refund  Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms & Condition</Link></li>
                        </ul>
                        <ul className='list-unstyled mb-0 mt-2 mt-md-4 d-flex align-items-center justify-content-center social_icon'>
                            <li><a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile" target='_blank' rel="noreferrer"><img src="/linkdln.svg" alt="" /></a></li>
                            <li><a href="https://www.facebook.com/profile.php?id=100091287158268&mibextid=nW3QTL" target='_blank' rel="noreferrer"><img src="/fb.svg" alt="" /></a></li>
                            <li><a href="https://twitter.com/conveyofficial?t=riXE4lD9f8bLbjOmhAIf8Q&s=09" target='_blank' rel="noreferrer"><img src="/twitter.svg" alt="" /></a></li>
                            <li><a href="https://instagram.com/namaskarprasad?igshid=MzRlODBiNWFlZA==" target='_blank' rel="noreferrer"><img src="/insta.svg" alt="" /></a></li>
                            <li><a href="https://youtube.com/@namaskarprasad?si=BKRmkkM9XKOBIfVN" target='_blank' rel="noreferrer"><img src="/utube.svg" alt="" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <p className='text-center mb-0'>Copyright © 2023. FinnovationZ. All right reserved</p>
        </footer>
     );
}

export default Footer;