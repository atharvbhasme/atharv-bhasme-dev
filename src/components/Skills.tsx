import SkillCard from "./SkillCard";

interface SkillsList {
  logo: string;
  title: string;
  technologies: string[];
}

const Skills = () => {
  const skillsLists: SkillsList[] = [
    {
      logo: "src/assets/icons/spider-web-web-svgrepo-com.svg",
      title: "Web Design & Development",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      logo: "src/assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg",
      title: "Frontend Javascript Framework",
      technologies: ["React", "React-Native", "Nextjs"],
    },
    {
      logo: "src/assets/icons/nodejs-icon-svgrepo-com.svg",
      title: "Backend Javascript Framework",
      technologies: ["Nodejs", "Fastify", "Nestjs"],
    },
    {
      logo: "src/assets/icons/graphql-svgrepo-com.svg",
      title: "API Design",
      technologies: ["REST API", "Graphql"],
    },
    {
      logo: "src/assets/icons/database-svgrepo-com.svg",
      title: "Database Managment System",
      technologies: ["MongoDB", "SQL", "PostgresSQL"],
    },
    {
      logo: "src/assets/icons/docker2-svgrepo-com.svg",
      title: "Automation Workflow Tools",
      technologies: ["Docker", "K8S", "CI/CD workflows"],
    },
    {
      logo: "src/assets/icons/git-svgrepo-com.svg",
      title: "Version Control Systems",
      technologies: ["git", "github", "azure devops"],
    },
  ];
  return (
    <div className="skills-block">
      <h2>Skills</h2>
      {skillsLists.map((skill, index)=>{
        return <SkillCard key={index}
        logo={skill.logo}
        title={skill.title}
        technologies={skill.technologies}
      />
      })}
      
    </div>
  );
};

export default Skills;
