import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  ClipboardCheck,
  ShieldCheck,
  Wallet,
  GraduationCap,
  SearchCheck,
  Scale,
  Zap,
  RefreshCcw,
} from "lucide-react";

const services = [
  {
    title: "Manpower Supply",
    short: "Skilled & unskilled workforce deployment",
    details:
      "End-to-end manpower supply across industries with verified workers, onboarding support, and rapid deployment.",
    icon: Users,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    title: "Contract Staffing",
    short: "Flexible contract-based workforce",
    details:
      "Temporary and long-term contract staffing with payroll, compliance, and replacement guarantees.",
    icon: Briefcase,
    gradient: "from-emerald-600 to-teal-500",
  },
  {
    title: "Permanent Recruitment",
    short: "Full-time hiring solutions",
    details:
      "Strategic permanent hiring for technical, managerial, and operational roles.",
    icon: ClipboardCheck,
    gradient: "from-violet-600 to-purple-500",
  },
  {
    title: "HR Outsourcing",
    short: "Complete HR operations management",
    details:
      "Outsource recruitment, onboarding, attendance, compliance, and employee lifecycle management.",
    icon: ShieldCheck,
    gradient: "from-orange-500 to-amber-500",
  },
  {
    title: "Payroll Management",
    short: "Salary processing & compliance",
    details:
      "Accurate payroll processing, statutory deductions, payslips, and government filings.",
    icon: Wallet,
    gradient: "from-pink-600 to-rose-500",
  },
  {
    title: "Training & Development",
    short: "Worker skill enhancement programs",
    details:
      "On-site and off-site training programs to improve productivity and safety compliance.",
    icon: GraduationCap,
    gradient: "from-indigo-600 to-blue-500",
  },
  {
    title: "Background Verification",
    short: "Employee verification services",
    details:
      "ID verification, address checks, criminal verification, and document validation.",
    icon: SearchCheck,
    gradient: "from-red-500 to-orange-500",
  },
  {
    title: "Compliance Management",
    short: "Labour law & statutory compliance",
    details:
      "Shops Act, Factory Act, Contract Labour Act, PF, ESI, and audit-ready compliance.",
    icon: Scale,
    gradient: "from-fuchsia-600 to-pink-500",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-[#020617] text-slate-100">

      <section className="relative overflow-hidden py-28 text-center">
        <div className="absolute -top-40 -right-40 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px]" />

        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold text-white"
        >
          Enterprise Workforce Services
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-6 max-w-3xl mx-auto text-slate-400 text-lg"
        >
          Scalable manpower, compliant hiring, and end-to-end HR solutions
          designed for high-growth organizations.
        </motion.p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white rounded-3xl p-8 shadow-lg cursor-pointer"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white mb-6 shadow-md`}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {service.title}
                </h3>

                <p className="text-slate-600">
                  {service.short}
                </p>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 text-sm text-slate-700 leading-relaxed"
                    >
                      {service.details}
                    </motion.div>
                  )}
                </AnimatePresence>

                <span className="absolute bottom-6 right-8 text-xs font-medium text-blue-600">
                  {openIndex === index ? "Show less" : "Learn more"}
                </span>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="bg-slate-100 py-28 text-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center">
            Why Enterprises Trust Poeage Nexus
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-center text-slate-600 text-lg">
            We deliver operational certainty, compliance confidence,
            and scalable workforce systems.
          </p>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: ShieldCheck,
                title: "Compliance-First",
                desc: "Audit-ready documentation & statutory adherence",
              },
              {
                icon: Zap,
                title: "Rapid Deployment",
                desc: "Workforce deployed within 2–7 working days",
              },
              {
                icon: Users,
                title: "Dedicated HR",
                desc: "Single-point HR ownership for every client",
              },
              {
                icon: RefreshCcw,
                title: "Guaranteed Replacement",
                desc: "Zero downtime replacement assurance",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white mb-6">
                    <Icon size={26} />
                  </div>

                  <h3 className="text-xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 text-sm">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-cyan-500 py-24 text-center">
        <h2 className="text-4xl font-extrabold text-white">
          Ready to Scale Your Workforce?
        </h2>

        <p className="mt-6 text-blue-100 text-lg max-w-xl mx-auto">
          Tell us your manpower needs and receive a customized enterprise solution.
        </p>

        <Link
          to="/contact"
          className="inline-block mt-10 bg-white text-blue-600 px-12 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition"
        >
          Request a Quote
        </Link>
      </section>
    </div>
  );
}
