import "../App.css";

interface ExperienceData {
  position: string;
  period: string;
  brief: string;
  keyFocus: string;
}

const Experience = () => {
  const experienceData: ExperienceData[] = [
    {
      position: "Intern",
      period: "January 2023 – June 2023",
      brief: `Completed foundational training in full-stack development by building a blog application using React, Express, and SQL.
Started developing a Visitor Management App in React Native from scratch.`,
      keyFocus: `keyFocus: React, React Native, Office Culture`,
    },
    {
      position: "Trainee Software Development Engineer",
      period: "July 2023 – October 2023",
      brief: `Completed the internal Visitor Management App that was initiated during the internship.
Began work on a React Native application for a logistics client.
Contributed to backend microservices development supporting the app.`,
      keyFocus: `keyFocus : React Native, Fastify, MongoDB, GraphQL, Kafka`,
    },
    {
      position: "Associate Software Development Engineer",
      period: "November 2023 – March 2024",
      brief: `Continued development on the logistics client's app, gaining a solid understanding of the React Native MVCC architecture.
Started building a React web portal for the same client.
Learned and followed the Agile Software Development Life Cycle.
Worked on a migration project, moving from NestJS-Postgres repositories to NestJS-SQL.
Deepened knowledge in GraphQL, Kafka, and microservices architecture.`,
      keyFocus: `keyFocus : React, NestJS, GraphQL, MongoDB, Kafka, Postgres, SQL`,
    },
    {
      position: "Software Development Engineer",
      period: "March 2024 – Present",
      brief: `Gained deeper insights into GraphQL and Kafka within the context of microservices architecture.
Continuously contributing to and improving scalable systems.`,
      keyFocus: `keyFocus: GraphQL, Kafka, Microservices Architecture`,
    },
  ];
  return (
    <div className="experience-block">
      <h2>Experience</h2>
      <div className="main-timeline-block">
        <ul className="ui-timeline">
        
          {experienceData.reverse().map((exp, index) => (
            <li className="li-timeline" key={index}>
                <div className="li-content">
              <p style={{ fontSize: "24px", margin: 0 }}>{exp.position}</p>
              <p style={{ fontSize: "20px", margin: 0 }}>{exp.period}</p>
              <p>{exp.brief}</p>
              <p style={{ fontWeight: 700 }}>{exp.keyFocus}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
