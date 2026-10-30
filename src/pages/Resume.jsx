import { education, experience, resume, resumeProjects } from "../data/content";
import { site } from "../data/site";
import usePageTitle from "../hooks/usePageTitle";

export default function Resume() {
  usePageTitle(`Resume — ${site.name}`);

  const printResume = (event) => {
    event.preventDefault();
    window.print();
  };

  return (
    <section className="pg" id="resume">
      <div className="wrap">
        <div className="pgh">
          <h2>Experience, skills &amp; education.</h2>
          <div className="cta nopr" style={{ margin: "26px 0 0" }}>
            <a className="btn p" href={site.resumeFile} download>
              Download resume PDF
            </a>
            <a className="btn g" href="#" onClick={printResume}>
              Print resume
            </a>
          </div>
        </div>
        <div className="paper">
          <h2>{site.fullName}</h2>
          <p className="paper-contact">
            <a href={site.phoneHref}>{site.phone}</a>
            {" · "}
            <a href={`mailto:${site.email}`}>{site.email}</a>
            {" · "}
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer">
              {site.linkedinLabel}
            </a>
            {" · "}
            <a href={site.github} target="_blank" rel="noopener noreferrer">
              {site.githubLabel}
            </a>
          </p>

          <h3>Professional Summary</h3>
          <p>{resume.summary}</p>

          <h3>Technical Skills</h3>
          {resume.skillGroups.map((group) => (
            <p key={group.label}>
              <b>{group.label}:</b> {group.items}
            </p>
          ))}

          <h3>Professional Experience</h3>
          {experience.map((item) => (
            <div className="paper-job" key={`${item.title}-${item.dates}`}>
              <div className="paper-job-hd">
                <b>{item.title}</b>
                <span>{item.dates}</span>
              </div>
              <p>{item.company}</p>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>Projects</h3>
          {resumeProjects.map((project) => (
            <div className="paper-job" key={project.title}>
              <div className="paper-job-hd">
                <b>{project.title}</b>
                <span>{project.meta}</span>
              </div>
              <p>
                <b>Tech Stack:</b> {project.stack}
              </p>
              <ul>
                {project.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </div>
          ))}

          <h3>Education</h3>
          {education.map((item) => (
            <div className="paper-job" key={item.title}>
              <div className="paper-job-hd">
                <b>{item.title}</b>
                <span>{item.date}</span>
              </div>
              <p>{item.school}</p>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
