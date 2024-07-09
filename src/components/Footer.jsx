import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex justify-between items-center  absolute bottom-0 w-full ">
      <div className="flex  gap-1  hover-color">
        <MdOutlineEmail size={24} />
        <a href="mailto:mauro.daisuke@gmail.com">mauro.daisuke@gmail.com</a>
      </div>
      <a
        href="https://br.freepik.com/fotos-gratis/tiro-de-angulo-baixo-vertical-do-templo-senso-ji-em-toquio-japao-durante-a-noite_8028429.htm#page=2&query=fundo%20japones&position=49&from_view=keyword&track=ais_user&uuid=43dadd0d-e369-4373-98f8-e99623fc8f8e"
        className="text-[.5em]  hover-color mr-8"
        target="blank"
      >
        Imagem de wirestock no Freepik
      </a>
    </footer>
  );
}

export default Footer;
