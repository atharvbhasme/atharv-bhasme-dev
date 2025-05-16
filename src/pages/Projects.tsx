import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import HorizontalDivider from "../components/HorizontalDivider";
import ProjectCard from "../components/ProjectCard";
import PortfolioImage from '../../public/assets/multimedia.svg'

const Projects = () => {
  return (
    <div className="projects-page">
      <HomeLink />
      <div className="resume-button-home-page">
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Download Resume"
          onClick={() => console.log("Downloading...")}
        />
      </div>
      <h1>Projects</h1>
      <div className="project-desc">
        <p className="info">
          Here are some projects I've developed. If you'd like, we can build
          something similar for you.
        </p>
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Colloborate with me"
          onClick={() => console.log("Downloading...")}
        />
      </div>
      <HorizontalDivider />
      <div className="project-lists">
        <ProjectCard
          image={PortfolioImage}
          name="Portfolio Website"
          description="A personal portfolio to showcase my work"
          link="https://github.com/atharvbhasme/atharv-bhasme-dev"
          technologies={["React", "CSS", "TypeScript"]}
        />
      </div>
    </div>
  );
};

export default Projects;
