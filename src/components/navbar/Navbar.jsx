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
        <div className="navright ">
          <p className="btn-shine">CodeSculpt Crafting Digital Masterpieces</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
