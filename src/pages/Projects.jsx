import { FaInfoCircle, FaGithub, FaEye } from "react-icons/fa";

function Projects() {
  return (
    <div className="flex flex-col justify-evenly items-center h-full ">
      <div className="grid grid-cols-1 gap-10 px-8 py-20 sm:grid-cols-2 md:grid-cols-3">
        <div className="group rounded-md w-full h-fit text-center relative shadow-hover overflow-hidden">
          <img
            src={"https://picsum.photos/500/300"}
            alt=""
            className="h-2/3 rounded-tl rounded-tr"
          />
          <div className="hidden bg-black bg-opacity-15 text-end gap-2 absolute right-0 top-0 p-2 group-hover:flex">
            <a href="#" className="hover-color h-fit">
              <FaInfoCircle size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaEye size={24} />
            </a>
          </div>
          <p className="py-3  bg-lime-800 overflow-hidden">Título do projeto</p>
        </div>

        <div className="group rounded-md w-full h-fit text-center relative shadow-hover overflow-hidden">
          <img
            src={"https://picsum.photos/500/300"}
            alt=""
            className="h-2/3 rounded-tl rounded-tr"
          />
          <div className="hidden bg-black bg-opacity-15 text-end gap-2 absolute right-0 top-0 p-2 group-hover:flex">
            <a href="#" className="hover-color h-fit">
              <FaInfoCircle size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaEye size={24} />
            </a>
          </div>
          <p className="py-3  bg-lime-800 overflow-hidden">Título do projeto</p>
        </div>

        <div className="group rounded-md w-full h-fit text-center relative shadow-hover overflow-hidden">
          <img
            src={"https://picsum.photos/500/300"}
            alt=""
            className="h-2/3 rounded-tl rounded-tr"
          />
          <div className="hidden bg-black bg-opacity-15 text-end gap-2 absolute right-0 top-0 p-2 group-hover:flex">
            <a href="#" className="hover-color h-fit">
              <FaInfoCircle size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaGithub size={24} />
            </a>
            <a href="#" className="hover-color h-fit">
              <FaEye size={24} />
            </a>
          </div>
          <p className="py-3  bg-lime-800 overflow-hidden">Título do projeto</p>
        </div>
      </div>
    </div>
  );
}

export default Projects;
