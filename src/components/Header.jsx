function Header() {
  return (
    <div className="flex justify-around p-4 text-xl absolute top-0 w-full">
      <a href="#home" className="hover:scale-105 ">
        Home
      </a>
      <a href="#about" className="hover:scale-105">
        About
      </a>
      <a href="#projects" className="hover:scale-105">
        Projects
      </a>
    </div>
  );
}

export default Header;
