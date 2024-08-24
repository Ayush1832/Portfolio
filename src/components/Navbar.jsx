import logo from "../assets/AN logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 bg-black">
      <div className="flex flex-shrink-0 items-center">
        <img
          src={logo}
          alt="logo"
          style={{ width: "80px", height: "auto", marginLeft: "20px" }}
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-8 text-2xl text-white">
       
        <Link
          to="about-section"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400 font-light"
        >
          About Me
        </Link>
        <Link
          to="projects-section"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400 font-light"
        >
          Projects
        </Link>
        <Link
          to="experience-section"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-purple-400 font-light"
        >
          Experience
        </Link>

    
        <a
          href="https://www.linkedin.com/in/ayushh-nayak/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Ayush1832"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-600"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
