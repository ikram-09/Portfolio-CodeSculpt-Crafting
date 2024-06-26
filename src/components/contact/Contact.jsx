import React, { useRef } from "react";
import "./contact.scss";
import { motion, useScroll, useTransform } from "framer-motion";
import arrowImg from "../../../public/arrow.png";
import heroImg from "../../../public/20220912_220101 (1).png";

const Contact = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const xBg = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
  return (
    <div className="contact" ref={ref}>
      <div className="main-container">
        <div className="c-heading">
          <h1>
            <img src={heroImg} alt="" /> Let's work together
          </h1>
        </div>
        <div className="get-touch">
          <motion.button style={{ x: xBg }}>GET IN TOUCH</motion.button>
        </div>
        <div className="arrow-img">
          <img src={arrowImg} alt="" />
        </div>
      </div>
      <div className="contact-here">
        <div className="mail">
          <p>im2156028@gmail.com</p>
        </div>
        <div className="mail">
          <p>+92 3182156028</p>
        </div>
      </div>
      <div className="end-info">
        <div className="version">
          <span>
            <p>Version</p>
            <h3>2024 © Edition</h3>
          </span>
          <span>
            <p>Version</p>
            <h3>11:49 PM GMT+2</h3>
          </span>
        </div>
        <div className="social">
          <div className="social-heading">
            <span>Social</span>
          </div>
          <div className="social-link">
            <a href="">Code by ikram</a>
            <a href="https://www.linkedin.com/in/ikram-mughal-4a6378259/" target="blank">LinkedIn</a>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;