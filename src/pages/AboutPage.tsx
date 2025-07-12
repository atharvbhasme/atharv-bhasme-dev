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
import LanToggle from "../components/LanToggle";
import { onDownload } from "../utils/donwloadResume";
import { useLanguage } from "../context/LanguageContext";


const AboutPage = () => {
   const [darkTheme, setDarkTheme] = React.useState(false);
   const { isEng }  = useLanguage();

  return (
    <div className="about-page">
      <HomeLink isEng={isEng}/>
      <div className="resume-button-home-page">
      <ThemeToggle setDarkTheme={setDarkTheme} isEng={isEng}/>
      <LanToggle isDark={darkTheme}/>
      </div>
      <h1>{isEng ? 'About' : 'माझ्याविषयी'}</h1>
      <HorizontalDivider />
      <div className="personal-info">
        <img
          src={PI}
          className="profile-img"
          height={335}
          width={335}
        />
        <div className="text-button">
          <p className="info">{isEng ? ` I'm a passionate Full-Stack Developer who loves building dynamic,
            user-friendly applications. I thrive on solving problems, creating
            seamless experiences, and continuously expanding my skills. Always
            eager to learn and grow, I'm currently looking for new opportunities
            to contribute and innovate.`: `मी एक फुल-स्टॅक डेव्हलपर आहे, ज्याला चांगली आणि वापरायला सोपी ॲप्स (ॲप्लिकेशन्स) बनवायला खूप आवडतात. मला समस्या सोडवण्यात, काम व्यवस्थित करण्यात आणि रोज काहीतरी नवीन शिकण्यात मजा येते. मी आता अशा नवीन कामाच्या शोधात आहे, जिथे मला काहीतरी चांगलं करायला मिळेल आणि नवीन गोष्टी शिकायला मिळतील.`}
          </p>
          <CustomeButton
            height="40px"
            width="200px"
            textColor="#000"
            color="#fff"
            text="Download Resume"
            onClick={onDownload}
          />
        </div>
      </div>
      <HorizontalDivider />
      <div className="half-about-page">
        <Experience isEng={isEng}/>
        <VerticalDivider />
        <Skills isDarkTheme={darkTheme} isEng={isEng}/>
      </div>
    </div>
  );
};

export default AboutPage;
