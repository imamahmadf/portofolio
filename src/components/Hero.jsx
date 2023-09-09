import { motion } from "framer-motion";
import { styles } from "../styles";
import { Imam } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen bg-gray`}>
      <div
        className={` inset-0 top-[120px]  max-w-7xl mx-auto h-[500px] ${styles.paddingX} flex justify-center gap-5 `}
      >
        <div className="md:flex  md:mt-[400px] mt-20">
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
            </button>
          </div>
        </div>
      </div>

      {/* Tombol yang akan ditambahkan */}
      {/* <div className="absolute bottom-10 w-full bg-black flex justify-center">
        <button
          type="button"
          className="inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg"
          style={{ backgroundColor: "#c13584" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        </button>
      </div> */}
    </section>
  );
};

export default Hero;
