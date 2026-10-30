import { Link } from "react-router-dom";
import { footerNav, site } from "../data/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="ft">
          <span className="brand">{site.brand}{site.brandSuffix}</span>
          <span>{site.tagline}</span>
          <nav aria-label="Footer">
            {footerNav.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="ft" style={{ marginTop: 22 }}>
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <nav aria-label="Social">
            <a href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <Link to="/#contact">Contact</Link>
            <Link to="/#home">Back to top ↑</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
