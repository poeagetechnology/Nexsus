import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../Asset/NEXUS.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const navClass = ({ isActive }) =>
    `relative text-sm font-medium tracking-wide transition
     ${
       isActive
         ? "text-blue-600 after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600"
         : "text-slate-700 hover:text-blue-600 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 hover:after:w-full"
     }`;

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* BRAND */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="Poeage Nexus" className="w-36" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-10">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/projects" className={navClass}>Projects</NavLink>
           <NavLink to="/hire" className={navClass}>Hire</NavLink>
           <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/work" className={navClass}>How It Works</NavLink>
            <NavLink to="/jobs" className={navClass}>Jobs</NavLink>
            <NavLink to="/clients" className={navClass}>Clients</NavLink>
          </nav>

          {/* RIGHT CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <span className="text-sm text-slate-600 whitespace-nowrap">
              +91 80568 89616


            </span>

            <Link
              to="/contact"
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
            >
              Contact
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="lg:hidden text-2xl text-slate-700"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-[999] bg-[#020617] text-white"
          >
            {/* TOP BAR */}
            <div className="flex justify-between items-center px-6 h-20 border-b border-white/10">
              <img src={Logo} alt="Poeage Nexus" className="w-32" />
              <button
                onClick={() => setMenuOpen(false)}
                className="text-2xl"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
            </div>

            {/* NAV */}
            <nav className="flex flex-col items-center gap-8 mt-20 text-lg">
              {[
                ["Home", "/"],
                ["About", "/about"],
                ["Projects", "/projects"],
                ["How It Works", "/work"],
                ["Services", "/services"],
                ["Hire", "/hire"],
                ["Jobs", "/jobs"],
                ["Clients", "/clients"],
              ].map(([label, path], i) => (
                <motion.div
                  key={path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <NavLink
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className="hover:text-cyan-400 transition"
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ))}

              <Link
                to="/contact"
                onClick={() => setMenuOpen(false)}
                className="mt-8 px-10 py-3 rounded-full bg-white text-black font-medium"
              >
                Contact Us
              </Link>

              <p className="mt-10 text-sm text-slate-400">
              +91 80568 89616
              </p>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
