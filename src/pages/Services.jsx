import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import { SkillIcon } from "../components/Icons";
import { services } from "../data/content";
import { site } from "../data/site";

export default function Services() {
  usePageTitle(`Services — ${site.name}`);

  return (
    <section className="pg" id="services">
      <div className="wrap">
        <div className="pgh">
          <h2>Services</h2>
          <p>Freelance work I’m open to. Scope and pricing are discussed per project.</p>
        </div>
        <div className="sg">
          {services.map((service) => (
            <div className="card" key={service.title}>
              <SkillIcon name={service.icon} />
              <h3>{service.title}</h3>
              <p style={{ marginBottom: 14 }}>{service.text}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link className="btn g" to="/#contact" state={{ inquiryType: "Freelance Project" }}>
                Inquire
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
