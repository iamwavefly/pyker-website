import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/layout/ScrollToTop";
import { ROUTES, findRoute } from "./routes";
import { applyMeta } from "./seo/meta";
import { useHighlighterDraw, usePageTransitions } from "./hooks/useMotion";

// Pre-rendered pages ship with the right head tags; this keeps them correct
// as the user navigates between pages in the browser.
function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    applyMeta(findRoute(pathname).meta);
  }, [pathname]);
  return null;
}

function App() {
  useHighlighterDraw();
  usePageTransitions();

  return (
    <>
      <ScrollToTop />
      <RouteMeta />
      <Routes>
        <Route element={<Layout />}>
          {ROUTES.map((route) =>
            route.path === "/" ? (
              <Route key="home" index element={route.element} />
            ) : (
              <Route key={route.path} path={route.path === "*" ? "*" : route.path.slice(1)} element={route.element} />
            ),
          )}
        </Route>
      </Routes>
    </>
  );
}

export default App;
