import styles from "./ProjectsStyles.module.css";
import graphicdesain from "../../assets/graphic_desain.jpg";
import uiux from "../../assets/uiux.jpg";
import Productdesain from "../../assets/Product_desain.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={graphicdesain}
          link="https://id.pinterest.com/amandafebriyani29/graphic-design/"
          h3="Graphic Designer"
        />
        <ProjectCard
          src={uiux}
          link="https://id.pinterest.com/amandafebriyani29/user-interfaceuser-experience-design/"
          h3="UI/UX Designer"
        />
        <ProjectCard
          src={Productdesain}
          link="https://id.pinterest.com/amandafebriyani29/product-design/"
          h3="Product Designer"
        />
      </div>
    </section>
  );
}

export default Projects;
