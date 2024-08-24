import Lottie from "lottie-react";
import blockchainAnimation from "../assets/animation.json";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about-section" className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h1>
      <div className="flex flex-wrap ">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <Lottie
              animationData={blockchainAnimation}
              loop={true}
              className="w-full max-w-md"
            />
          </div>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 200 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:flex lg:items-center lg:p-8"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="text-xl my-2 max-w-xl py-6 leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
