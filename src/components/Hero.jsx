import { motion } from "framer-motion";
import { styles } from "../styles";
import { Imam } from "../assets";
import Tilt from "react-tilt";
import { sosmeds } from "../constants";

const SosmedIcon = ({ link, logo, sosmed }) => {
  return (
    <Tilt>
      <a href={link}>
        <div className="bg-tertiary rounded-[20px] p-3 green-pink-gradient  flex justify-evenly items-center flex-col mt-5">
          <img src={logo} alt={sosmed} className="w-5 h-5 object-contain" />
        </div>
      </a>
    </Tilt>
  );
};

const Hero = () => {
  return (
    <section className={`relative w-full h-screen bg-gray`}>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto h-[500px] ${styles.paddingX} flex justify-center gap-5 `}
      >
        <div className="md:flex  md:mt-[400px] mt-20 ">
          <div className=" grid content-center">
            <img
              src={Imam}
              className="w-60 rounded-full shadow-lg  mt-6 "
              alt="Avatar"
            />{" "}
          </div>
          <div className="md:ms-10 grid content-center ">
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className="text-[#0052A2]">Imam</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              FULLSTACK WEB DEPELOVER
              <br className="sm:block hidden" />
            </p>
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 mt-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              <a href="https://drive.google.com/file/d/1Ze0C_YsPVsBY8yh7WK-A6KF5qFsekVFd/view?usp=sharing">
                Resume
              </a>
            </button>{" "}
            <div className=" flex flex-wrap gap-10 ">
              {sosmeds.map((sosmed, index) => (
                <SosmedIcon key={sosmed.sosmed} index={index} {...sosmed} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
