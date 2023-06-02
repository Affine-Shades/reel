import { useEffect, useRef, useState } from "react";
import { debounce } from "lodash";
import { DEBOUNCE_TIME } from "@/constants/image";

// detect currently snapped element

function useScrollSnap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentElement, setCurrentElement] = useState<HTMLImageElement | null>(
    null
  );

  useEffect(() => {
    const handleScroll = debounce(() => {
      const container = containerRef.current;
      const items = container?.querySelectorAll<HTMLImageElement>("img");

      let snappedElement: HTMLImageElement | null = null;

      items?.forEach((item) => {
        const rect = item.getBoundingClientRect();
        // 48 is the width of the image        
        if (rect.left <= 48 && rect.left <= (container?.offsetWidth || 0)) {
          snappedElement = item;
          return;
        }
      });

      setCurrentElement(snappedElement);
    }, DEBOUNCE_TIME); // in milliseconds

    handleScroll(); // Check initial element

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      handleScroll.cancel();
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { currentElement, containerRef };
}

export default useScrollSnap;
