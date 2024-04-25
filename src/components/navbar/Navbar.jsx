import Sidebar from "../sidebar/Sidebar";
import "./Navbar.scss";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <div className="navbar">
      {/* sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Code by Ikram
        </motion.span>
        {/* <div className="social">
          <a
            href="https://www.linkedin.com/in/ikram-mughal-4a6378259/"
            target="blank"
          >
            <img src="/linkedIn.png" alt="" />
          </a>
          <a href="https://www.instagram.com/em_ikram09/" target="blank">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/ikram.charmingb0y" target="blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.youtube.com/watch?v=MAlSjtxy5ak" target="blank">
            <img src="/youtube.png" alt="" />
          </a>
        </div> */}
        <div className="navright">
          <p>CodeSculpt Crafting Digital Masterpieces</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
