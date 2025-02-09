import * as React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { logo } from "./assets";

export default function App() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = React.useState(false);

  const handleGetStarted = () => {
    setIsExiting(true);
    setTimeout(() => {
      navigate("/auth/register");
    }, 500);
  };

  return (
    <motion.div
      initial={{ x: 0 }}
      animate={{ x: isExiting ? -window.innerWidth : 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen relative z-50 bg-transparent"
    >
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(circle at 10% 10%, #a8e6cf 10%, transparent 20%),
            radial-gradient(circle at 20% 20%, #a8e6cf 10%, transparent 20%),
            radial-gradient(circle at 30% 30%, #a8e6cf 10%, transparent 20%)
          `,
        }}
      />
      <div className="flex items-end justify-center gap-3">
        <img
          src={logo}
          className="w-20 h-20 object-contain"
          alt="task-flow_logo"
          width={100}
          height={100}
        />
        <div>
          <h3 className="text-4xl font-extrabold">TaskFlow</h3>
          <p className="text-lg italic font-semibold tracking-wider">
            ...streamline your tasks, flow through your goals
          </p>
        </div>
      </div>
      <div>
        <button
          onClick={handleGetStarted}
          className="cursor-pointer bg-[#00b894] hover:bg-[#00997b] transition-colors duration-300 text-white px-5 py-3.5 rounded-full mt-5 text-xl font-bold"
        >
          Get Started
        </button>
      </div>
    </motion.div>
  );
}
