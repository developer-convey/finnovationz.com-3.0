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

  // List of exact or static paths where popup should NOT appear
  const hiddenRoutes = [
    "/fmvmsession/thankyou",
    "/fmvmsession",
    "/courses/fmvm-modelling",
    "/courses/fmvm-modelling/thankyou",
    "/courses/fmvm",
    "/courses/fmvm/thankyou",
    "/courses/combo-of-foundation-course-for-beginners-and-fundamental-analysis-2.O",
    "/courses/big-combo",
    "/courses/combo",
    "/courses/offer",
    "/courses/offer-marathi"
  ];

  // Only dynamic quiz/[id] should be hidden — use RegExp
  const isDynamicQuiz = /^\/quiz\/[^/]+$/.test(pathname);

  const isHidden = hiddenRoutes.includes(pathname) || isDynamicQuiz;

  useEffect(() => {
    if (!isHidden) {
      const timer = setTimeout(() => {
        setShow(true);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [router.asPath, isHidden]);

  if (!show || isHidden) return null;

  const handleClose = () => setShow(false);
  const handleNavigate = () => {
    router.push("/courses/combo/#pricing");
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <img src="/topsticky.webp" alt="Offer Popup" className={styles.popupImage} />

        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>

        <button
          className={styles.ctaButton}
          onClick={handleNavigate}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "4px",
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
