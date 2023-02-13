import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { Reorder } from "@mui/icons-material";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button onClick={() => setExpandNavbar(!expandNavbar)}>
          <Reorder />
        </button>
      </div>
      <div className="links">
        <Link to={"/"}>Home</Link>
        <Link to={"/projects"}>Projects</Link>
        <Link to={"/experience"}>Experience</Link>
      </div>
    </div>
  );
};

export default Navbar;
