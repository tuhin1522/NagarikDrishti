import React from "react";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white pt-16 pb-10 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(0,150,255,0.25),transparent_60%)]"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 px-6 relative z-10">

        {/* Logo + Description */}
        <div>
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            NagarikDrishti
          </h2>
          <p className="text-gray-300 mt-4 leading-relaxed">
            Making your city smarter, safer and cleaner — by connecting citizens with real-time issue reporting and rapid response.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Twitter className="w-5 h-5" />
            </a>
            <a className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition">
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Report an Issue</li>
            <li className="hover:text-white transition cursor-pointer">News Feed</li>
            <li className="hover:text-white transition cursor-pointer">Emergency Contacts</li>
            <li className="hover:text-white transition cursor-pointer">Support</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>

          <div className="flex items-center gap-3 text-gray-300 mb-3">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <p>Dhaka, Bangladesh</p>
          </div>

          <div className="flex items-center gap-3 text-gray-300 mb-3">
            <Phone className="w-5 h-5 text-cyan-400" />
            <p>+880 1234 567890</p>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <Mail className="w-5 h-5 text-cyan-400" />
            <p>contact@nagarikdrishti.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-white/10 mt-14 pt-6 text-center text-gray-400 text-sm relative z-10">
        <p>
          © {new Date().getFullYear()} <span className="text-cyan-400 font-bold">NagarikDrishti</span>.  
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
