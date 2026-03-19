import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // smooth scroll
    });
  }, [pathname]); // triggers on every route change

  return null; // this component doesn't render anything
};

export default ScrollToTop;
