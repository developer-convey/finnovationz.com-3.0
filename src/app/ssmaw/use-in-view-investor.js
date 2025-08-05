import { useEffect, useState } from "react";

export function useInView(ref) {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const elementId = ref.current?.getAttribute("data-section-id");
    const wasTriggered = elementId ? localStorage.getItem(`section-${elementId}`) === "true" : false;

    if (wasTriggered) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry], observerInstance) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          const sectionId = entry.target.getAttribute("data-section-id");
          if (sectionId) {
            localStorage.setItem(`section-${sectionId}`, "true");
          }
          observerInstance.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [ref]);

  return isInView;
}
