import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[oklch(25.7%_0.09_281.288)] text-gray-300 mt-1">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-16 py-16">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}
          <div>

            <h2 className="text-4xl font-extrabold text-blue-600">
              NilNovaz
            </h2>

            <span className="text-red-400 font-extrabold text-4xl ">
              Technologies
            </span>

            <p className="mt-5 leading-7 text-gray-400">
              Building innovative software solutions, delivering technology
              products, empowering future tech professionals, and connecting
              people to global opportunities.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaGithub />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-slate-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaXTwitter />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-extrabold text-pink-400 mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4">

              <li>
                <a href="#home" className="hover:text-blue-500  transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-blue-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>

              <li>
                <a href="#products" className="hover:text-blue-500 transition">
                  Products
                </a>
              </li>

              <li>
                <a href="#education" className="hover:text-blue-500 transition">
                  Education
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-extrabold text-pink-400 mb-6">
              Our Services
            </h3>

            <ul className="space-y-4">

              <li>Software Development</li>

              <li>Tech Products</li>

              <li>Tech Education</li>

              <li>Global Opportunities</li>

              <li>IT Consulting</li>

              <li>Digital Transformation</li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-extrabold text-pink-400 mb-6">
              Contact Us
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">

                <FaLocationDot className="text-blue-500 mt-1" />

                <p>
                  Juba, South Sudan <br />
                  Serving clients globally.
                </p>

              </div>

              <div className="flex gap-4">

                <FaPhone className="text-blue-500 mt-1" />

                <p>+211915159767/+2119222333666</p>

              </div>

              <div className="flex gap-4">

                <FaEnvelope className="text-blue-500 mt-1" />

                <p>nilnovaztech.26.ss@gmail.com</p>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 lg:px-16 py-6 flex flex-col md:flex-row justify-between items-center gap-4 border-t">

          <p className="text-5x1 text-center md:text-left text-pink-400">
            © {currentYear} <span className="font-semibold text-green-200">NilNovaz Technologies</span>.
            All Rights Reserved.
          </p>

          <div className="flex gap-6 text-sm text-yellow-400">

            <Link to="/privacy-policy" className="hover:text-blue-500 transition font-semibold">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions" className="hover:text-blue-500 transition font-semibold">
              Terms & Conditions
            </Link>

            <Link to="/cookie-policy" className="hover:text-blue-500 transition font-semibold">
              Cookies
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
};

export default Footer;