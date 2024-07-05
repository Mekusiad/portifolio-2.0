import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <section className=" text-center">
        <p className="text-7xl -tracking-[-.4em] text-gradient">Mauro</p>
        <p className="text-4xl -tracking-[-.4em] text-gradient font-bold">
          Daisuke
        </p>
      </section>
      <section className="flex flex-col justify-between gap-2 absolute right-0 top-1/2 p-2 bg-lime-600 rounded-l-lg">
        <a href="#linkedin">
          <FaLinkedin size={24} />
        </a>
        <a href="#github">
          <FaGithub size={24} />
        </a>
        <a href="#instagram">
          <FaInstagram size={24} />
        </a>
      </section>
    </div>
  );
}

export default Home;
