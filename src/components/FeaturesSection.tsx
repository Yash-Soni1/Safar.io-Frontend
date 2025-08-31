import { Car, MapPin, CreditCard, Smartphone, BarChart3, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function FeaturesSection() {
  const features = [
    {
      title: "Easy Ride Booking",
      description:
        "Book your rides in just a few taps with a smooth and intuitive interface.",
      icon: <Car className="w-7 h-7 sm:w-6 sm:h-6 text-blue-600" />,
      hoverColor: "linear-gradient(to top, rgba(59,130,255,0.5), rgba(59,130,255,0.1))",
    },
    {
      title: "Live Driver Tracking",
      description:
        "Track your driver’s location in real time with GPS-powered updates.",
      icon: <MapPin className="w-7 h-7 sm:w-6 sm:h-6 text-green-600" />,
      hoverColor: "linear-gradient(to top, rgba(34,255,94,0.5), rgba(34,255,94,0.1))",
    },
    {
      title: "Secure Payments",
      description:
        "Pay seamlessly and securely with Stripe integration and multiple options.",
      icon: <CreditCard className="w-7 h-7 sm:w-6 sm:h-6 text-purple-600" />,
      hoverColor: "linear-gradient(to top, rgba(168,85,247,0.5), rgba(168,85,247,0.1))",
    },
    {
      title: "Accept/Decline Requests",
      description:
        "Drivers can easily accept or decline ride requests on the go.",
      icon: <Smartphone className="w-7 h-7 sm:w-6 sm:h-6 text-orange-600" />,
      hoverColor: "linear-gradient(to bottom, rgba(249,115,22,0.5), rgba(249,115,22,0.1))",
    },
    {
      title: "Driver Dashboard",
      description:
        "View trips, manage rides, and analyze performance with ease.",
      icon: <BarChart3 className="w-7 h-7 sm:w-6 sm:h-6 text-red-600" />,
      hoverColor: "linear-gradient(to bottom, rgba(239,68,68,0.5), rgba(239,68,68,0.1))",
    },
    {
      title: "Earnings Tracking",
      description:
        "Keep track of daily and weekly earnings with a transparent system.",
      icon: <Wallet className="w-7 h-7 sm:w-6 sm:h-6 text-teal-600" />,
      hoverColor: "linear-gradient(to bottom, rgba(20,184,166,0.5), rgba(20,184,166,0.1))",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative z-10 py-8 sm:py-12 max-w-6xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} hoverColor={feature.hoverColor} />
      ))}
    </div>
  );
}

function Feature({
  title,
  description,
  icon,
  index,
  hoverColor,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  hoverColor: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.2 }}
      className={`flex flex-col cursor-pointer py-8 sm:py-10 relative group 
        dark:border-neutral-800 border-t sm:border-0
        ${index >= 0 && index <= 2 ? "lg:border-b" : ""} 
        ${index < 6 ? "lg:border-l" : ""}`}
    >
      {/* Hover overlay */}
      <div
        className="opacity-0 group-hover:opacity-100 transition duration-200 absolute inset-0 h-full w-full pointer-events-none"
        style={{ background: hoverColor }}
      />

      {/* Icon */}
      <div className="mb-4 relative z-10 px-20 sm:px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>

      {/* Title */}
      <div className="text-base sm:text-lg font-bold mb-2 relative z-10 px-20 sm:px-10">
        <div className="absolute left-10 sm:left-0 inset-y-0 h-6 group-hover:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover:bg-neutral-500 transition-all duration-200 origin-center" />
        <span className="group-hover:translate-x-2 transition duration-200 inline-block text-neutral-100 dark:text-neutral-900">
          {title}
        </span>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-sm text-neutral-300 dark:text-neutral-600 max-w-xs relative z-10 px-20 sm:px-10">
        {description}
      </p>
    </motion.div>
  );
}
