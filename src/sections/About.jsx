import Reveal from "../components/Reveal";
import { about } from "../data/content";

export default function About() {
  return (
    <section id="about">
      <div className="wrap about">
        <Reveal>
          <div>
            <span className="lbl">{about.label}</span>
            <h2>{about.title}</h2>
          </div>
          {about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="stats">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <b>{stat.value}</b>
                <small>{stat.label}</small>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal className="frame">
          <div>
            <div className="code">
              <i>const</i>
              {" developer = {"}
              <br />
              {"  role: \"Software Developer\","}
              <br />
              {"  focus: \"React Native\","}
              <br />
              {"  domain: \"Healthcare\""}
              <br />
              {"};"}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
