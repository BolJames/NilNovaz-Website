// ICON IMPORTS
// Icons used for the Education page program cards.
import {
  FaLaptopCode,
  FaRobot,
  FaCloud,
  FaShieldAlt,
  FaUsers,
  FaCertificate,
  FaArrowRight,
  FaLanguage,
} from "react-icons/fa";

// FRAMER MOTION IMPORTS
// Provides animation utilities for the page.
import { motion, scale, useScroll, useTransform } from "framer-motion";

import { useNavigate } from "react-router-dom";

// PROGRAM DATA
// Defines each education program displayed in the grid.
const programs = [
  {
    id: 1,
    title: "Web Development",
    icon: <FaLaptopCode size={30} />,
    description:
      "Learn HTML, CSS, JavaScript, React, Node.js, databases, and full-stack development.",
  },
  {
    id: 2,
    title: "Artificial Intelligence",
    icon: <FaRobot size={30} />,
    description:
      "Practical AI, machine learning, prompt engineering, and modern AI tools.",
  },
  {
    id: 3,
    title: "Cloud Computing",
    icon: <FaCloud size={30} />,
    description:
      "Cloud fundamentals, deployment, DevOps, and modern cloud platforms.",
  },
  {
    id: 4,
    title: "Cybersecurity",
    icon: <FaShieldAlt size={30} />,
    description:
      "Protect systems and networks through ethical hacking and cybersecurity fundamentals.",
  },
  {
    id: 5,
    title: "Career Mentorship",
    icon: <FaUsers size={30} />,
    description:
      "Portfolio reviews, internship preparation, interview coaching, and career guidance.",
  },
  {
    id: 6,
    title: "Professional Certification",
    icon: <FaCertificate size={30} />,
    description:
      "Prepare for globally recognized technology certifications and industry credentials.",
  },
  {
    id: 7,
    title: "Basic Certification",
    icon: <FaCertificate size={30} />,
    description:
      "Build foundation in the fundamentals of basic computer skills.",
  },

{
    id: 8,
    title: "Bussiness Certification",
    icon: <FaCertificate size={30} />,
    description:
      "Learn the fundamentals of business and entrepreneurship to start your own business.",
  },



  {
    id: 9,
    title: "IT Support Certification",
    icon: <FaCertificate size={30} />,
    description:
      "Learn the fundamentals of IT support and troubleshooting to start your career in IT.",
  },



  {
    id: 10,
    title: "Programming Certification",
    icon: <FaLaptopCode size={30} />,
    description:
      "Build foundation in the fundamentals of programming and software development.",
  },

];

// ANIMATION VARIANTS
// Controls the staggered entrance of program cards.
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.15,
    },
  },
};

// CARD ANIMATION VARIANTS
// Defines how each program card animates into view.
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// EDUCATION COMPONENT
// Displays the education programs and learning offerings.
const Education = () => {
  const navigate = useNavigate ();
  // Setup scroll-based motion values for future use.
  //const { scrollYProgress } = useScroll();
  //const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  //const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return ( 
   
        <motion.section
          id="education"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
    relative
    overflow-hidden
    border
    border-cyan-400/30
    bg-[#010535]/40
    backdrop-blur-xl
    shadow-[0_0_30px_rgba(59,130,246,.4)]
    transition-all
    duration-500
    hover:border-[#FBFC13]/70
    hover:shadow-[0_0_50px_rgba(251,252,19,.5)]
    pt-20
    pb-24
    "
        >
          
            {/* Page heading section. */}
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-center mb-20"
            >
              <div className="text-center mb-16">
                <p className="text-blue-600 text-3xl font-extrabold uppercase tracking-wider">
                  Welcome to NilNovaz Technologies Education Section
                </p>
                <h2 className="text-[#ff0000] text-4xl font-bold mt-3">
                  Learn Skills That Shape the Future
                </h2>
                <p className="text-white/90 font-extrabold max-w-3xl mx-auto mt-5">
                  NilNovaz Technologies equips students and professionals with
                  practical, industry-relevant skills through expert-led training,
                  mentorship, and career-focused learning programs. through our Nil2Academy Platform , we equip students 
                 and professionals with industrial oriented courses that make you competitive in your fields and build
                 projects that solve real world problems which require technical skills. 
                </p>
              </div>
            </motion.div>

            <div className="text-yellow-400 text-4x1 text-center font-extrabold mb-5">
             <p>Our Courses and Certifications</p>
          
            {/* Education program cards grid. */}
            <motion.div
              className=" grid gap-5 md:grid-cols-2 xl:grid-cols-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
            
              {programs.map((program) => (
                <motion.div
                  key={program.id}
                  variants={cardVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.03,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 18,
                  }}
                  className="reference-card
                    bg-white/10
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                     p-8
                     flex
                    flex-col
                    h-full
                    shadow-lg
                    hover:border-cyan-400/40
                   hover:shadow-[0_0_30px_rgba(59,130,246,.35)]
                   "
                >
                  <div className="reference-card__header">
                  <motion.div
                    whileHover={{
                      rotate: 360,
                      scale: 1.15,
                    }}
                    transition={{
                      duration: 0.8,
                    }}
                    className="reference-card__icon
    w-16
    h-16
    rounded-2xl
    bg-red-600
    text-cyan-400
    flex
    items-center
    justify-center
    mb-6
    "
                  >
                    {program.icon}
                  </motion.div>
                  <h3 className="reference-card__title font-extrabold text-green-400 mb-4">
                    {program.title}
                  </h3>
                  </div>
                  <p className="reference-card__description text-white/90 leading-7 flex-grow">
                    {program.description}
                  </p>
                  <div className="reference-card__footer">
                    <span className="reference-card__meta">Learn with NilNovaz</span>
                    <span className="reference-card__cta">Explore <FaArrowRight /></span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <button className=" h-11 w-30 rounded-xl ml-30 mt-10 bg-red-600 hover:bg-blue-600 "
          onClick= {() => alert("Nil2Academy Launching soon")}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          whileHover={ {scale :2.5}}
          
          >
            Getting started
          </button>
        </motion.section>
    
  );
};

export default Education;
