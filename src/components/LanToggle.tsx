import { useEffect, useState } from "react";
import elogo from "../../public/assets/english.svg";
import mlogo from "../../public/assets/marathi.svg";
import ewhite from "../../public/assets/Ewhite.svg";
import mwhite from "../../public/assets/mwhite.svg";

export interface lanToggleProps {
  setIsEng: (isEng: boolean) => void;
  isDark: boolean;
}

const LanToggle = ({ setIsEng, isDark }: lanToggleProps) => {
  const [isEng, setIsEngState] = useState(() => {
    try {
      return localStorage.getItem("lan") === "eng";
    } catch (error) {
      return false;
    }
  });

  useEffect(() => {
    if (isEng) {
      setIsEng(true);
    } else {
      setIsEng(false);
    }

    try {
      localStorage.setItem("lan", isEng ? "eng" : "marathi");
    } catch (e) {
      console.warn("Failed to save theme preference:", e);
    }
  }, [isEng, setIsEng]);

  console.log("is english on ", isEng);

  return (
    <button
      className="lan-toggle-button"
      onClick={() => setIsEngState((prev) => !prev)}
      aria-label={
        isEng ? "Switch to English Language" : "Switch to Marathi Language"
      }
      aria-pressed={isEng}
    >
      <img
        src={isDark ? (isEng ? ewhite : mwhite) : isEng ? elogo : mlogo}
        alt=""
        aria-hidden="true"
        className="theme-icon"
      />
      <p className="theme-text">{isEng ? "English" : "मराठी"}</p>
    </button>
  );
};

export default LanToggle;
