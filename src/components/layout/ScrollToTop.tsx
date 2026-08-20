import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// react-router doesn't reset scroll position on navigation by default.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
