import logo from "../assets/AN logo.png"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



const Navbar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" style={{ width: '80px', height: 'auto',marginLeft: '20px' }}/>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin />
        <FaGithub />
    </div>
  </nav>
};

export default Navbar;
