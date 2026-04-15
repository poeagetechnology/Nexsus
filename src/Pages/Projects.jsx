import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  TrendingUp,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const stats = [
    { label: "Workers Deployed", value: "20,000+", icon: TrendingUp },
    { label: "Industries Served", value: "15+", icon: Building2 },
    { label: "Cities Covered", value: "25+", icon: MapPin },
    { label: "Retention Rate", value: "95%", icon: ShieldCheck },
  ];

  const projects = [
    {
      client: "TATA Motors",
      industry: "Automotive",
      challenge: "500 workers required within 2 weeks",
      solution: "Rapid sourcing, screening, phased deployment",
      before: "Production delays due to workforce shortage",
      after: "Deployment completed ahead of schedule",
      video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      client: "MRF Tyres",
      industry: "Manufacturing",
      challenge: "Shortage of skilled technicians",
      solution: "Skill-based hiring with on-site training",
      before: "Low output and high downtime",
      after: "Productivity increased significantly",
      video: "",
    },
    {
      client: "Construction Project",
      industry: "Real Estate",
      challenge: "Seasonal workforce fluctuations",
      solution: "Flexible contracts & rotation staffing",
      before: "Peak-season delays",
      after: "On-time completion",
      video: "",
    },
  ];

  const industries = ["All", ...new Set(projects.map(p => p.industry))];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.industry === filter);

  return (
    <>

      <section className="relative py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Proven Workforce Success
          </motion.h1>
          <p className="mt-6 max-w-3xl mx-auto text-blue-100 text-lg">
            Enterprise case studies demonstrating speed, scale,
            and compliance across industries.
          </p>
        </div>
      </section>

      <section className="relative -mt-20 z-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/90 backdrop-blur rounded-3xl p-6 text-center shadow-xl border"
            >
              <s.icon className="mx-auto mb-3 text-blue-600" />
              <h3 className="text-3xl font-extrabold text-slate-900">
                {s.value}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-28">
        <div className="flex flex-wrap gap-4 justify-center">
          {industries.map(ind => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                filter === ind
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                  : "bg-white border text-slate-700 hover:bg-slate-50"
              }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 space-y-20">
        <AnimatePresence>
          {filteredProjects.map((p, i) => (
            <motion.div
              key={p.client}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white rounded-3xl border shadow-xl p-10"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                    {p.client}
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Industry · {p.industry}
                  </p>
                </div>
                <span className="px-5 py-2 rounded-full bg-slate-100 text-sm">
                  Case Study
                </span>
              </div>

              <div className="mt-8 grid md:grid-cols-2 gap-8 text-slate-700">
                <div>
                  <h4 className="font-semibold mb-2">Challenge</h4>
                  <p className="text-sm leading-relaxed">{p.challenge}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Solution</h4>
                  <p className="text-sm leading-relaxed">{p.solution}</p>
                </div>
              </div>

              <div className="mt-10 grid md:grid-cols-2 gap-6">
                <div className="rounded-2xl p-6 bg-red-50 border border-red-100">
                  <p className="text-red-700 font-semibold">Before</p>
                  <p className="mt-2 text-sm text-slate-700">{p.before}</p>
                </div>
                <div className="rounded-2xl p-6 bg-green-50 border border-green-100">
                  <p className="text-green-700 font-semibold">After</p>
                  <p className="mt-2 text-sm text-slate-700">{p.after}</p>
                </div>
              </div>

              {p.video && (
                <div className="mt-10 max-w-3xl">
                  <div className="relative overflow-hidden rounded-2xl shadow-lg">
                    <iframe
                      src={p.video}
                      title={p.client}
                      className="w-full h-64 md:h-80"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </section>

      <section className="relative py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-extrabold"
        >
          Want Similar Results?
        </motion.h2>
        <p className="mt-6 text-blue-100 max-w-xl mx-auto">
          Partner with Poeage Nexus to scale workforce operations
          with confidence and compliance.
        </p>
        <a
          href="/hire"
          className="inline-flex items-center gap-3 mt-10 bg-white text-blue-600 px-10 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
        >
          Request Workforce <ArrowRight />
        </a>
      </section>
    </>
  );
}
