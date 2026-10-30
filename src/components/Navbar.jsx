import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks, site } from "../data/site";

function isActive(to, pathname, hash) {
  if (to === "/resume") return pathname === "/resume";
  if (to === "/services") return pathname === "/services";
  if (!to.startsWith("/#")) return pathname === to;

  const targetHash = to.slice(1);
  if (pathname !== "/") return false;
  if (targetHash === "#home") return !hash || hash === "#home";
  return hash === targetHash;
}

export default function Navbar() {
  const { pathname, hash } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header id="hd" className={scrolled ? "s" : ""}>
      <div className="wrap nav">
        <Link to="/#home" className="brand" onClick={() => setOpen(false)}>
          {site.brand}
          <span style={{ color: "var(--lav)" }}>{site.brandSuffix}</span>
        </Link>

        <nav className={`links${open ? " o" : ""}`} id="lk" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`${link.mobileOnly ? "m" : ""}${isActive(link.to, pathname, hash) ? " act" : ""}`.trim()}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="rt">
          <Link className="btn p navcta" to="/#contact">
            Contact ↗
          </Link>
          <button
            className={`burger${open ? " o" : ""}`}
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>
    </header>
  );
}
