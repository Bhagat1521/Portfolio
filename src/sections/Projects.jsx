import { useState } from "react";
import Reveal from "../components/Reveal";
import ProjectCard from "../components/ProjectCard";
import { site } from "../data/site";
import { projectFilters, projects } from "../data/projects";

export default function Projects() {
  const [filter, setFilter] = useState("all");

  return (
    <section id="projects">
      <div className="wrap">
        <Reveal className="hd">
          <div>
            <span className="lbl">03 / Projects</span>
            <h2>Selected Work</h2>
          </div>
          <a href={site.github} target="_blank" rel="noopener noreferrer">
            View GitHub ↗
          </a>
        </Reveal>
        <Reveal className="fl">
          {projectFilters.map((item) => (
            <button
              key={item.id}
              className={filter === item.id ? "on" : ""}
              type="button"
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </Reveal>
        <div className="proj">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              hidden={filter !== "all" && !project.categories.includes(filter)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
