import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <motion.h2
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 1 }}
          className="text-4xl font-semibold mb-8"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          <div>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-xl font-medium"
            >
              Veer Surendra Sai University of Technology, Burla
              <p className="text-neutral-500">2020-2024</p>
            </motion.h3>
          </div>
          <div>
            <motion.h3
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="text-xl font-medium"
            >
              Delhi Public School, Damanjodi
              <p className="text-neutral-500">2020</p>
            </motion.h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
