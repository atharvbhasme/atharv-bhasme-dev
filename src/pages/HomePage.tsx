import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import '../index.css'
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import HomePageSVG from "../components/HomePageSVG";
import React from "react";
import HomePageSVGDark from "../components/HomePageSVGDark";

const HomePage = () => {
  const navigate = useNavigate()
  const [darkTheme, setDarkTheme] = React.useState(false);

  const redirectToAboutPage = () => {
    navigate('/about')
  }

  const redirectToProjects = () => {
    navigate('/projects')
  }

  return (
    <div className="home-page">
      <HomeLink />
      <div className="resume-button-home-page">
      <ThemeToggle setDarkTheme={setDarkTheme}/>
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Download Resume"
          onClick={() => console.log("Downloading...")}
        />
      </div>
      <div className="Hero-text-home-page">
        <h1 className="hero-heading">HI, I AM ATHARV BHASME</h1>
      </div>
      <div className="button-group">
      <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Know About Me"
          onClick={redirectToAboutPage}
        />
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Projects"
          onClick={redirectToProjects}
        />
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text="Colloborate with me"
          onClick={() => console.log("Downloading...")}
        />
      </div>
      <div className="hero-animation">
        {darkTheme ? <HomePageSVGDark /> : <HomePageSVG />}
      </div>
    </div>
  );
};

export default HomePage;
