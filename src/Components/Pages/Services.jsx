// ICON IMPORTS
// React Icons provides the icons used for each service card.
import { FaCode, FaLaptopCode, FaGraduationCap, FaGlobe, FaArrowRight } from "react-icons/fa";
 import { useNavigate } from "react-router-dom";
// FRAMER MOTION IMPORTS
// Used for scroll-triggered animations and motion effects.
import { motion, useScroll, useTransform } from "framer-motion";

// SERVICES DATA
// Each object defines one service card rendered in the Services section.
const services = [
  {
    id: 1,
    title: "Software Development",
    icon: <FaCode size={30} />,
    description:
      "We build modern, scalable and secure software solutions for startups, businesses and organizations.",
      path: "/services/software-development"
  },
  {
    id: 2,
    title: "Tech Products",
    icon: <FaLaptopCode size={30} />,
    description:
      "Providing quality technology products, stationaries and digital solutions for individuals, schools and businesses.",
    path:"/products"
    },
  {
    id: 3,
    title: "Tech Education",
    icon: <FaGraduationCap size={30} />,
    description:
      "Empowering learners with practical technology skills through training, workshops and mentorship.",
    path : "/Education"
    },
  {
    id: 4,
    title: "Global Opportunities",
    icon: <FaGlobe size={30} />,
    description:
      "Helping students and professionals access international education, scholarships and career opportunities.",
    path: "/opportunities/careers"
    },
  {
    id: 5,
    title: "Media and Studios",
    icon: <FaGlobe size={30} />,
    description:
      "Content creation for societal impact and empowering young people with media passions.",

    },
];

// PARENT ANIMATION VARIANTS
// Controls how child cards stagger into view.
const containerVariants = {// Defines the animation states for the container of service cards.
  hidden: {},// No initial animation for the container itself.
  visible: {// When the container is visible, stagger the entrance of child cards.
    transition: {// Stagger the entrance of child cards with a delay between each.
      staggerChildren: 0.18,// Delay between each child card's entrance animation.
      delayChildren: 0.15,// Initial delay before the first child card animates in.
    },
  },
};

// CARD ANIMATION VARIANTS
// Defines entrance animation for each card.
const cardVariants = {// Defines the animation states for each individual service card.
  hidden: {// Initial state of the card before it animates into view.
    opacity: 0,// Card is fully transparent.
    y: 80,// Card is positioned 80px below its final position.
    scale: 0.96,// Card is slightly scaled down to 96% of its final size.
  },
  visible: {// Final state of the card when it animates into view.
    opacity: 1,// Card is fully opaque.
    y: 0,//Card is at its final vertical position.
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// SERVICES COMPONENT
// Renders the Services section with animated cards.
const Services = () => {

    const navigate = useNavigate();
  // Use scroll progress to create motion values if needed later.
  //const { scrollYProgress } = useScroll();
  //const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  //const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
   
      <motion.section
        id="services"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.15 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
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
        <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }} // Animate the section title and description into view when scrolled into viewport.
            viewport={{ once: true }}// Ensure the animation only happens once when the section first enters the viewport.
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-center mb-20">
              <p className="text-blue-600 text-5xl font-extrabold uppercase tracking-widest">
                Our Services
              </p>
              <h2 className="text-[#ff0000] text-4xl font-extrabold mt-3">
                Innovative Solutions For Everyone
              </h2>
              <p className="text-white/90 mt-5 font-extrabold max-w-3xl mx-auto">
                NilNovaz Technologies delivers innovative digital solutions,
                technology products, education and global opportunities that
                help individuals, businesses and organizations grow.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid gap-5 md:grid-cols-2 xl:grid-cols-5"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"  // Animate the service cards into view with staggered entrance when the section is scrolled into viewport.
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.03 }} // Animate the card to lift up and slightly scale when hovered over.
                transition={{ type: "spring", // Use spring physics for a natural hover effect.
                  //spring physics parameters for hover effect meaning the card will lift up and scale smoothly when hovered over.
                  stiffness: 250, // How stiff the spring is. Higher values make the animation snappier.
                  damping: 18 }} // How much the spring resists oscillation. Higher values make the animation settle faster.

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
                  whileHover={{ rotate: 360, scale: 1.1 }}// Animate the icon to rotate and scale up when hovered over.
                  transition={{ duration: 0.8 }}
                  className="reference-card__icon w-16 h-16 rounded-xl bg-red-600 text-cyan-400 flex items-center justify-center mb-6"
                >
                  {service.icon}
                </motion.div>

                <h3 className="reference-card__title text-2xl font-extrabold text-green-400 mb-4">
                  {service.title}
                </h3>
                </div>

                <p className="reference-card__description text-white/90 leading-7 flex-grow">
                  {service.description}
                </p>

                <div className="reference-card__footer">
                <span className="reference-card__meta">Explore service</span>
                <motion.button
                onClick={() => navigate(service.path)}
                  whileHover={{ x: 8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="
                    mt-8
                    flex
                    items-center
                    gap-2
                    font-semibold
                    text-cyan-400
                    hover:text-[#FBFC13]
                  "
                >
                  Learn More
                  <FaArrowRight />
                </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

  );
};

export default Services;
