import "./home.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
const Home = () => {
  return (
    <div className="home">
      <div className="about">
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
        <h1>Skils</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React, Redux Toolkit, HTML, CSS, Sass</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>Node, Express, Sequelize, MySQL</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Home;
