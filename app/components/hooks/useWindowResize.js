import { useEffect, useRef, useState } from "react";

function useWindowResize(delay = 200) {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });
  const refTimeout = useRef();
  useEffect(() => {
    if (refTimeout.current) {
      clearTimeout(refTimeout.current);
    }
    const handleResize = () => {
      refTimeout.current = setTimeout(() => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }, delay);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(refTimeout.current);
    };
  }, [delay]);

  return windowSize;
}
export default useWindowResize;
