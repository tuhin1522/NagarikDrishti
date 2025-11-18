import React, { useState } from "react";
import { motion } from "framer-motion";
import { User, Mail, Lock, MapPin, Camera } from "lucide-react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const [location, setLocation] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registering ${name} with ${email}`);
  };

  return (
    <div className="relative w-full h-screen bg-gradient-to-tr from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center overflow-hidden">
      
      {/* Background Neon Circles */}
      <div className="absolute w-[800px] h-[800px] bg-purple-700/30 rounded-full top-[-200px] left-[-200px] animate-pulse-slow"></div>
      <div className="absolute w-[700px] h-[700px] bg-blue-500/20 rounded-full bottom-[-150px] right-[-100px] animate-pulse-slow"></div>

      {/* Glass Register Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md p-10 bg-black/40 backdrop-blur-lg rounded-3xl shadow-2xl border border-purple-500/30 flex flex-col justify-center"
      >
        <h2 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-xl">
          Create Your Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-5">
          {/* Name */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <User className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-300/70" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-black/30 text-white placeholder-purple-200/70 border border-purple-600/50 focus:border-purple-400 focus:outline-none transition"
              required
            />
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
            initial={{ x: -50, opacity: 0 }}
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

          {/* Photo URL */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <Camera className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-300/70" />
            <input
              type="text"
              placeholder="Profile Photo URL"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-black/30 text-white placeholder-purple-200/70 border border-purple-600/50 focus:border-purple-400 focus:outline-none transition"
            />
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            <MapPin className="absolute top-1/2 left-3 -translate-y-1/2 text-purple-300/70" />
            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full pl-10 py-3 rounded-xl bg-black/30 text-white placeholder-purple-200/70 border border-purple-600/50 focus:border-purple-400 focus:outline-none transition"
              required
            />
          </motion.div>

          {/* Register Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-500 text-white font-bold shadow-lg hover:shadow-xl transition"
            type="submit"
          >
            Register
          </motion.button>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center text-purple-200 mt-6 text-sm"
        >
          Already have an account?{" "}
          <span className="text-blue-400 cursor-pointer hover:underline">
            Log In
          </span>
        </motion.div>
      </motion.div>
    </div>
  );
}
