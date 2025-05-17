import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import '../index.css'
import HorizontalDivider from "../components/HorizontalDivider";
import Experience from "../components/Experience";
import VerticalDivider from "../components/VerticalDivider";
import Skills from "../components/Skills";
import PI from '../../public/assets/circled_profile_image.png';
import ThemeToggle from "../components/ThemeToggle";
import React from "react";

const AboutPage = () => {
   const [darkTheme, setDarkTheme] = React.useState(false);

  return (
    <div className="about-page">
      <HomeLink />
      <div className="resume-button-home-page">
      <ThemeToggle setDarkTheme={setDarkTheme}/>
      </div>
      <h1>About</h1>
      <HorizontalDivider />
      <div className="personal-info">
        <img
          src={PI}
          className="profile-img"
          height={335}
          width={335}
        />
        <div className="text-button">
          <p className="info">
            I'm a passionate Full-Stack Developer who loves building dynamic,
            user-friendly applications. I thrive on solving problems, creating
            seamless experiences, and continuously expanding my skills. Always
            eager to learn and grow, I'm currently looking for new opportunities
            to contribute and innovate.
          </p>
          <CustomeButton
            height="40px"
            width="200px"
            textColor="#000"
            color="#fff"
            text="Download Resume"
            onClick={() => console.log("Downloading...")}
          />
        </div>
      </div>
      <HorizontalDivider />
      <div className="half-about-page">
        <Experience />
        <VerticalDivider />
        <Skills isDarkTheme={darkTheme}/>
      </div>
    </div>
  );
};

export default AboutPage;
