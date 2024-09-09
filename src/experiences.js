let data = require("./data/experiences-data.js");
let experiences = data.experiences;

export default function Experiences() {
  return (
    <div id="experiences" className="tab experiences">
      <div className="section-title">Experience</div>
      <ul>
        {experiences && experiences.map((experience) => (
          <Experience experienceObj={experience} />
        ))}
      </ul>
      <div className="history"><i>For my comprehensive work history, please visit my <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jakemclelland/">LinkedIn profile.</a></i></div>
    </div>
  );
}

function Experience({ experienceObj }) {
  let hasRoles = experienceObj.roles && experienceObj.roles.length > 0;
  let hasJobTitle =
    experienceObj.job_title && experienceObj.job_title.length > 0;

  return (
    <li className="experience">
      <div className="experience-company">{experienceObj.company}</div>
      <div className="experience-time">{experienceObj.time}</div>
      <div className="experience-location">{experienceObj.location}</div>
      {hasJobTitle ? (
        <div className="experience-job_title">{experienceObj.job_title}</div>
      ) : (
        ""
      )}
      {hasRoles ? <Roles rolesObj={experienceObj.roles} /> : ""}
    </li>
  );
}

function Roles({ rolesObj }) {
  return (
    <ul className="roles">
      {rolesObj.map((role) => (
        <Role roleObj={role} />
      ))}
    </ul>
  );
}

function Role({ roleObj }) {
  let hasTitle = roleObj.title && roleObj.title.length > 0;
  let hasDescription = roleObj.description && roleObj.description.length > 0;
  let hasDuties = roleObj.duties && roleObj.duties.length > 0;
  let isRoleBased = !hasDuties;

  return (
    <div>
      {isRoleBased ? (
        <li>
          {hasTitle ? <span className="role-title">{roleObj.title}</span> : ""}
          {hasDescription ? (
            <span className="role-description">{roleObj.description}</span>
          ) : (
            ""
          )}
        </li>
      ) : (
        ""
      )}

      {hasDuties ? (
        <div className="duty-list">
          <div className="role-title-duties">{roleObj.title}</div>
          <Duties dutiesObj={roleObj.duties} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

function Duties({ dutiesObj }) {
  return (
    <div>
      {dutiesObj.map((duty) => (
        <Duty dutyObj={duty} />
      ))}
    </div>
  );
}

function Duty({ dutyObj }) {
  return <li className="role-description">{dutyObj.description}</li>;
}
