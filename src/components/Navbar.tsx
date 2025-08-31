// src/components/Navbar.tsx
import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import type { JSX } from "react/jsx-runtime";
import logo from "../assets/company-logo.svg";
import AuthModal from "./AuthModal";

export default function Navbar(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState<"signin" | "signup" | null>(null);

  return (
    <>
      <nav className="fixed w-full z-50 px-6 md:px-20 py-4 flex justify-between items-center bg-gray-900 shadow">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Company Logo" className="h-10" />
          <Link to="/" className="font-bold text-white text-2xl tracking-wide">
            Safar<span className="text-blue-400">.io</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <button
            onClick={() => setModalType("signin")}
            className="px-6 py-2 rounded-md bg-transparent border border-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
          >
            Sign In
          </button>
          <button
            onClick={() => setModalType("signup")}
            className="px-6 py-2 rounded-md bg-transparent border border-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center py-6 gap-4 md:hidden shadow-lg">
            <button
              onClick={() => {
                setModalType("signin");
                setMenuOpen(false);
              }}
              className="px-6 py-2 w-40 text-center rounded-md bg-transparent border border-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setModalType("signup");
                setMenuOpen(false);
              }}
              className="px-6 py-2 w-40 text-center rounded-md bg-transparent border border-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
            >
              Sign Up
            </button>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      {modalType && (
        <AuthModal
          isOpen={!!modalType}
          type={modalType}
          onClose={() => setModalType(null)}
        />
      )}
    </>
  );
}
