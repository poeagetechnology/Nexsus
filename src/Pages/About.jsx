import React from "react";
import Founder from "../Asset/Founder.png";
import {
  FaCode,
  FaRobot,
  FaLaptopCode,
  FaUserTie,
  FaFlagCheckered,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Aboutus() {
  const timeline = [
    {
      year: "2023",
      icon: <FaCode />,
      title: "Journey Begins",
      desc: "Established with a strong foundation in web and mobile application development, delivering scalable digital solutions.",
      image:
        "https://media.bitcot.com/wp-content/uploads/2024/01/web-and-mobile-app-development.webp",
    },
    {
      year: "2024",
      icon: <FaRobot />,
      title: "Expanding Horizons",
      desc: "Expanded into AI-driven systems and customized enterprise-grade web & application platforms.",
      image:
        "https://www.binaryfolks.com/media/blog/AI%20in%20Mobile%20App%20Development/Header%20Image%20750X500.png",
    },
    {
      year: "2025",
      icon: <FaLaptopCode />,
      title: "Software & Products",
      desc: "Launched full-scale software development initiatives and proprietary platforms including Poeage Hub.",
      image:
        "https://www.appstudio.ca/blog/wp-content/uploads/2020/09/Modern-Software-Development.jpg",
    },
  ];

  const fade = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white overflow-hidden">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-20 md:pt-28 pb-16 md:pb-24 text-center">
        <motion.p
          initial="hidden"
          animate="visible"
          variants={fade}
          className="text-xs tracking-[0.3em] uppercase text-slate-500"
        >
          About Poeage
        </motion.p>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 max-w-4xl mx-auto leading-tight"
        >
          Building Long-Term Digital & Workforce Ecosystems
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={fade}
          className="mt-6 max-w-3xl mx-auto text-slate-600 text-base sm:text-lg leading-relaxed"
        >
          Poeage is structured to scale businesses through technology,
          workforce solutions, and intelligent systems—focused on reliability,
          compliance, and long-term value creation.
        </motion.p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 space-y-16 md:space-y-28">
        {timeline.map((item, i) => (
          <motion.div
            key={item.year}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fade}
            className="grid md:grid-cols-2 gap-10 md:gap-14 items-center"
          >
            <div className={i % 2 ? "md:order-2" : ""}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full aspect-video md:aspect-[4/3] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
            </div>

            <div
              className={`space-y-5 ${i % 2 ? "md:order-1" : ""}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg md:text-xl shadow-lg">
                  {item.icon}
                </div>
                <span className="text-sm tracking-widest text-slate-500">
                  {item.year}
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                {item.title}
              </h3>

              <p className="text-slate-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 mt-20 md:mt-36 pb-20 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fade}
          className="grid md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* IMAGE */}
          <div className="relative">
            <img
              src={Founder}
              alt="Founder"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

            <div className="absolute bottom-4 right-4 md:-bottom-6 md:-right-6 bg-white px-4 md:px-6 py-3 md:py-4 rounded-xl shadow-xl">
              <p className="text-xs uppercase tracking-widest text-slate-500">
                Founder & Visionary
              </p>
              <p className="font-semibold text-slate-900">
                Mr. Gowrishankar
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 flex items-center gap-3">
              <FaUserTie />
              Leadership & Vision
            </h2>

            <p className="text-slate-600 leading-relaxed">
              Transforming industries by blending innovation, technology, and
              sustainability—building platforms and organizations designed to
              endure, adapt, and lead in a digital-first economy.
            </p>

            <div className="pt-4 space-y-4">
              {[
                "Founded Poeage Technology (2023)",
                "Expanded into AI & Education (2024)",
                "Launched Infrastructure & Workforce Verticals (2025)",
              ].map((point, i) => (
                <div key={i} className="flex items-start gap-3">
                  <FaFlagCheckered className="mt-1 text-slate-900" />
                  <span className="text-slate-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
