const experiences = [
  {
    company: "CodePoet, LLC",
    time: "2019 - Present",
    location: "Remote",
    roles: [
      {
        title: "Senior Web API Specialist:",
        description:
          "Design and implement web APIs for communication between iOS app and Azure-hosted SQL Server. Collaborate cross-platform functionally for seamless integration. Create, deploy, and schedule Azure Functions for background data processing.",
      },
      {
        title: "Web Developer:",
        description:
          "Develop and maintain an admin portal for a retail kiosk company using C# MVC with Razor, Bootstrap and extensive JavaScript. Optimize performance and create complex reports for business analytics.",
      },
      {
        title: "Senior SSIS Developer:",
        description:
          "Innovate solutions for data integration (ETL) between SQL Server and IBM DB2 mainframe systems. Innovator of proprietary methodologies for data validation, verification, error handling and automated retry/remediation processes. Author, deploy, and schedule ETL jobs for background processing.",
      },
      {
        title: "Database Administrator:",
        description:
          "Manage Azure-hosted SQL Server databases, specializing in schema design and index optimization.",
      },
      {
        title: "DevOps Engineer:",
        description:
          "Manage DevOps responsibilities, including building, archiving and deploying iOS app to Apple's AppStoreConnect and TestFlight. Oversee continuous integration/continuous deployment (CI/CD) Azure pipelines to deploy website, API and Azure Functions across staging and production environments. FTP file deployments depending on client site configuration.",
      },
    ],
  },
  {
    company: "Watchtower",
    time: "2014 - 2019",
    location: "Onsite (NY) and remote",
    roles: [
      {
        title: "Team Facilitator / Scrum Master:",
        description:
          "Led daily stand-up meetings for remote and in-person team members, sprint planning sessions and retrospective meetings aligning with the Agile framework and project scope. Mentor and technology coach. Assisting team members in overcoming roadblocks.",
      },
      {
        title: "Code Reviewer:",
        description:
          "Provided constructive feedback to adhere to strict code quality and maintainability policies.",
      },
      {
        title: "Software Developer:",
        description:
          "Developed modular WPF desktop applications following the Model-View-ViewModel (MVVM) pattern, leveraging XAML markup to create rich and responsive user interfaces. Implemented application logic and business rules in C# view models, ensuring separation of concerns and testability. Utilized Behavior-Driven Development (BDD) approach, where SpecFlow Gherkin scenarios were used as acceptance criteria, ensuring reliability and robustness of the. Also designed and implemented custom theme in SharePoint intranet on Office 365.",
      },
    ],
  },
  {
    company: "Humana",
    time: "2012 - 2016",
    location: "Dallas TX",

    roles: [
      {
        title: "Senior Software Developer",
        duties: [
          {
            description:
              "Coordinated development efforts for multiple projects, collaborating with business and product owners to define and document business requirements. Authored solution architectural design documents to guide the team in meeting business objectives. Conducted peer code review and mentored 3 to 7 developers and offsite consultants.",
          },
          {
            description:
              "Managed the configuration, installation, and deployment of intranet websites to IIS Web Services.",
          },
          {
            description:
              "Lead developer and architect of intranet site using MVC 4.0 with Razor, Bootstrap, C#, and Entity Framework.",
          },
          {
            description:
              "Developed SQL Server Integration Services (SSIS) packages for nightly data synchronization between backend systems.",
          },
          {
            description:
              "Designed and implemented WCF Services for data transmission, utilizing XML serialized C# classes. Also maintained a complex EDI data processor written in C#.",
          },
        ],
      },
    ],
  },
  {
    company: "Cypress Software Systems / CRIF Lending Solutions",
    time: "2006 - 2012",
    location: "Dallas TX",
    roles: [
      {
        title: "Software Developer",
        duties: [
          {
            description:
              "Developed a system-to-system interface between financial institutions and automobile dealerships using WCF web services and XML in C#. Contributed to the development of components within a complex loan origination system used by financial institutions nationwide.",
          },
          {
            description:
              "Utilized Windows Workflow 4.0 for server-side components and object-oriented C# for client-side and middleware components. Worked with WPF and XAML for client-side components and employed Microsoft Expression Studio for application theming. Collaborated with graphic designers to develop UX artifacts.",
          },
        ],
      },
      {
        title: "Project Manager / Scrum Master",
        duties: [
          {
            description: "Managed the development team using Scrum/Agile principles and practices, facilitating communication between stakeholders and leading daily scrum meetings."
          }
        ]
      }
    ],
  },
];

export default function Experiences() {
  return (
    <div id="experiences" className="tab experiences">
      <div className="section-title">Experience</div>
      <ul>
        {experiences.map((experience) => (
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
