import CustomeButton from "../components/CustomeButton";
import HomeLink from "../components/HomeLink";
import '../App.css'
import SVGComponent from "../components/SVGComponent";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate()

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
        <SVGComponent />
      </div>
    </div>
  );
};

export default HomePage;
``;
