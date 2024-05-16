const otherSkills = [
  {
    description:
      "Coordinating volunteers and facilitating large non-profit events.",
  },
  {
    description: "Critical thinking, reading and research.",
  },

  {
    description: "Listening, problem-solving, and relationship-building.",
  },

  {
    description: "Disaster relief and crisis counselling.",
  },

  {
    description: "Volunteer museum tour guide.",
  },

  {
    description: "Amateur bonsai enthusiast.",
  },
];

export default function OtherSkills() {
  return (
    <div id="other-skills" className="tab other-skills">
      <div className="section-title">Other Skills</div>
      <ul>
        {otherSkills.map((skill) => (
          <OtherSkill skillObj={skill} />
        ))}
      </ul>
    </div>
  );
}

function OtherSkill({ skillObj }) {
  return <li>{skillObj.description}</li>;
}
