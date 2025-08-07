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
  const [hasClosed, setHasClosed] = useState(false);

  // List of static paths where popup should not appear
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

  // Hide on dynamic quiz pages like /quiz/123
  const isDynamicQuiz = /^\/quiz\/[^/]+$/.test(pathname);
  const isHidden = hiddenRoutes.includes(pathname) || isDynamicQuiz;

  // Reset on route change
  useEffect(() => {
    setHasClosed(false);
    setShow(false);
  }, [pathname]);

  useEffect(() => {
    if (isHidden) return;

    const handleMouseLeave = (e) => {
      // Only trigger if mouse moves out toward top of page
      if (e.clientY <= 0 && !show && !hasClosed) {
        setShow(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [show, hasClosed, isHidden]);

  const handleClose = () => {
    setShow(false);
    setHasClosed(true);
  };

  const handleNavigate = () => {
    router.push("/courses/combo/#pricing");
  };

  if (!show || isHidden || hasClosed) return null;

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
