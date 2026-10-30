import usePageTitle from "../hooks/usePageTitle";
import { site } from "../data/site";
import Hero from "../sections/Hero";
import Marquee from "../components/Marquee";
import About from "../sections/About";
import Values from "../sections/Values";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import Projects from "../sections/Projects";
import Education from "../sections/Education";
import Contact from "../sections/Contact";

export default function Home() {
  usePageTitle(site.title);

  return (
    <main id="main">
      <Hero />
      <Marquee />
      <About />
      <Values />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Contact />
    </main>
  );
}
