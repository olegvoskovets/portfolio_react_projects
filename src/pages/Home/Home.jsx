import "./home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import MyFoto from "../../assets/my_foto.jpg";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <img className="my_foto" src={MyFoto} alt="" />
        <h2>Вітаю, мене звуть Олег.</h2>
        <div className="prompt">
          <p>
            Добросовісний та амбітний учень Web-розробник. Маю великий досвід
            роботи з персоналом. Шукаю роботу Web- розробника, де знадобляться
            мої сильні комунікативні навички і здатність брати на себе високий
            рівень відповідальності. Віддам перевагу компаніям, котрі в
            розробках використовують бібліотеку React
          </p>
          <LinkedInIcon />
          <EmailIcon />
          <GitHubIcon />
        </div>
      </div>
      <div className="skills">
        <h2>Skils</h2>
        <ol className="list">
          <li className="item">
            <h3>Front-End</h3>
            <span>React, Redux Toolkit, HTML, CSS, Sass</span>
          </li>
          <li className="item">
            <h3>Back-End</h3>
            <span>Node, Express, Sequelize, MySQL</span>
          </li>
          <li className="item">
            <h3>Languages</h3>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
