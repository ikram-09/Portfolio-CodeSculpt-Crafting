import React from "react";
import "./Hero.scss";
import { motion } from "framer-motion";
import { FaPlus } from "react-icons/fa6";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollBtton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 30,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>IKRAM DEV</motion.h2>
          <motion.h1 variants={textVariants}>Front-end Developer.</motion.h1>
          <motion.div className="buttons" variant={textVariants}>
            <motion.button variants={textVariants}>
              Contact me
              <FaPlus className="FaPlus" />
            </motion.button>
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollBtton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContact"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Unlocking Potential Through Code Mastery
      </motion.div>
      <div className="imgContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
