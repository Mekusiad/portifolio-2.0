import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { FaJava, FaGitAlt, FaGithub } from "react-icons/fa";

function About() {
  return (
    <div className="flex flex-col gap-5 justify-center items-start h-full p-4 sm:text-lg md:text-2xl md:justify-start md:pt-20">
      <p> Me chamo Mauro Daisuke,</p>
      <p>
        Atualmente trabalho em uma concessionária de energia, porém estou
        migrando para área de tecnologia.
      </p>
      <p>
        Curso o 3° período em Análise e Desenvolvimento de Sistemas e pretendo
        me especializar no Desenvolvimento em Backend.
      </p>
      <p>
        Ainda não possuo experiência profissional na área, por este motivo,
        procuro e elaboro alguns projetos para adquirir conhecimento e
        experiência no asssunto.
      </p>
      <div className="w-full text-st">
        <p className=" border-t border-white py-5">SKills</p>
        <div className="grid grid-cols-3 w-full gap-10 md:grid-cols-4 xl:grid-cols-10">
          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <SiJavascript size={36} />
            <p>JavaScript</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <SiReact size={36} />
            <p>ReactJS</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <SiTailwindcss size={36} />
            <p>Tailwind</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <SiNodedotjs size={36} />
            <p>NodeJS</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <SiMongodb size={36} />
            <p>MongoDB</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <FaJava size={36} />
            <p>Java</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <FaGitAlt size={36} />
            <p>Git</p>
          </div>

          <div className="flex flex-col justify-center items-center gap-2 hover-color">
            <FaGithub size={36} />
            <p>GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
