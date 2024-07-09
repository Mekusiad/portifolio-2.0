import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-full md:pl-10">
      <section
        className="flex flex-col gap-2 md:text-start w-full
      "
      >
        <p className="text-7xl md:text-9xl -tracking-[-.4em] text-gradient font-bold text-end sm:text-center sm:text-[7rem] md:text-start md:text-[10rem] transition-all delay-75">
          Mauro
        </p>
        <p className="text-5xl md:text-7xl -tracking-[-.4em] text-gradient font-bold text-end sm:text-center  sm:text-[4rem] md:text-start md:text-[7rem] transition-all delay-75">
          Tahara
        </p>
      </section>
      <section className="w-full p-8 rounded-sm bg-opacity-60 text-end  sm:text-center md:text-start transition-all delay-75">
        <p className="text-md md:text-2xl">
          Cursando o 3° período em Análise e Desenvolvimento de Sistemas e em
          busca de seu primeiro emprego no ramo da programação.
        </p>
      </section>
      <section className="flex flex-col h-1/5 justify-around absolute right-0 top-1/2 -translate-y-1/3 px-1 bg-zinc-900 bg-opacity-60  rounded-l-lg">
        <a
          href="https://www.linkedin.com/in/mdaisuke/"
          target="_blank"
          className="hover:scale-125 hover-color"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href="https://github.com/mekusiad"
          target="_blank"
          className="hover:scale-125 hover-color"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://www.instagram.com/daisukemedeiros/"
          target="_blank"
          className="hover:scale-125 hover-color"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="mailto:mauro.daisuke@gmail.com"
          target="_blank"
          className="hover:scale-125 hover-color"
        >
          <MdOutlineEmail size={24} />
        </a>
      </section>
    </div>
  );
}

export default Home;
