import AboutMe from "./about-me";
import Experiences from "./experiences";
import Skills from "./skills";
import Certifications from "./certifications";
import OtherSkills from "./other-skills";

export default function BodyPanel() {
  return (
    <div className="body-panel">
      <AboutMe />
      <Experiences />
      <Skills />
      <Certifications />
      <OtherSkills />
    </div>
  );
}
