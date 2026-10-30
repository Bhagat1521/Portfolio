import Reveal from "../components/Reveal";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education">
      <div className="wrap">
        <Reveal className="ctr">
          <div>
            <span className="lbl">05 / Education</span>
            <h2>Education</h2>
          </div>
        </Reveal>
        <div className="edu">
          {education.map((item) => (
            <Reveal key={item.title} className="card">
              <small>{item.date}</small>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
