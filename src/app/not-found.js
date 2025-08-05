"use client";

import Link from "next/link";
import { Space_Grotesk } from "next/font/google";
import './notfound.css';

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function NotFound() {
  return (
    <div className="not-found-container">
      {/* Background Image */}
      <div className="background-image"></div>

      <div className="content-container">
        <p className="message-text" style={{ color: 'white' }}>
          We can&apos;t find the page
          <br />
          you were looking for.
        </p>
        <h1 className={spaceGrotesk.className + " not-found-title"}>
          4 0 4
        </h1>
        <Link href="/" className="home-link">
          Take Me to Homepage
        </Link>
        <div className="social-container">
          <p style={{ color: 'white' }}>Follow us</p>
          <div className="social-icons">
            <SocialIcon href="#" icon="facebook" />
            <SocialIcon href="#" icon="instagram" />
            <SocialIcon href="#" icon="linkedin" />
            <SocialIcon href="#" icon="youtube" />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialIcon({ href, icon }) {
  const icons = {
    facebook: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M9.198 21.5h4v-8.01h3.604l.396-3.98h-4V7.5a1 1 0 0 1 1-1h3v-4h-3a5 5 0 0 0-5 5v2.01h-2l-.396 3.98h2.396v8.01Z" />
      </svg>
    ),
    instagram: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 13a3 3 0 1 1 3-3 3 3 0 0 1-3 3z" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M6.5 8a1.5 1.5 0 1 0-.001-3.001A1.5 1.5 0 0 0 6.5 8zm.5 1H5v13h2V9zM13 9h-2v13h2v-6.75c0-1.06.7-2.25 2.5-2.25s2.5 1.19 2.5 2.25V22h2v-7.75c0-2.5-1.5-3.75-3.5-3.75s-2.5.75-2.5.75V9z" />
      </svg>
    ),
    youtube: (
      <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23 9.71a8.5 8.5 0 0 0-.91-4.13 2.92 2.92 0 0 0-1.72-1A78.36 78.36 0 0 0 12 4.27a78.45 78.45 0 0 0-8.34.3 2.87 2.87 0 0 0-1.46.74c-.9.83-1 2.25-1.1 3.45a48.29 48.29 0 0 0 0 6.48 9.55 9.55 0 0 0 .3 2 3.14 3.14 0 0 0 .71 1.36 2.86 2.86 0 0 0 1.49.78 45.18 45.18 0 0 0 6.5.33c3.5.05 6.57 0 10.2-.28a2.88 2.88 0 0 0 1.53-.78 2.49 2.49 0 0 0 .61-1 10.58 10.58 0 0 0 .52-3.4c.04-.56.04-3.94.04-4.54zM9.74 14.85V8.66l5.92 3.11c-1.66.92-3.85 1.96-5.92 3.08z" />
      </svg>
    ),
  };

  return (
    <a
      href={href}
      style={{
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "rgba(255, 255, 255, 0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        transition: "all 0.3s ease",
        backdropFilter: "blur(5px)",
      }}
    >
      {icons[icon]}
    </a>
  );
}
