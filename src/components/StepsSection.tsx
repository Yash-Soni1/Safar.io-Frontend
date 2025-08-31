// src/components/StepsSection.tsx
import { motion } from "framer-motion";
import { FaUserPlus, FaCar, FaLocationArrow, FaHistory } from "react-icons/fa";

export default function StepsSection() {
  const steps = [
    {
      icon: <FaUserPlus className="text-blue-400 text-3xl" />,
      title: "Sign Up",
      description: "Create your free account in minutes.",
    },
    {
      icon: <FaCar className="text-blue-400 text-3xl" />,
      title: "Book a Ride",
      description: "Choose your destination and confirm your booking.",
    },
    {
      icon: <FaLocationArrow className="text-blue-400 text-3xl" />,
      title: "Track Driver",
      description: "See your driver’s location in real-time.",
    },
    {
      icon: <FaHistory className="text-blue-400 text-3xl" />,
      title: "Ride History",
      description: "Check all your past trips in one place.",
    },
  ];

  // Parent container animation
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Child animation (each card)
  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 60 } },
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Animated heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-12"
        >
          How it <span className="text-blue-400">Works</span>
        </motion.h2>

        {/* Cards with stagger animation */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-4 gap-8"
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="bg-gray-900 p-6 rounded-2xl cursor-pointer shadow-xl hover:shadow-blue-500/50 transition"

            >
              <div className="flex justify-center mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-gray-400">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
