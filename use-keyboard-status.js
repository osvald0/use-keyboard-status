import { useEffect, useState } from "react";

export default function useKeyboardStatus() {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const initialWindowsHeight = window?.visualViewport?.height;

  function handleResize() {
    if (initialWindowsHeight && window?.visualViewport?.height) {
      setIsKeyboardOpen(window?.visualViewport?.height < initialWindowsHeight);
    }
  }

  useEffect(() => {
    if (typeof visualViewport !== "undefined") {
      window?.visualViewport?.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof visualViewport !== "undefined") {
        window?.visualViewport?.removeEventListener("resize", handleResize);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { isKeyboardOpen };
}
