import { useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  UserCheck,
  Truck,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function HowItWorks() {
  const [openFaq, setOpenFaq] = useState(null);

  const steps = [
    {
      icon: ClipboardList,
      title: "Share Requirements",
      desc: "You define roles, workforce volume, timelines, and compliance expectations.",
      time: "≈ 1 Working Day",
    },
    {
      icon: Users,
      title: "We Source Talent",
      desc: "Candidates are sourced from verified databases and screened for skills, experience, and compliance.",
      time: "≈ 2–3 Working Days",
    },
    {
      icon: UserCheck,
      title: "Interview & Select",
      desc: "You interview shortlisted candidates and confirm final selections.",
      time: "≈ 1–2 Working Days",
    },
    {
      icon: Truck,
      title: "Deployment",
      desc: "Workers are onboarded, documented, and deployed on-site with zero friction.",
      time: "≈ 1 Working Day",
    },
    {
      icon: LifeBuoy,
      title: "Ongoing Support",
      desc: "Continuous HR support, replacements, payroll coordination, and compliance monitoring.",
      time: "Ongoing",
    },
  ];

  const faqs = [
    {
      q: "How fast can hiring be completed?",
      a: "Most requirements are fulfilled within 3–7 working days depending on role complexity and workforce volume.",
    },
    {
      q: "Are candidates verified?",
      a: "Yes. Every worker undergoes ID verification, background checks, and skill screening before deployment.",
    },
    {
      q: "Do you provide replacements?",
      a: "Absolutely. Replacement support is included to ensure workforce continuity.",
    },
  ];

  return (
    <main className="bg-white">

      <section className="relative overflow-hidden pt-40 pb-32 px-6 text-center">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-24 left-1/2 h-[520px] w-[520px]
                          -translate-x-1/2 rounded-full
                          bg-indigo-300/30 blur-[160px]" />
          <div className="absolute bottom-0 left-1/4 h-[420px] w-[420px]
                          rounded-full
                          bg-cyan-300/30 blur-[160px]" />
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-7xl
                     font-extrabold tracking-tight text-slate-900"
        >
          How We Work
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 max-w-3xl mx-auto
                     text-base sm:text-lg text-slate-600"
        >
          A seamless, enterprise-grade hiring workflow designed for
          speed, compliance, and long-term workforce success.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 text-xs uppercase tracking-[0.45em] text-slate-400"
        >
          Structured • Predictable • Enterprise-Ready
        </motion.p>
      </section>

      <section className="bg-slate-50 py-36 px-6">
        <div className="max-w-6xl mx-auto">

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl lg:text-5xl
                       font-extrabold text-center text-slate-900 mb-24"
          >
            Our Hiring Process
          </motion.h2>

          <div className="space-y-28">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="grid lg:grid-cols-[140px_1fr] gap-12"
                >
                  <div className="flex flex-col items-center">
                    <div className="h-14 w-14 rounded-full
                                    bg-gradient-to-br from-cyan-500 to-indigo-600
                                    text-white flex items-center justify-center
                                    shadow-[0_20px_40px_rgba(56,189,248,0.4)]">
                      <Icon size={22} />
                    </div>
                    {i !== steps.length - 1 && (
                      <div className="mt-6 w-px h-full bg-slate-300" />
                    )}
                  </div>

                  <div className="relative bg-white rounded-3xl
                                  p-10 sm:p-12
                                  border border-slate-200
                                  shadow-[0_40px_80px_rgba(0,0,0,0.08)]">
                    <h3 className="text-2xl font-bold text-slate-900">
                      {step.title}
                    </h3>

                    <p className="mt-6 text-slate-600 max-w-2xl">
                      {step.desc}
                    </p>

                    <p className="mt-8 text-xs uppercase tracking-[0.35em]
                                  text-indigo-600 font-semibold">
                      Estimated Time · {step.time}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-40 px-6">
        <div className="absolute inset-0 -z-20 bg-[#020617]" />
        <div className="absolute inset-0 -z-10
          bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.3),transparent_65%)]" />
        <div className="absolute inset-0 -z-10 opacity-20
          bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px)]
          bg-[size:72px_72px]" />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-[36px]
                          bg-white/5 backdrop-blur-2xl
                          border border-white/10
                          shadow-[0_60px_160px_rgba(0,0,0,0.7)]
                          px-12 sm:px-20 py-24 text-center">

            <h2 className="text-3xl sm:text-4xl lg:text-5xl
                           font-extrabold tracking-tight text-white">
              Ready to Hire With Confidence?
            </h2>

            <p className="mt-8 max-w-3xl mx-auto
                          text-base sm:text-lg text-gray-900">
              Partner with a workforce solutions provider built for
              speed, compliance, and operational certainty.
            </p>

            <div className="mt-16 flex flex-col sm:flex-row
                            justify-center gap-6 mr-16">
              <Link
                to="/contact"
                className="px-16 py-4 rounded-full
                           bg-gradient-to-r from-cyan-500 to-indigo-600
                           text-white text-sm font-semibold
                           uppercase tracking-[0.4em]
                           shadow-[0_30px_80px_rgba(56,189,248,0.5)]
                           hover:scale-[1.06] transition"
              >
                Contact Our Experts
              </Link>

            
            </div>
          </div>
        </motion.div>
      </section>

      <section className="bg-white py-36 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl sm:text-4xl font-extrabold
                         text-center text-slate-900 mb-20">
            Frequently Asked Questions
          </h2>

          <div className="space-y-8">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={i}
                  className="rounded-3xl border border-slate-200
                             bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="w-full flex justify-between items-center
                               px-8 py-6 text-left"
                  >
                    <span className="font-semibold text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`transition-transform duration-300
                        ${open ? "rotate-180" : ""}
                      `}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-8 text-slate-600">
                      {faq.a}
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
