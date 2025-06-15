import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import HorizontalDivider from "../components/HorizontalDivider";
import ProjectCard from "../components/ProjectCard";
import PortfolioImage from "../../public/assets/multimedia.svg";
import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import useScreenSize from "../hooks/useScreenSize";
import LanToggle from "../components/LanToggle";

interface projectType {
  image: string;
  name: string;
  desc: string;
  link: string;
  technologies: string[];
}

const Projects = () => {
  const [darkTheme, setDarkTheme] = React.useState(false);
  const [isEng, setIsEng] = React.useState(true);

  const projectsEnglish: projectType[] = [
    {
      name: "Portfolio Website",
      desc: "A personal portfolio to showcase my work",
      image: PortfolioImage,
      link: "https://github.com/atharvbhasme/atharv-bhasme-dev",
      technologies: ["React", "CSS", "TypeScript"],
    },
  ];

  const projectsMarathi: projectType[] = [
    {
      name: "माझी कामाची वेबसाईट",
      desc: "ही माझी वेबसाईट आहे, जिथे मी माझे सगळे प्रोजेक्ट्स (केलेली कामे) दाखवले आहेत.",
      image: PortfolioImage,
      link: "https://github.com/atharvbhasme/atharv-bhasme-dev",
      technologies: ["React", "CSS", "TypeScript"],
    },
  ];

  const redirectToForm = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSeAOeMBAkQR-RupsI_dcmqvdclgVnhl4Ppmtillli2jo_nZcg/viewform",
      "_blank"
    );
  };

  const screenSize = useScreenSize();
  const isMobile = screenSize.screenWidth <= 768;

  return (
    <div className="projects-page">
      <HomeLink isEng={isEng}/>
      <div className="resume-button-home-page">
        <ThemeToggle setDarkTheme={setDarkTheme} isEng={isEng}/>
        <LanToggle setIsEng={setIsEng} isDark={darkTheme} />
        {!isMobile && (
          <CustomeButton
            height="40px"
            width="200px"
            textColor="#000"
            color="#fff"
            text={isEng ? "Download Resume" : 'बायोडेटा मिळवा'}
            onClick={() => console.log("Downloading...")}
          />
        )}
      </div>
      <h1>{isEng ? 'Projects': 'प्रकल्प'}</h1>
      <div className="project-desc">
        <p className="info">
         { isEng ? ` Here are some projects I've developed. If you'd like, we can build
          something0 similar for you.` : 'मी काही प्रोजेक्ट्स बनवले आहेत. तुम्हाला हवे असेल तर, आम्ही तुमच्यासाठीही असेच काहीतरी बनवू शकतो.'}
        </p>
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Colloborate with me" : 'माझ्यासोबत काम करा'}
          onClick={redirectToForm}
        />
      </div>
      <HorizontalDivider />
      <div className="project-lists">
        {isEng
          ? projectsEnglish.map((e) => (
              <ProjectCard
                key={e.name} // Always include a unique key in lists
                image={e.image}
                name={e.name}
                description={e.desc}
                link={e.link}
                technologies={e.technologies}
                isEng={isEng}
              />
            ))
          : projectsMarathi.map((e) => (
              <ProjectCard
                key={e.name}
                image={e.image}
                name={e.name}
                description={e.desc}
                link={e.link}
                technologies={e.technologies}
                isEng={isEng}
              />
            ))}
      </div>
    </div>
  );
};

export default Projects;
