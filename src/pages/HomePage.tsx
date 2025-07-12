import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import "../index.css";
import "../fonts.css";
import { useNavigate } from "react-router-dom";
import ThemeToggle from "../components/ThemeToggle";
import HomePageSVG from "../components/HomePageSVG";
import React from "react";
import HomePageSVGDark from "../components/HomePageSVGDark";
import useScreenSize from "../hooks/useScreenSize";
import HeroText from "../components/HeroText";
import LanToggle from "../components/LanToggle";
import { onDownload } from "../utils/donwloadResume";
import { useLanguage } from "../context/LanguageContext";

const HomePage = () => {
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = React.useState(false);
  const { isEng }  = useLanguage();

  const redirectToAboutPage = () => {
    navigate("/about");
  };

  const redirectToProjects = () => {
    navigate("/projects");
  };

  const redirectToForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSeAOeMBAkQR-RupsI_dcmqvdclgVnhl4Ppmtillli2jo_nZcg/viewform', '_blank');
  };

  const englishPhrases = [
    'ATHARV BHASME',
    'FULL STACK DEVELOPER',
    'SOFTWARE ENGINEER',
  ];

  const marathiPhrases = ['अथर्व भस्मे', 'सॉफ्टवेअर अभियंता आहे' , 'फुल स्टॅक डेव्हलपर आहे'];

  const screenSize = useScreenSize();

  const isMobile = screenSize.screenWidth <= 480;

  return (
    <div className="home-page">
      <HomeLink isEng={isEng}/>
      <div className="resume-button-home-page">
        <ThemeToggle setDarkTheme={setDarkTheme} isEng={isEng}/>
        <LanToggle isDark={darkTheme}/>
       {!isMobile && <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Download Resume" : 'बायोडेटा मिळवा'}
          onClick={onDownload}
        />}
      </div>
      {!isMobile && <div className="home-line"></div>}
      <HeroText phrases={isEng ? englishPhrases: marathiPhrases} isEng={isEng}/>
      <div className="button-group">
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Know About Me": ' माझ्याबद्दल जाणून घ्या'}
          onClick={redirectToAboutPage}
        />
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Projects" : 'प्रकल्प'}
          onClick={redirectToProjects}
        />
        <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Colloborate with me" : "माझ्यासोबत काम करा"}
          onClick={redirectToForm}
        />
        {isMobile && <CustomeButton
          height="40px"
          width="200px"
          textColor="#000"
          color="#fff"
          text={isEng ? "Download Resume" : 'बायोडेटा मिळवा'}
          onClick={onDownload}
        />}
      </div>
      <div className="hero-animation">
        {darkTheme ? (
          <HomePageSVGDark screenSize={screenSize} />
        ) : (
          <HomePageSVG screenSize={screenSize} />
        )}
      </div>
    </div>
  );
};

export default HomePage;
