import Reveal from "../components/Reveal";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <div>
          <span className="lbl">04 / Experience</span>
          <Reveal>
            <h2>Experience</h2>
          </Reveal>
        </div>
        <div className="tl">
          {experience.map((item) => (
            <Reveal key={`${item.title}-${item.dates}`}>
              <h3>{item.title}</h3>
              <em>{item.meta}</em>
              <ul>
                {item.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <div className="tags">
                {item.tags.map((tag) => (
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
