import { Link } from "react-router-dom";
import HeroArt from "../components/HeroArt";
import { site, socialLinks } from "../data/site";

export default function Hero() {
  return (
    <section id="home">
      <div className="wrap hero">
        <div className="hcopy">
          <span className="pill">{site.pill}</span>
          <h1>
            <span className="ln"><span>{site.headline[0]}</span></span>
            <span className="ln"><span>{site.headline[1]}</span></span>
            <span className="ln">
              <span className="hl">{site.headline[2]}</span>
              <i className="dot" />
            </span>
          </h1>
          <p className="lead">{site.lead}</p>
          <div className="live" style={{ margin: "30px 0 0" }}>
            <b />
            {site.status}
          </div>
          <div className="cta">
            <Link className="btn p" to="/#projects">Explore my work ↗</Link>
            <Link className="btn g" to="/#contact">Let’s connect</Link>
          </div>
          <div className="soc">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        <HeroArt />
        <i className="band" />
      </div>
    </section>
  );
}
