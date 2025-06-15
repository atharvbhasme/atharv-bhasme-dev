import "../index.css";

interface ExperienceData {
  position: string;
  period: string;
  brief: string;
  keyFocus: string;
}

interface experienceProps {
  isEng: boolean;
}

const Experience = ({isEng}:experienceProps) => {
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

  const marathiExperienceData:ExperienceData[] = [{
      position: "'प्रशिक्षणार्थी'",
      period: "जानेवारी २०२३ - जून २०२३",
      brief: `या काळात मी फुल स्टॅक डेव्हलपमेंट शिकलो. मी रिएक्ट (React), एक्सप्रेस (Express) आणि एसक्यूएल (SQL) वापरून एक ब्लॉग प्रकल्प (Blog Project) पूर्ण केला.
त्याचबरोबर मी रिएक्ट नेटिव्ह (React Native) वापरून व्हिजिटर मॅनेजमेंट ॲप (Visitor Management App) अगदी सुरुवातीपासून बनवायला सुरुवात केली..`,
      keyFocus: `keyFocus: React, React Native, Office Culture`,
    },
    {
      position: "प्रशिक्षणार्थी सॉफ्टवेअर विकास अभियंता)",
      period: "जुलै २०२३ - ऑक्टोबर २०२३",
      brief: `मी इंटर्नशिपमध्ये सुरू केलेला व्हिजिटर मॅनेजमेंट ॲप नावाचा कंपनीचा अंतर्गत प्रकल्प पूर्ण केला.
एका लॉजिस्टिक्स क्लायंटसाठी (Logistics Client) रिएक्ट नेटिव्ह ॲप बनवायला सुरुवात केली.
या ॲपसाठी लागणाऱ्या मायक्रो-सर्व्हिसेसवर (Microservices) देखील काम केले.
.`,
      keyFocus: `keyFocus : React Native, Fastify, MongoDB, GraphQL, Kafka`,
    },
    {
      position: "सहायक सॉफ्टवेअर विकास अभियंता",
      period: "नोव्हेंबर २०२३ - मार्च २०२४",
      brief: `मी त्याच लॉजिस्टिक्स क्लायंटच्या ॲप प्रकल्पावर काम करत राहिलो आणि रिएक्ट नेटिव्ह एमव्हीसीसी आर्किटेक्चर (React Native MVCC Architecture) समजून घेतले. त्याच क्लायंटसाठी रिएक्ट पोर्टलवर (React Portal) देखील काम सुरू केले.
ॲजाइल सॉफ्टवेअर डेव्हलपमेंट लाइफ सायकल (Agile Software Development Life Cycle) म्हणजे काय, तेही समजून घेतले.
यासोबतच, नेस्टजेएस पोस्टग्रेस (NestJS Postgres) वरून नेस्टजेएस एसक्यूएल (NestJS SQL) मध्ये डेटा हलवण्याच्या (माइग्रेशन) प्रकल्पावरही काम केले.
ग्राफक्यूएल (GraphQL) आणि काफ्का (Kafka) तसेच मायक्रो-सर्व्हिसेस आर्किटेक्चर (Microservices Architecture) कसे काम करते, हे अधिक चांगल्या प्रकारे समजून घेतले..`,
      keyFocus: `keyFocus : React, NestJS, GraphQL, MongoDB, Kafka, Postgres, SQL`,
    },
    {
      position: "सॉफ्टवेअर विकास अभियंता",
      period: "मार्च २०२४ - आत्तापर्यंत",
      brief: `ग्राफक्यूएल (GraphQL) आणि काफ्का (Kafka) सोबत मायक्रो-सर्व्हिसेस आर्किटेक्चरचे (Microservices Architecture) अधिक सखोल ज्ञान मिळवले..`,
      keyFocus: `keyFocus: GraphQL, Kafka, Microservices Architecture`,
    },]

  return (
    <div className="experience-block">
      <h2>{isEng ? 'Experience' : 'अनुभव'}</h2>
      <div className="main-timeline-block">
        <ul className="ui-timeline">
          {isEng ? experienceData.reverse().map((exp, index) => (
            <li className="li-timeline" key={index}>
                <div className="li-content">
              <p style={{ fontSize: "24px", margin: 0 }}>{exp.position}</p>
              <p style={{ fontSize: "20px", margin: 0 }}>{exp.period}</p>
              <p>{exp.brief}</p>
              <p style={{ fontWeight: 700 }}>{exp.keyFocus}</p>
              </div>
            </li>
          )) : marathiExperienceData.reverse().map((exp, index) => (
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
