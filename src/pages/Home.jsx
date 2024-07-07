import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

function Home() {
  return (
    <div className="flex flex-col justify-evenly items-center h-full">
      <section
        className="flex flex-col gap-2
      "
      >
        <p className="text-7xl md:text-9xl -tracking-[-.4em] text-gradient font-bold">
          Mauro
        </p>
        <p className="text-5xl md:text-7xl -tracking-[-.4em] text-gradient font-bold text-end">
          Daisuke
        </p>
      </section>
      <section className="w-full p-8 rounded-sm bg-opacity-60 text-end md:text-center ">
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
