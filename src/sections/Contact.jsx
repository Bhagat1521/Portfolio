import Reveal from "../components/Reveal";
import ContactForm from "../components/ContactForm";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon } from "../components/Icons";
import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact">
      <div className="wrap ct">
        <Reveal>
          <h2>
            Let’s
            <br />
            <span>Create</span>
            <br />
            Together
          </h2>
          <p>Have a project in mind? Let’s connect and discuss how I can contribute to your next idea.</p>
          <div className="ci">
            <a href={`mailto:${site.email}`}>
              <MailIcon />
              {site.email}
            </a>
            <a href={site.phoneHref}>
              <PhoneIcon />
              {site.phone}
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
              {site.linkedinLabel}
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              <GitHubIcon />
              {site.githubLabel}
            </a>
          </div>
        </Reveal>
        <Reveal>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
