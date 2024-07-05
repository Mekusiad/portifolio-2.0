import { MdOutlineEmail } from "react-icons/md";

function Footer() {
  return (
    <footer className="flex items-center gap-1  absolute bottom-0 w-full">
      <MdOutlineEmail size={24} />
      <a href="mailto:mauro.daisuke@gmail.com">mauro.daisuke@gmail.com</a>
    </footer>
  );
}

export default Footer;
