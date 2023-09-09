import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <motion.div variants={textVariant()}>
      <div className="flex flex-row flex-wrap justify-center gap-10 bg-tertiary p-5 rounded-2xl">
        {technologies.map((technology) => (
          <div
            className="w-28 h-28 bg-black-200 rounded-2xl"
            key={technology.name}
          >
            <img
              src={technology.icon}
              className="w-32 rounded-lg shadow-lg"
              alt="Avatar"
            />
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Tech, "");
