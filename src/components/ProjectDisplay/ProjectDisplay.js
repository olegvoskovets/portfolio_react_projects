import { useParams } from "react-router-dom";
import { ProjectList } from "../../helpers/projectList.js";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./projectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <img src={project.image} />
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
