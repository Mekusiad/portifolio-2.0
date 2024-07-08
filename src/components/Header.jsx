function Header() {
  // const navigator = useNavigate();

  return (
    <div className="flex justify-around  bg-zinc-900 bg-opacity-25 md:justify-start md:gap-10 p-4 text-xl absolute top-0 w-full backdrop-blur-sm z-50">
      <a href="/" className="hover:scale-105 hover:hover-color">
        Home
      </a>
      <a href="/about" className="hover:scale-105  hover:hover-color">
        About
      </a>
      <a href="/projects" className="hover:scale-105 hover:hover-color">
        Projects
      </a>
    </div>
  );
}

export default Header;
