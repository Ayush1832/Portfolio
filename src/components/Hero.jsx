import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.png";
import { motion } from "framer-motion";
import { FaLink } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Ayush Nayak
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Blockchain Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-dark leading-relaxed text-xl"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center lg:items-start">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src={profilePic}
              alt="Ayush Nayak"
              style={{ width: "500px", height: "auto", marginLeft: "20px" }}
            />
            <a
              href="https://drive.google.com/file/d/1jbKZ1N14q_sbRx5enQ74vBQUizg-ckJG/view?usp=sharing" 
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center px-4 py-2 bg-purple-400 text-white rounded-md shadow-md hover:bg-purple-600 ml-40"
            >
              <FaLink className="mr-2" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
