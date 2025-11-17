import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, ThumbsUp, Tag } from "lucide-react";
import newsFeed from "../../../public/data/newsFeed.json";

// Time Ago Format
const timeAgo = (date) => {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  const intervals = [
    { label: "year", secs: 31536000 },
    { label: "month", secs: 2592000 },
    { label: "day", secs: 86400 },
    { label: "hour", secs: 3600 },
    { label: "minute", secs: 60 }
  ];
  for (let i of intervals) {
    const count = Math.floor(seconds / i.secs);
    if (count >= 1) return `${count} ${i.label}${count > 1 ? "s" : ""} ago`;
  }
  return "Just now";
};

// Severity Colors
const severityColor = {
  Low: "bg-green-500",
  Medium: "bg-yellow-500",
  High: "bg-orange-600",
  Critical: "bg-red-600"
};

// Status Colors
const statusColor = {
  reported: "bg-blue-500",
  in_progress: "bg-purple-600",
  resolved: "bg-green-600"
};

export default function NewsFeed() {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-center mb-12 
        bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text drop-shadow-lg">
        Smart City – Live Issue Feed
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {newsFeed.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="rounded-3xl overflow-hidden shadow-xl 
              bg-white/70 backdrop-blur-xl border border-white/40 
              hover:shadow-2xl cursor-pointer transition-all"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image}
                className="w-full h-64 object-cover"
                alt={item.title}
              />

              {/* Category Badge */}
              <span className="absolute top-3 left-3 bg-black/60 text-white text-sm px-3 py-1 rounded-full">
                {item.category}
              </span>

              {/* Severity Badge */}
              <span
                className={`absolute top-3 right-3 text-white text-sm px-3 py-1 rounded-full ${severityColor[item.severity]}`}
              >
                {item.severity}
              </span>
            </div>

            <div className="p-6 space-y-4">
              {/* User + Status */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={item.user.profile_image}
                    className="w-12 h-12 rounded-full border-2 border-white shadow"
                  />
                  <div>
                    <p className="font-semibold text-gray-800">{item.user.name}</p>
                    <p className="text-xs text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {timeAgo(item.reported_at)}
                    </p>
                  </div>
                </div>

                {/* Status */}
                <span
                  className={`text-white text-xs px-3 py-1 rounded-full ${statusColor[item.status]}`}
                >
                  {item.status.replace("_", " ")}
                </span>
              </div>

              <h2 className="text-xl font-bold text-gray-900">{item.title}</h2>

              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                {item.description}
              </p>

              {/* Location */}
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <MapPin className="w-5 h-5" />
                {item.location.name}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full flex items-center gap-1"
                  >
                    <Tag size={12} /> {tag}
                  </span>
                ))}
              </div>

              {/* Footer: Votes + Comments */}
              <div className="flex justify-between items-center pt-3">
                <div className="flex items-center gap-2 text-gray-700 font-semibold">
                  <ThumbsUp className="w-5 h-5" /> {item.votes}
                </div>
                <p className="text-sm text-gray-600">
                  {item.comments.length} comments
                </p>
              </div>

              <button className="w-full mt-3 bg-gradient-to-r from-blue-500 to-purple-600 
                text-white py-2 rounded-xl shadow hover:opacity-90 transition">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
