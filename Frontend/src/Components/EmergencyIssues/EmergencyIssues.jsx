import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import emergencyIssues from "../../../public/data/emergency_issues.json"; 

export default function EmergencyIssues() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? emergencyIssues.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === emergencyIssues.length - 1 ? 0 : prev + 1));

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 relative select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-300"
        >
          <img
            src={emergencyIssues[index].image}
            alt={emergencyIssues[index].title}
            className="w-full h-[500px] object-cover brightness-75" 

          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent p-8 flex flex-col justify-end">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white drop-shadow-lg mb-2">
              {emergencyIssues[index].title}
            </h2>
            <p className="text-white text-base md:text-lg drop-shadow-md mb-3">
              {emergencyIssues[index].description}
            </p>
            <div className="flex items-center gap-2 text-yellow-300 font-semibold">
              <MapPin className="w-5 h-5" />
              {emergencyIssues[index].location}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition transform hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </motion.div>
      </AnimatePresence>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4 space-x-2">
        {emergencyIssues.map((_, idx) => (
          <span
            key={idx}
            onClick={() => setIndex(idx)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              idx === index ? "bg-white scale-125" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
