import { useRef } from "react";
import "./parallax.scss";
import {motion, useScroll, useTransform} from 'framer-motion'

const Parallax = ({ type }) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset: ['start end ', 'end start']
  })

  const yBg = useTransform  (scrollYProgress, [0,1], ["0%", "200%"])
  const planet = useTransform  (scrollYProgress, [0,1], ["0%", "20%"])
  const star = useTransform  (scrollYProgress, [0,1], ["20%", "0%"])

  const sliderVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: "-220%",
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 100,
      },
    },
  };

  return (
    <div
      className="parallax"
      ref={ref}
      style={{
        background:
          type === "services"
            ? "linear-gradient(180deg, rgb(49 49 49), rgb(0 0 0))"
            : "linear-gradient(180deg, rgb(0 0 0), rgb(49 49 49))",
      }}
    >
      <motion.h1 style={{y: yBg}}   variants={sliderVariants}
        initial="initial"
        animate="animate">{type === "services" ? "what we do?" : "what we did"}</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div className="planets" style={{x: planet}}></motion.div>
      <motion.div className="stars" style={{x: star}}></motion.div>
    </div>
  );
};

export default Parallax;
