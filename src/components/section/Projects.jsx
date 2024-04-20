import sx from "./Projects.module.css";
import Card from "../elements/Card";
import controle from "../../images/2v.png";
import melipponario from "../../images/melipponario.png";
import starbuucks from "../../images/starbuucks.png";
import weather from "../../images/weather.png";

function Projects() {
  return (
    <div id="projects" className={sx.projects}>
      <h1>Projetos</h1>
      <div className={sx.cardContainer}>
        <Card
          img={controle}
          link="https://2v-estoque.vercel.app/"
          title="2V Controle de estoque"
          text="Projeto que realiza o controle de estoque. Utilizado o Firebase (privado), utilizando REACT, JS, TS, CSS"
          repo="https://github.com/LabHasar/2v-estoque"
        />
        <Card
          img={weather}
          link='https://dncweatherapp.netlify.app/'
          title="DNC Weather"
          text="Projeto que realiza o consumo de API de cep e tempo, utilizando HTML, CSS, JS"
          repo="https://github.com/RiegL/DNCweather?tab=readme-ov-file"
        />
      </div>
    </div>
  );
}

export default Projects;
