/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";

type AuthModalProps = {
  isOpen: boolean;
  type: "signin" | "signup";
  onClose: () => void;
};

export default function AuthModal({ isOpen, type, onClose }: AuthModalProps) {
  const [role, setRole] = useState<"rider" | "captain" | null>(null);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSelectRole = (selectedRole: "rider" | "captain") => {
    setRole(selectedRole);

    if (type === "signup" && selectedRole === "rider") {
      navigate("/userSignup");
    } else if (type === "signup" && selectedRole === "captain") {
      navigate("/captainSignup");
    } else if (type === "signin" && selectedRole === "rider") {
      navigate("/userSignin");
    } else if (type === "signin" && selectedRole === "captain") {
      navigate("/captainSignin");
    }

    onClose(); // close modal after redirect
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white w-96 rounded-lg shadow-lg p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          <X size={22} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          {type === "signin" ? "Sign In to Safar.io" : "Sign Up to Safar.io"}
        </h2>

        {/* Role Selection */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => handleSelectRole("rider")}
            className="px-6 py-3 rounded-md bg-blue-500 text-white font-medium hover:bg-blue-600 transition duration-200"
          >
            {type === "signin" ? "Sign in as Rider" : "Sign up as Rider"}
          </button>

          <button
            onClick={() => handleSelectRole("captain")}
            className="px-6 py-3 rounded-md bg-green-500 text-white font-medium hover:bg-green-600 transition duration-200"
          >
            {type === "signin" ? "Sign in as Captain" : "Sign up as Captain"}
          </button>
        </div>
      </div>
    </div>
  );
}
