import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Preview({ type, tone }) {
  if (type === "phone") {
    return (
      <div className={`pv ${tone}`}>
        <div className="ph">
          <i /><i /><i /><i />
        </div>
      </div>
    );
  }

  return (
    <div className={`pv ${tone}`}>
      <div className="bar">
        <i /><i /><i />
      </div>
    </div>
  );
}

export default function ProjectCard({ project, hidden = false }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      el.classList.add("in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <article ref={ref} className={`rv${hidden ? " h" : ""}`}>
      <Preview type={project.preview} tone={project.tone} />
      <div className="pt">
        <div>
          <span className="tagx">{project.tag}</span>
          <h3>{project.title}</h3>
          <p>{project.summary}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <div className="pl">
            {project.links.map((link) =>
              link.to ? (
                <Link key={link.label} to={link.to}>
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href || "#"}
                  onClick={(event) => {
                    if (!link.href || link.href === "#") event.preventDefault();
                  }}
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
        <span className="arr">↗</span>
      </div>
    </article>
  );
}
