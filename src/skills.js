let data = require("./data/skills-data");
let skills = data.skills;

export default function Skills() {
  return (
    <div id="skills" className="tab skills">
      <div className="section-title">Skills</div>
      <ul>
        {skills && skills.map((skill) => (
          <Skill skillObj={skill} />
        ))}
      </ul>
    </div>
  );
}

function Skill({ skillObj }) {
  return (
    <li key={skillObj.id}>
      <span className="role-title">{skillObj.title}</span>
      <span className="role-description">{skillObj.description}</span>
    </li>
  );
}
