import { motion } from "framer-motion";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/company-logo.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">

        {/* Logo + About */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col items-center md:items-start mb-4">
            <img src={logo} alt="Safar.io Logo" className="h-10 mb-2 md:mb-0 md:mr-2" />
            <span className="text-white font-bold text-xl">Safar.io</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
            Safar.io helps you book rides quickly, track drivers in real-time,
            and keep your travel history safe.
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-white font-semibold mb-4 text-lg">Stay Updated</h3>
          <p className="text-sm mb-3">
            Subscribe to our newsletter for the latest updates.
          </p>
          <form className="flex flex-col sm:flex-row items-center w-full bg-white rounded-lg overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-3 py-2 text-gray-900 focus:outline-none text-sm w-full"
            />
            <button
              type="submit"
              className="w-full sm:w-auto px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium text-sm"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div
        className="border-t border-gray-800 mt-10 py-6 text-center px-4"
      >
        <p className="text-xs sm:text-sm text-gray-500">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">Safar.io</span> | All rights reserved by{" "}
          <span className="text-blue-400">Yash Soni</span>.
        </p>
        <div className="flex justify-center space-x-5 mt-3">
          <a href="#" className="hover:text-blue-400"><FaFacebook size={18} /></a>
          <a href="#" className="hover:text-blue-400"><FaTwitter size={18} /></a>
          <a href="#" className="hover:text-blue-400"><FaInstagram size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
