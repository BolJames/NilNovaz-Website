import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function NavLinkItem({ link }) {
  const location = useLocation();

  const active = location.pathname === link.path;

  return (
    <motion.li
      whileHover={{
        y: -3,
      }}
      transition={{
        type: "spring",
        stiffness: 250,
      }}
    >
      <Link
        to={link.path}
        className={`relative px-1 py-2 font-medium transition duration-300 ${
          active
            ? "text-[#FBFC13]"
            : "text-white hover:text-[#FBFC13]"
        }`}
      >
        {link.name}

        {active && (
          <motion.div
            layoutId="navbar-indicator"
            className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#FBFC13]"
          />
        )}
      </Link>
    </motion.li>
  );
}

export default NavLinkItem;