import SkillCard from "./SkillCard";
import Web from '../../public/assets/icons/spider-web-web-svgrepo-com.svg';
import FR from '../../public/assets/icons/react-javascript-js-framework-facebook-svgrepo-com.svg';
import BE from '../../public/assets/icons/nodejs-icon-svgrepo-com.svg';
import GQL from '../../public/assets/icons/graphql-svgrepo-com.svg';
import DB from '../../public/assets/icons/database-svgrepo-com.svg';
import DC from '../../public/assets/icons/docker2-svgrepo-com.svg';
import GIT from '../../public/assets/icons/git-svgrepo-com.svg';
import Webdark from '../../public/assets/icons/spider-web-web-svgrepo-com-dark.svg';

interface SkillsList {
  logo: string;
  title: string;
  technologies: string[];
}

interface skillsProps {
  isDarkTheme: boolean
  isEng: boolean
}

const Skills = ({isDarkTheme, isEng}: skillsProps) => {
  const skillsLists: SkillsList[] = [
    {
      logo: isDarkTheme ? Webdark : Web,
      title: "Web Design & Development",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      logo: FR,
      title: "Frontend Javascript Framework",
      technologies: ["React", "React-Native", "Nextjs"],
    },
    {
      logo: BE,
      title: "Backend Javascript Framework",
      technologies: ["Nodejs", "Fastify", "Nestjs"],
    },
    {
      logo: GQL,
      title: "API Design",
      technologies: ["REST API", "Graphql"],
    },
    {
      logo: DB,
      title: "Database Managment System",
      technologies: ["MongoDB", "SQL", "PostgresSQL"],
    },
    {
      logo: DC,
      title: "Automation Workflow Tools",
      technologies: ["Docker", "K8S", "CI/CD workflows"],
    },
    {
      logo: GIT,
      title: "Version Control Systems",
      technologies: ["git", "github", "azure devops"],
    },
  ];

  const marathiskillsLists: SkillsList[] = [
    {
      logo: isDarkTheme ? Webdark : Web,
      title: "Web Design & Development",
      technologies: ["HTML", "CSS", "JavaScript", "TypeScript"],
    },
    {
      logo: FR,
      title: "Frontend Javascript Framework",
      technologies: ["React", "React-Native", "Nextjs"],
    },
    {
      logo: BE,
      title: "Backend Javascript Framework",
      technologies: ["Nodejs", "Fastify", "Nestjs"],
    },
    {
      logo: GQL,
      title: "API Design",
      technologies: ["REST API", "Graphql"],
    },
    {
      logo: DB,
      title: "Database Managment System",
      technologies: ["MongoDB", "SQL", "PostgresSQL"],
    },
    {
      logo: DC,
      title: "Automation Workflow Tools",
      technologies: ["Docker", "K8S", "CI/CD workflows"],
    },
    {
      logo: GIT,
      title: "Version Control Systems",
      technologies: ["git", "github", "azure devops"],
    },
  ];

  return (
    <div className="skills-block">
      <h2>{isEng ? 'Skills' : 'कौशल्य'}</h2>
      {isEng ? skillsLists.map((skill, index)=>{
        return <SkillCard key={index}
        logo={skill.logo}
        title={skill.title}
        technologies={skill.technologies}
      />
      }) : marathiskillsLists.map((skill, index)=>{
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
