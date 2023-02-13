import ProjectItem from "../../components/ProjectItem/ProjectItem";
import "./projects.css";
import { ProjectList } from "../../helpers/projectList.js";

const Projects = () => {
  return (
    <div className="projects">
      <h1>Мої персональні проeкти</h1>
      <div className="projectList">
        {ProjectList.map((project, ind) => (
          <ProjectItem id={ind} name={project.name} image={project.image} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
