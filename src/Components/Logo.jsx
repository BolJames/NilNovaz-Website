import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import LogoImage from "../assets/Logo.jpeg";

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-3">
      <motion.img
        src={LogoImage}
        alt="NilNovaz Technologies"
        className="w-25 h-14 rounded-2x1 shadow-lg  hover :scale-0.2 shadow-blue-200"
      
      />

      <div>
        
      </div>
    </Link>
  );
}

export default Logo;