import React from "react";
import { motion } from "framer-motion";
import BgVideo from "../Asset/Bg Video.mp4";
import Reliance from "../Asset/Reliance.jpg"
import LT from "../Asset/Logo - L&T WET IC.jpg"
import Mrf from "../Asset/mrf-madras-rubber-factory-vector-logo.png"
import Ashok from "../Asset/Ashok-Leyland-Logo.png"



import { Link } from "react-router-dom";

import {
  ArrowRight,
  Users,
  Briefcase,
  Building2,
  Factory,
  Star,
  CheckCircle,
} from "lucide-react";
import {
  ClipboardList,
  Search,
  ShieldCheck,
  Truck,
} from "lucide-react";

export default function Home() {
  const steps = [
    {
      title: "Requirement Analysis",
      desc: "Understand workforce demand, timelines, skill level, and compliance needs.",
      icon: ClipboardList,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Talent Sourcing",
      desc: "Mobilize verified candidates from our pre-screened manpower pool.",
      icon: Search,
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "Screening & Compliance",
      desc: "Background checks, documentation, and statutory verification.",
      icon: ShieldCheck,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      title: "Deployment & Support",
      desc: "Rapid deployment with ongoing HR, replacement, and attendance support.",
      icon: Truck,
      gradient: "from-violet-500 to-purple-500",
    },
  ];
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 overflow-hidden">

      <section className="relative min-h-[90vh] flex items-center px-6">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={BgVideo}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-blue-900/70 to-cyan-900/70" />

        <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white">
              Enterprise Manpower <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Supply & Consultancy
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-slate-200 text-lg">
              Compliant, scalable, and industry-ready workforce solutions
              trusted by leading enterprises.
            </p>

            <Link
            to= '/hire'
             className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-blue-700 font-semibold shadow-xl hover:scale-105 transition">
              Hire Talent <ArrowRight />
            </Link>
          </motion.div>

          
        </div>
      </section>

      <section className="relative py-24 bg-white border-t overflow-hidden">

  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[120px]" />
  <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 text-center">

      {[
        ["20K+", "Workers Deployed"],
        ["30+", "Enterprise Clients"],
        ["2+", "Years Experience"],
        ["95%", "Retention Rate"],
      ].map(([value, label], i) => (
        <div
          key={label}
          className="
            group relative p-8 rounded-3xl
            bg-white/70 backdrop-blur
            border border-slate-200
            shadow-sm hover:shadow-xl
            transition-all duration-300
          "
        >
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500" />

          <h3
            className="
              text-4xl md:text-5xl font-extrabold
              bg-gradient-to-r from-blue-700 to-cyan-600
              bg-clip-text text-transparent
              tracking-tight
            "
          >
            {value}
          </h3>

          <p className="mt-3 text-sm md:text-base text-slate-600 tracking-wide">
            {label}
          </p>

          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition" />
        </div>
      ))}

    </div>
  </div>
</section>

<section className="relative py-24 md:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">

  {/* ambient background */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[120px]" />
  <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] bg-cyan-500/10 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900"
    >
      Our Core Services
    </motion.h2>

    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.15 }}
      className="mt-6 max-w-2xl mx-auto text-slate-600 text-base md:text-lg"
    >
      Enterprise workforce solutions engineered for scale, compliance,
      and operational reliability.
    </motion.p>

    {/* GRID */}
    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
      {[
        ["Manpower Supply", Users, "from-cyan-500 to-blue-600"],
        ["Contract Staffing", Briefcase, "from-indigo-500 to-violet-600"],
        ["HR Outsourcing", Building2, "from-emerald-500 to-green-600"],
        ["Payroll Management", Factory, "from-orange-500 to-red-600"],
        ["Training & Development", CheckCircle, "from-teal-500 to-cyan-600"],
        ["Compliance Services", Star, "from-pink-500 to-rose-600"],
      ].map(([title, Icon, gradient], i) => (
        <motion.div
          key={title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          whileHover={{ y: -8 }}
          className="
            group relative
            bg-white/80 backdrop-blur
            p-8 rounded-3xl
            border border-slate-200
            shadow-sm hover:shadow-2xl
            transition-all duration-300
            text-left
          "
        >
          {/* glow on hover */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition" />

          {/* icon */}
          <div
            className={`
              relative w-14 h-14 rounded-2xl
              bg-gradient-to-br ${gradient}
              flex items-center justify-center
              text-white mb-6
              shadow-lg
            `}
          >
            <Icon size={26} />
          </div>

          <h3 className="relative text-xl font-semibold text-slate-900">
            {title}
          </h3>

          <p className="relative mt-3 text-sm md:text-[15px] text-slate-600 leading-relaxed">
            Enterprise-grade workforce solutions focused on speed,
            statutory compliance, and business continuity.
          </p>

          <span className="relative mt-6 block w-10 h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
        </motion.div>
      ))}
    </div>
  </div>
</section>

     <section className="relative py-32 bg-gradient-to-b from-white via-slate-50 to-white overflow-hidden">
      {/* background accents */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 -right-32 w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          How It Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          viewport={{ once: true }}
          className="mt-6 max-w-3xl mx-auto text-lg text-slate-600"
        >
          A structured, compliant, and enterprise-ready workforce deployment
          process designed for speed and reliability.
        </motion.p>

        {/* Timeline */}
        <div className="relative mt-24 grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl p-8 transition"
            >
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center text-sm font-bold shadow-lg">
                {i + 1}
              </div>

              <div
                className={`w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br ${step.gradient} flex items-center justify-center text-white shadow-md mb-6`}
              >
                <step.icon size={26} />
              </div>

              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {step.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>


<section className="relative py-28 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
  <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-400/10 rounded-full blur-[120px]" />
  <div className="absolute bottom-0 -right-40 w-[420px] h-[420px] bg-cyan-400/10 rounded-full blur-[120px]" />

  <div className="relative max-w-7xl mx-auto px-6">
    <h2 className="text-4xl md:text-5xl font-extrabold text-center text-slate-900 mb-6">
      Trusted by Leading Enterprises
    </h2>
    <p className="text-center text-slate-600 max-w-3xl mx-auto mb-16">
      We partner with established brands across manufacturing, infrastructure,
      IT, and enterprise services.
    </p>
<div className="relative overflow-hidden">
  <div className="flex gap-16 w-max animate-logo-scroll items-center">

    {[
      {
        name: "TATA",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
      },
      {
        name: "MRF",
        src: Mrf,
      },
      {
        name: "Ashok Leyland",
        src: Ashok,
      },
      {
        name: "Infosys",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      },
      {
        name: "L&T",
        src: LT,
      },
      {
        name: "Reliance",
        src: Reliance,
      },

      /* duplicate for infinite loop */
      {
        name: "TATA",
        src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Tata_logo.svg",
      },
      {
        name: "MRF",
        src: Mrf,
      },
      {
        name: "Ashok Leyland",
        src: Ashok,
      },
      {
        name: "Infosys",
        src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
      },
      {
        name: "L&T",
        src: LT,
      },
      {
        name: "Reliance",
        src: Reliance,
      },
    ].map((company, i) => (
      <div
        key={i}
        className="h-20 w-44 flex items-center justify-center
                   rounded-2xl bg-white/90 backdrop-blur
                   border border-slate-200 shadow-sm
                   hover:shadow-xl transition"
      >
        <img
          src={company.src}
          alt={company.name}
          className="h-10 max-w-[120px] object-contain
                     grayscale opacity-70
                     hover:grayscale-0 hover:opacity-100 transition"
        />
      </div>
    ))}
  </div>
</div>
</div>
</section>

<section className="relative py-32 bg-white overflow-hidden">
  {/* ambient accents */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[140px]" />

  <div className="relative max-w-5xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-14">
      What Our Clients Say
    </h2>

    <div className="relative p-10 md:p-14 rounded-[32px]
                    bg-gradient-to-br from-slate-50 via-white to-slate-50
                    border border-slate-200 shadow-xl">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2
                      w-12 h-12 rounded-full bg-slate-900
                      text-white flex items-center justify-center
                      text-2xl font-serif shadow-lg">
        “
      </div>

      <p className="text-lg md:text-xl text-slate-700 leading-relaxed italic">
        Poeage Nexus enabled us to scale manpower across multiple
        locations while maintaining strict statutory compliance
        and uninterrupted operations.
      </p>

      <div className="mt-10">
        <p className="font-semibold text-slate-900">
          Head of Operations
        </p>
        <p className="text-sm text-slate-500">
          Large Manufacturing Enterprise
        </p>
      </div>
    </div>
  </div>
</section>


      <section className="py-28 bg-gradient-to-r from-blue-700 to-cyan-600 text-white text-center">
        
        <h1
        className="text-4xl font-extrabold mb-6">
          Ready to Scale Your Workforce?
        </h1>
        <p className="max-w-xl mx-auto text-blue-100 mb-10">
          Get enterprise-grade manpower solutions tailored to your business.
        </p>
        <Link
          to='/hire'
          
           className="bg-white text-blue-700 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition">
          Request Workforce
        </Link>
      </section>

    </div>
  );
}
