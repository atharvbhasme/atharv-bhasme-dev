import elogo from "../../public/assets/english.svg";
import mlogo from "../../public/assets/marathi.svg";
import ewhite from "../../public/assets/Ewhite.svg";
import mwhite from "../../public/assets/mwhite.svg";
import { useLanguage } from "../context/LanguageContext";

export interface lanToggleProps {
  setIsEng: (isEng: boolean) => void;
  isDark: boolean;
}

const LanToggle = ({ isDark }: { isDark: boolean }) => {
  const { isEng, toggleLanguage } = useLanguage();

  return (
    <button
      className="lan-toggle-button"
      onClick={toggleLanguage}
      aria-label={isEng ? "Switch to Marathi" : "Switch to English"}
      aria-pressed={isEng}
    >
      <img
        src={isDark ? (isEng ? mwhite : ewhite) : isEng ? mlogo : elogo}
        alt=""
        aria-hidden="true"
        className="theme-icon"
      />
      <p className="theme-text">{isEng ? "मराठी" : "English"}</p>
    </button>
  );
};

export default LanToggle;
