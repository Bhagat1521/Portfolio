import { useLayoutEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (pathname === "/" && hash === "#resume") {
      navigate("/resume", { replace: true });
      return;
    }
    if (pathname === "/" && hash === "#services") {
      navigate("/services", { replace: true });
      return;
    }
    if (pathname === "/" && hash.startsWith("#project-")) {
      navigate(`/projects/${hash.slice(9)}`, { replace: true });
      return;
    }

    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }

    window.scrollTo(0, 0);
  }, [pathname, hash, navigate]);

  return null;
}
