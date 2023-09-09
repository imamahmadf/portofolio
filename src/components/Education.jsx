import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { educations } from "../constants";

const EducationCard = ({
  index,
  university,
  year,
  designation,
  description,
  company,
  image,
  major,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-[#0052A2] p-10 rounded-3xl  w-full"
  >
    <div className="mt-1">
      <div className="flex ">
        <div className="">
          <p className="text-white tracking-wider font-medium text-[18px] py-auto">
            {university}
          </p>
          <p className="text-white tracking-wider  text-[16px] py-auto">
            {major}
          </p>
          <p className="mt-1 text-secondary text-[12px]">{year}</p>
        </div>
      </div>

      <div className="mt-5 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-secondary text-[14px]">{description}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>My education</p>
          <h2 className={styles.sectionHeadText}>Educations.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {educations.map((education, index) => (
          <EducationCard key={education.name} index={index} {...education} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Education, "");
