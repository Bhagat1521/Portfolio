import Reveal from "../components/Reveal";
import { SkillIcon } from "../components/Icons";
import { skillCategories } from "../data/content";

export default function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <Reveal className="ctr">
          <div>
            <span className="lbl">02 / Skills</span>
            <h2>Core Competencies</h2>
          </div>
        </Reveal>
        <div className="grid3">
          {skillCategories.map((skill) => (
            <Reveal key={skill.title} className="card">
              <SkillIcon name={skill.icon} />
              <h3>{skill.title}</h3>
              <p>{skill.text}</p>
              <div className={`tags${skill.arrows ? " arrows" : ""}`}>
                {skill.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
