import { useNavigate } from "react-router-dom";
import "./projectItem.css";

const ProjectItem = ({ image, name, id }) => {
  const navigate = useNavigate();
  return (
    <div
      className="projectItem"
      onClick={() => {
        navigate("/project/" + id);
      }}
    >
      <div className="bgImage" style={{ backgroundImage: `url(${image})` }} />
      <h1>{name}</h1>
    </div>
  );
};

export default ProjectItem;
