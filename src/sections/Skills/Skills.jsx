import styles from "./SkillsStyles.module.css";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import SkillList from "../../common/SkillList";
import { useTheme } from "../../common/ThemeContext";

function Skills() {
  const { theme } = useTheme();
  const checkMarkIcon =
    theme === "light" ? checkMarkIconLight : checkMarkIconDark;

  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Creativity" />
        <SkillList src={checkMarkIcon} skill="Typography" />
        <SkillList src={checkMarkIcon} skill="Layout" />
        <SkillList src={checkMarkIcon} skill="User Experience (UX)" />
        <SkillList src={checkMarkIcon} skill="User Interface (UI)" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Graphic Design Software" />
        <SkillList src={checkMarkIcon} skill="Color Theory" />
        <SkillList src={checkMarkIcon} skill="Problem-Solving" />
        <SkillList src={checkMarkIcon} skill="Attention to Detail" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
