import { useEffect } from "react";
import { flushSync } from "react-dom";
import { useLocation, useNavigate } from "react-router-dom";

function motionAllowed() {
  return document.documentElement.classList.contains("motion");
}

/** Sweeps in each heading's lime highlight the first time it scrolls into view. */
export function useHighlighterDraw() {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!motionAllowed()) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("drawn");
            observer.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -15% 0px" },
    );
    // Wait a frame so the new page's headings are in the DOM.
    const frame = requestAnimationFrame(() => {
      document.querySelectorAll(".accent:not(.drawn)").forEach((element) => observer.observe(element));
    });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [pathname]);
}

/**
 * Wraps internal link navigations in the View Transition API. Runs in the
 * capture phase so it can take over before React Router's own click handler
 * (which skips navigation once the event is default-prevented). Hash links,
 * modified clicks and new-tab links behave normally.
 */
export function usePageTransitions() {
  const navigate = useNavigate();

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (!("startViewTransition" in document) || !motionAllowed()) return;
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.hash || url.pathname === window.location.pathname) return;

      event.preventDefault();
      document.startViewTransition(() => {
        flushSync(() => navigate(url.pathname + url.search));
        window.scrollTo(0, 0);
      });
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [navigate]);
}
