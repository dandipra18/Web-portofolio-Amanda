import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/amanda.jpg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import pinterestLight from "../../assets/pinterest-light.svg";
import pinterestDark from "../../assets/pinterest-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/Resume.pdf";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const pintersetIcon = theme === "light" ? pinterestLight : pinterestDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          AMANDA
          <br />
          FEBRIYANI
        </h1>
        <h2>DESAINER</h2>
        <span>
          <a href="https://id.pinterest.com/amandafebriyani29/" target="_blank">
            <img src={pintersetIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/Carletta23" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/amanda-febriyani-8725251a9/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern designs for commercial
          businesses.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
