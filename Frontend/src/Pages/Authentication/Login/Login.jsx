import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Logging in with ${email}`);
  };

  const handleForgotPassword = () => {
    alert("Redirect to forgot password workflow");
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center overflow-hidden">
      
      {/* Background Neon Circles */}
      <div className="absolute w-[800px] h-[800px] bg-purple-700/30 rounded-full top-[-200px] left-[-200px] animate-pulse-slow"></div>
      <div className="absolute w-[700px] h-[700px] bg-blue-500/20 rounded-full bottom-[-150px] right-[-100px] animate-pulse-slow"></div>

      {/* Glass Login Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-10 bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-500/30 flex flex-col justify-center"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-xl">
          Smart City Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <Mail className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-300/70" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-black/30 text-white placeholder-purple-200/70 border border-purple-600/50 focus:border-purple-400 focus:outline-none transition"
              required
            />
          </motion.div>

          {/* Password */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <Lock className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-300/70" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-black/30 text-white placeholder-purple-200/70 border border-purple-600/50 focus:border-purple-400 focus:outline-none transition"
              required
            />
          </motion.div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={handleForgotPassword}
              className="text-sm text-blue-400 hover:underline transition"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow-lg hover:shadow-xl transition"
            type="submit"
          >
            Log In
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-purple-200 mt-6 text-sm"
        >
          Don’t have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Sign Up
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
