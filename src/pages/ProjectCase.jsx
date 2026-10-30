import { Link, useParams } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import { getProject, getRelatedProjects, PLACEHOLDER_DETAIL } from "../data/projects";
import { site } from "../data/site";

function Gallery() {
  return (
    <>
      <div className="gal">
        {[0, 1, 2].map((item) => (
          <div className="pv a" key={item}>
            <div className="ph">
              <i /><i /><i /><i />
            </div>
          </div>
        ))}
      </div>
      <p>Gallery placeholder: add anonymized screenshots.</p>
    </>
  );
}

export default function ProjectCase() {
  const { slug } = useParams();
  const project = getProject(slug);

  usePageTitle(project ? `${project.title} — ${site.name}` : `Project — ${site.name}`);

  if (!project) {
    return (
      <section className="pg" id="case">
        <div className="wrap cs">
          <div className="pgh">
            <h2>Project not found</h2>
            <p className="missing">That case study isn’t in this portfolio yet.</p>
          </div>
          <Link className="btn g" to="/#projects">Back to projects</Link>
        </div>
      </section>
    );
  }

  const related = getRelatedProjects(project.slug);
  const sections = [
    { title: "Project overview", body: <p>{project.description}</p> },
    { title: "Problem statement", body: <p>{PLACEHOLDER_DETAIL}</p> },
    { title: "Goals and requirements", body: <p>{PLACEHOLDER_DETAIL}</p> },
    { title: "My role and responsibilities", body: <p>{project.role || PLACEHOLDER_DETAIL}</p> },
    {
      title: "Technology stack",
      body: (
        <div className="tags">
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ),
    },
    { title: "Architecture overview", body: <p>{PLACEHOLDER_DETAIL}</p> },
    {
      title: "Key features",
      body: project.features ? (
        <ul>
          {project.features.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{PLACEHOLDER_DETAIL}</p>
      ),
    },
    { title: "Engineering challenges and solutions", body: <p>{PLACEHOLDER_DETAIL}</p> },
    { title: "Screenshots and gallery", body: <Gallery /> },
    { title: "Outcomes", body: <p>No verified outcomes added yet.</p> },
    {
      title: "Related projects",
      body: (
        <ul>
          {related.map((item) => (
            <li key={item.slug}>
              <Link to={`/projects/${item.slug}`}>{item.title}</Link>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  return (
    <section className="pg" id="case">
      <div className="wrap cs">
        <div className="pgh">
          <span className="tagx">{project.label}</span>
          <h2>{project.title}</h2>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.body}
          </div>
        ))}
        <div className="cta">
          <Link className="btn g" to="/#projects">Back to projects</Link>
          <Link className="btn p" to="/#contact">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
