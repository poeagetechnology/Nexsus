import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "../Asset/NEXUS.png";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="relative bg-[#020617] text-neutral-300 overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(59,130,246,0.10),transparent_40%)]" />

      <section className="relative max-w-6xl mx-auto px-6 pt-32 pb-24 text-center">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white">
          Workforce intelligence, delivered.
        </h2>

        <p className="mt-6 text-neutral-400 max-w-2xl mx-auto leading-relaxed">
          Strategic hiring insights, verified manpower updates, and operational
          workforce trends — curated for enterprise decision makers.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Business email address"
            className="w-full sm:w-[420px] px-6 py-4 bg-white/5 border border-white/10 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button className="px-10 py-4 rounded-2xl bg-white text-black font-medium hover:bg-neutral-200 transition">
            Subscribe
          </button>
        </div>
      </section>

      <section className="relative max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-12 gap-20">

        <div className="md:col-span-5">
          <img src={Logo} alt="Poeage Nexus" className="w-40 mb-8" />

          <p className="text-sm leading-relaxed text-neutral-400 max-w-md">
            Poeage Nexus is an enterprise workforce solutions firm delivering
            compliant, scalable manpower services across India. We support
            mission-critical operations through verified talent deployment and
            structured hiring systems.
          </p>

          <p className="mt-6 text-xs text-neutral-500 tracking-wide">
            ISO Certified · MSME Registered · Startup India
          </p>
        </div>

<div className="md:col-span-2">
  <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
    Company
  </h4>

  <ul className="space-y-3 text-sm text-neutral-400">
    <li><Link to="/" className="hover:text-white transition">Home</Link></li>
    <li><Link to="/about" className="hover:text-white transition">About Us</Link></li>
    <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
    <li><Link to="/work" className="hover:text-white transition">How It Works</Link></li>
    <li><Link to="/jobs" className="hover:text-white transition">Jobs</Link></li>
    <li><Link to="/contact" className="hover:text-white transition">Contact</Link></li>
  </ul>
</div>


        <div className="md:col-span-3">
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Services
          </h4>
          <ul className="space-y-4 text-sm text-neutral-400">
            <li>Manpower Supply</li>
            <li>Contract Staffing</li>
            <li>HR Outsourcing</li>
            <li>Payroll & Compliance</li>
            <li>Background Verification</li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-6">
            Contact
          </h4>

          <div className="space-y-5 text-sm text-neutral-400">
            <p className="flex items-center gap-3">
              <Mail size={16} /> contact@poeagenexus.com
            </p>
            <p className="flex items-center gap-3">
              <Phone size={16} /> +91 80568 89616
            </p>
            <p className="flex items-center gap-3">
              <MapPin size={16} /> Tamil Nadu, India
            </p>
            <p className="flex items-center gap-3 text-neutral-500">
              <Clock size={16} /> Mon – Sat · 9:00 – 18:00
            </p>

            <a
              href="https://wa.me/918056889616"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-2xl bg-green-600/90 hover:bg-green-600 text-white font-medium transition"
            >
              <FaWhatsapp size={18} />
              WhatsApp Business
            </a>
          </div>
        </div>
      </section>

      <section className="relative border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-neutral-500">
          <span>
            © {new Date().getFullYear()} Poeage Nexus · A Poeage Group Company
          </span>
          <div className="flex gap-8">
              <Link to="/privacy"
              className="hover:text-white transition cursor-pointer">
              Privacy Policy
            </Link>
            <Link to="/terms"
            className="hover:text-white transition cursor-pointer">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </section>
    </footer>
  ); 
}
