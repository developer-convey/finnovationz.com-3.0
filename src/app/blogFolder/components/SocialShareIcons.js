import Blogstyle from '../style/blogdetails.module.css';
import {
    FacebookShareButton,
    LinkedinShareButton,
    WhatsappShareButton,
} from 'react-share'
import BaseURL from './Baseurl';
import { useEffect, useState } from 'react';

function SocialShareIcons(props) {
    const [pathurl, setpathurl] = useState("")
    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        if (BaseURL === process.env.NEXT_PUBLIC_BLOG_API_URL) {
            setpathurl("https://blog.finnovationz.com")
        } else {
            setpathurl("https://dev.blog.finnovationz.com/")
        }
    }, [])

    const MainURL = `${pathurl}/blogs/${props.shareURL}`;

    const handleCopyClick = () => {
        navigator.clipboard.writeText(MainURL).then(() => {
            setIsCopied(true);
            setTimeout(() => {
                setIsCopied(false);
            }, 2000); // Hide toast message after 2 seconds
        }).catch((error) => {
            console.error('Copy failed: ', error);
        });
    };

    return ( 
        <>
            <div className={`${Blogstyle.blog_social}`}>
                <FacebookShareButton quote='Show me the Google!' url={MainURL}>
                    <img src='/facebook.svg' alt='fb' />
                </FacebookShareButton>
                <LinkedinShareButton quote='Show me the Google!' url={MainURL}>
                    <img src='/linkedin.svg' alt='linkdln' />
                </LinkedinShareButton>
                <button title="copy url" onClick={handleCopyClick} className="position-relative react-share__ShareButton">
                    <img src='/link_icon.svg' alt='link' />
            {isCopied && <div className={`${Blogstyle.toast}`}>Copied</div>}
                </button>
                <WhatsappShareButton quote='Show me the Google!' url={MainURL}>
                    <img src='/whatsapp.png' alt='whatsapp' />
                </WhatsappShareButton>
            </div>
        </>
    );
}

export default SocialShareIcons;