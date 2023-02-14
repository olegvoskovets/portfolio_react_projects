import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/projectList.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./projectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h2>{project.name}</h2>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.webSite}>
        <img src={project.image} />
      </a>
      <a href={project.github}>
        <GitHubIcon className="a_hover" />
      </a>
    </div>
  );
};

export default ProjectDisplay;
