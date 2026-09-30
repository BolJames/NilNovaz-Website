// ICON IMPORTS
// React Icons provides the icons used in the About section.
import { FaArrowRight, FaCheckCircle, FaBullseye, FaEye, FaLightbulb } from "react-icons/fa";

// FRAMER MOTION IMPORTS
// Used for animated section entrance and card effects.
import { motion, useScroll, useTransform } from "framer-motion";

// ASSET IMPORTS
// Local image used in the About section layout.
import teamImage from "../../assets/Teams.jpeg";

// ABOUT COMPONENT
// Renders the company overview, mission, vision and values.
const About = () => {
  // Setup scroll-based motion values for future animated effects.
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
      <motion.section
        id="about"
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <p className="text-blue-600 font-extrabold text-4xl uppercase tracking-widest">
              About Us
            </p>
            <h2 className="text-[#ff0000] text-4xl lg:text-5xl font-bold mt-3">
              Building Africa's Digital Future Through Technology and Innovation
            </h2>
            <p className="text-white/90 mt-6 font-extrabold max-w-3xl mx-auto leading-8">
              NilNovaz Technologies is a technology company committed to transforming businesses, empowering individuals, and creating innovative digital solutions through software development, technology education, tech products, and global opportunities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <img
                src={teamImage}
                alt="Technology Team"
                className="rounded-3xl shadow-2xl w-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-yellow-500 text-3xl lg:text-4xl font-bold mb-6">
                Empowering Young Innovators and Entrepreneurs Through Technology
              </h3>
              <p className="text-white/90 leading-8 mb-8">
                We believe technology should create opportunities, solve real problems, and improve lives. Whether you're a startup, organization, student, or entrepreneur, NilNovaz provides innovative solutions that help you grow in today's digital world.
              </p>
              <div className="space-y-4 text-white/90">
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p>Delivering modern software solutions for businesses and organizations.</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p>Providing quality technology products and IT solutions.</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p>Equipping future innovators with practical technology skills.</p>
                </div>
                <div className="flex items-start gap-4">
                  <FaCheckCircle className="text-blue-600 mt-1" />
                  <p>Connecting people to scholarships, study abroad and career opportunities.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 mt-24">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="reference-card bg-red-500 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="reference-card__header">
              <div className="reference-card__icon w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <FaBullseye size={28} />
              </div>
              <h3 className="reference-card__title text-blue-600 text-3xl font-extrabold mb-4">Our Mission</h3>
              </div>
              <p className="reference-card__description text-white/90 leading-7">
                To provide innovative technology solutions, practical education, and global opportunities that empower and positively impact individuals, businesses, and communities.
              </p>
              <div className="reference-card__footer"><span className="reference-card__meta">Our purpose</span><span className="reference-card__cta">Mission <FaArrowRight /></span></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="reference-card bg-red-500 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="reference-card__header">
              <div className="reference-card__icon w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <FaEye size={28} />
              </div>
              <h3 className="reference-card__title text-blue-600 text-3xl font-extrabold mb-4">Our Vision</h3>
              </div>
              <p className="reference-card__description text-white/90 leading-7">
                To become a globally recognized technology company driving digital transformation, innovation, and sustainable development across Africa and beyond.
              </p>
              <div className="reference-card__footer"><span className="reference-card__meta">Our direction</span><span className="reference-card__cta">Vision <FaArrowRight /></span></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="reference-card bg-red-500 rounded-2xl p-8 shadow hover:shadow-xl transition"
            >
              <div className="reference-card__header">
              <div className="reference-card__icon w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
                <FaLightbulb size={28} />
              </div>
              <h3 className="reference-card__title text-blue-600 text-3xl font-extrabold mb-4">Our Values</h3>
              </div>
              <ul className="reference-card__description space-y-2 text-white/90">
                <li>• Innovation</li>
                <li>• Excellence</li>
                <li>• Creating Impact</li>
                <li>• Compassion</li>
                <li>• Humanity</li>
                <li>• Inclusivity</li>
                <li>• Integrity</li>
                <li>• Collaboration</li>
                <li>• Customer Success</li>
                <li>• Continuous Learning</li>
              </ul>
              <div className="reference-card__footer"><span className="reference-card__meta">How we work</span><span className="reference-card__cta">Values <FaArrowRight /></span></div>
            </motion.div>
          </div>
        </div>
      </motion.section>
  
  );
};

export default About;
