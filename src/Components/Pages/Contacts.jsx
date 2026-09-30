// ICON IMPORTS
// Icons used throughout the contact page UI.
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaTwitter,
} from "react-icons/fa";

// FRAMER MOTION IMPORTS
// Provides page section entrance animations.
import { motion } from "framer-motion";

// CONTACT COMPONENT
// Displays company contact details, social links, and a contact form.
function Contact() {
  return (
   
        <div className="relative
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
    ">
          <div className="max-w-[1600px] mx-auto px-8 lg:px-16">
            {/* Header section for contact page title and intro text. */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="text-5xl justify-center text-center  font-bold mb-4">
                Contact NilNovaz Technologies
              </h1>
              <p className="text-xl font-bold text-yellow-400 max-w-4xl mx-auto">
                We'd love to hear from you. Whether you have a project,
                partnership, or inquiry, our team is ready to help.
              </p>
            </motion.section>

            {/* Main contact section containing info cards and form. */}
            <motion.section
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12"
            >
              {/* Contact information block. */}
              <div>
                <h2 className="text-4xl font-extrabold text-pink-500 mb-8 ">
                  Get In Touch
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-5">
                    <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-extrabold text-green-500 text-lg">
                        Office
                      </h3>
                      <p className="text-red-600">
                        Juba, Custom, South Sudan 
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <FaPhoneAlt className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-extrabold text-green-500 text-lg">
                        Phone
                      </h3>
                      <p className="text-red-600">
                        +211 922 222 222
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <FaEnvelope className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-extrabold text-green-500 text-lg">
                        Email
                      </h3>
                      <p className="text-red-600">
                        nilnovaztech.26.ss@gmail.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Social links section. */}
                <div className="mt-12">
                  <h3 className="font-extrabold text-pink-500 text-4xl mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-5 text-2xl">
                    <a
                      href="https://www.facebook.com/share/19FXiiq1TU/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 transition"
                    >
                      <FaFacebook className="cursor-pointer" />
                    </a>
                    <FaLinkedin className="hover:text-blue-600 cursor-pointer transition" />
                    <FaGithub className="hover:text-blue-600 cursor-pointer transition" />
                    <FaTwitter className="hover:text-blue-600 cursor-pointer transition" />
                  </div>
                </div>
              </div>

              {/* Contact form block. */}
              <div className="bg-[#010535]/40 rounded-2xl shadow-lg p-8">
                <h2 className="text-4xl font-extrabold text-pink-500 mb-8">
                  Send Us a Message
                </h2>
               <form
  className="space-y-6"
  action="https://formspree.io/f/xzebdbvl"
  method="POST"
>
  <input
    type="text"
    name="name"
    placeholder="Full Name"
    className="w-full border-2 border-cyan-400/30 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <input
    type="email"
    name="email"
    placeholder="Email Address"
    className="w-full border-2 border-cyan-400/30 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <input
    type="text"
    name="subject"
    placeholder="Subject"
    className="w-full border-2 border-cyan-400/30 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <textarea
    name="message"
    rows="6"
    placeholder="Your Message"
    className="w-full border-2 border-cyan-400/30 rounded-xl px-5 py-3 outline-none focus:ring-2 focus:ring-blue-500"
    required
  />

  <button
    type="submit"
    className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl transition"
  >
    Send Message
  </button>
</form>
              </div>
            </motion.section>

            {/* Google Maps link section. */}
            <motion.section className="place-items-center max-w-7xl mx-auto px-6 pb-20">
              <div className="bg-red-100 h-auto rounded-2xl flex items-center justify-center">
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=NilNovaz+Technologies+Juba+South+Sudan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl bg-green-600 text-white hover:bg-blue-700 transition"
                >
                  Get Directions on Google Maps
                </a>
              </div>
            </motion.section>
          </div>
        </div>
     
  );
}

export default Contact;
