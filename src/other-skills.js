let data = require("./data/other-skills-data.js");
let otherSkills = data.otherSkills;

export default function OtherSkills() {
  return (
    <div id="other-skills" className="tab other-skills">
      <div className="section-title">Other Skills</div>
      <ul>
        {otherSkills && otherSkills.map((skill) => (
          <OtherSkill skillObj={skill} />
        ))}
      </ul>
    </div>
  );
}

function OtherSkill({ skillObj }) {
  return <li>{skillObj.description}</li>;
}
