// components/PopupModal.js
"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "./PopupModal.module.css";
import { FaHandPointRight } from "react-icons/fa";
import { usePathname } from "next/navigation";

const PopupModal = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [show, setShow] = useState(false);

  const hiddenRoutes = [
    "/fmvmsession/thankyou",
    "/courses/combo",
   
    "/courses/combo/#pricing",
    "/fmvmsession  "
  ];
  useEffect(() => {
    const currentPath = router.asPath;
  
    const isHidden = hiddenRoutes.some((route) => currentPath.startsWith(route));
  
    if (!isHidden) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);
  
      return () => clearTimeout(timer);
    }
  }, [router.asPath]);
  
  const handleClose = () => setShow(false);

  const handleNavigate = () => {
    router.push("/courses/combo/#pricing");
  };
  const isHidden = hiddenRoutes.includes(pathname);

  if (!show) return null;

  return (
    <div className={`${styles.modalOverlay} ${isHidden ? "d-none" : ""}`}>
      <div className={styles.modalContainer}>
        <img src="/topsticky.webp" alt="Offer Popup" className={styles.popupImage} />

        {/* Close button */}
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>

        {/* CTA button on image */}
        <button
  className={styles.ctaButton}
  onClick={handleNavigate}
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px", // Optional spacing between icon and text
  }}
>
  <FaHandPointRight />
  View Offer
</button>

      </div>
    </div>
  );
};

export default PopupModal;
