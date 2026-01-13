import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCalendarAlt,
  FaRupeeSign,
  FaShareAlt,
  FaWhatsapp,
  FaLinkedin,
  FaCopy,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";

const JOBS_PER_PAGE = 4;

export default function JobsAdvanced() {
  const formRef = useRef(null);

  const jobs = [
    {
      id: "backend-dev",
      title: "Backend Developer",
      location: "Chennai / Remote",
      salary: "₹6–10 LPA",
      experience: "2–5 Years",
      posted: "02 Jan 2025",
      icon: <FaLaptopCode />,
      description:
        "Build scalable backend systems, APIs, and integrations for enterprise platforms.",
    },
    {
      id: "node-dev",
      title: "Node.js Developer",
      location: "Bangalore",
      salary: "₹5–8 LPA",
      experience: "1–3 Years",
      posted: "05 Jan 2025",
      icon: <FaLaptopCode />,
      description:
        "Develop high-performance Node.js services and REST/GraphQL APIs.",
    },
    {
      id: "machine-op",
      title: "Machine Operator",
      location: "Coimbatore",
      salary: "₹18k–25k / month",
      experience: "0–2 Years",
      posted: "10 Jan 2025",
      icon: <FaCogs />,
      description:
        "Operate and maintain production machinery with strict quality controls.",
    },
  ];

  const [page, setPage] = useState(1);
  const [selectedJob, setSelectedJob] = useState(null);
  const [alertEmail, setAlertEmail] = useState("");

  const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
  const visibleJobs = jobs.slice(
    (page - 1) * JOBS_PER_PAGE,
    page * JOBS_PER_PAGE
  );

  function apply(job) {
    setSelectedJob(null);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  }

  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      "service_dk73ruq",
      "template_ielgg0f",
      e.target,
      "3Mza4yOqBPIR34fqoaYLl"
    );
    alert("Application sent successfully");
  }

  function copyLink(job) {
    navigator.clipboard.writeText(window.location.href + "#" + job.id);
    alert("Job link copied");
  }

  return (
    <main className="min-h-screen bg-[#020617] text-white px-6 py-32">
      <div className="max-w-6xl mx-auto">

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-5xl lg:text-6xl
                     font-extrabold tracking-tight text-center"
        >
          Careers at Poeage Nexus
        </motion.h1>

        <p className="mt-8 text-slate-400 max-w-2xl mx-auto text-center">
          Carefully curated opportunities with transparent compensation,
          clear expectations, and fast hiring.
        </p>

        <section className="mt-24 space-y-20">
          {visibleJobs.map((job) => (
            <motion.article
              key={job.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative border-b border-white/10 pb-16"
            >
              <div className="flex flex-col md:flex-row gap-10">
                <div className="text-4xl text-cyan-400">{job.icon}</div>

                <div className="flex-1">
                  <h3 className="text-2xl font-semibold">{job.title}</h3>

                  <div className="mt-4 flex flex-wrap gap-x-8 gap-y-2 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> {job.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaRupeeSign /> {job.salary}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaBriefcase /> {job.experience}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {job.posted}
                    </span>
                  </div>

                  <p className="mt-6 text-slate-300 max-w-2xl">
                    {job.description}
                  </p>

                  <div className="mt-8 flex items-center gap-6">
                    <button
                      onClick={() => setSelectedJob(job)}
                      className="text-sm uppercase tracking-[0.3em]
                                 text-cyan-400 hover:text-white transition"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() => copyLink(job)}
                      className="text-sm uppercase tracking-[0.3em]
                                 text-slate-500 hover:text-white transition"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <div className="mt-24 flex justify-center gap-8 text-sm uppercase tracking-[0.4em]">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={page === i + 1 ? "text-white" : "text-slate-500"}
            >
              {i + 1}
            </button>
          ))}
        </div>

        <section className="mt-32 text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-500 mb-4">
            Private Access
          </p>
          <h2 className="text-2xl font-bold mb-6">Job Alerts</h2>
          <div className="flex justify-center gap-4">
            <input
              value={alertEmail}
              onChange={(e) => setAlertEmail(e.target.value)}
              placeholder="Email address"
              className="p-3 bg-white/5 border border-white/10 rounded-xl"
            />
            <button className="px-6 py-3 bg-cyan-500 text-black rounded-xl">
              Subscribe
            </button>
          </div>
        </section>

        <section className="mt-32 max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Resume Guidance
          </h2>
          <ul className="space-y-4 text-slate-400">
            <li>• Keep resumes concise (1–2 pages)</li>
            <li>• Quantify achievements wherever possible</li>
            <li>• Match skills to job requirements</li>
            <li>• Use simple, ATS-friendly formatting</li>
          </ul>
        </section>

        <section ref={formRef} className="mt-40 max-w-4xl mx-auto">
          <form
            onSubmit={sendEmail}
            className="bg-white/5 border border-white/10
                       rounded-3xl p-12 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold mb-8">Apply Now</h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input name="name" placeholder="Full Name" required className="p-3 rounded-lg" />
              <input name="email" type="email" placeholder="Email" required className="p-3 rounded-lg" />
              <input name="phone" placeholder="Phone" required className="p-3 rounded-lg" />
              <input name="category" placeholder="Job Title" required className="p-3 rounded-lg" />
              <input type="file" name="resume" required className="md:col-span-2" />
            </div>

            <button
              type="submit"
              className="mt-8 px-10 py-4 rounded-full
                         bg-gradient-to-r from-cyan-500 to-indigo-600
                         font-semibold uppercase tracking-[0.35em]"
            >
              Submit Application
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}
