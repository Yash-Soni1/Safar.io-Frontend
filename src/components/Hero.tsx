/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  const titles = ["Ride Smarter", "Drive Safer", "Earn Better", "Travel Anywhere"];
  const [titleNumber, setTitleNumber] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="h-screen relative flex flex-col items-center justify-center text-center px-6 py-24 bg-gray-100 text-gray-900 overflow-hidden">
      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-6xl md:text-7xl font-base tracking-tight mb-6 text-blue-500"
      >
        Safar.io
      </motion.h1>

      {/* Animated Titles */}
      <span className="relative flex w-full justify-center overflow-hidden text-center h-28 md:pb-4 md:pt-1">
        {titles.map((title, index) => (
          <motion.span
            key={index}
            className="absolute font-semibold text-6xl md:text-8xl text-gray-900"
            initial={{ opacity: 0, y: "-100" }}
            transition={{ type: "spring", stiffness: 50 }}
            animate={
              titleNumber === index
                ? { y: 0, opacity: 1 }
                : { y: titleNumber > index ? -150 : 150, opacity: 0 }
            }
          >
            {title}
          </motion.span>
        ))}
      </span>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
        className="mt-6 max-w-xl text-gray-600 text-lg"
      >
        Safar.io connects riders and drivers seamlessly with real-time tracking,
        secure payments, and a smooth booking experience. Whether you want a
        quick city ride or to earn on your own schedule, Safar.io makes every
        journey simple, safe, and affordable.
      </motion.p>

      {/* Buttons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="mt-8 flex gap-4"
      >
        <motion.button
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold hover:bg-blue-600 transition"
        >
          <Link to="/sign-in">Get Started</Link>
        </motion.button>
        <motion.button
          className="px-6 py-3 rounded-xl border border-gray-600 text-gray-800 hover:text-gray-300 font-semibold hover:bg-gray-800 transition"
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
