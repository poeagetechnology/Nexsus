import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LT from "../Asset/Logo - L&T WET IC.jpg";
import Infosys from "../Asset/images.png"
import Relaince from "../Asset/images (1).png"

export default function Clients() {
  const [filter, setFilter] = useState("All");

  const clients = [
    {
      name: "TATA Motors",
      industry: "Automotive",
      logo: "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo-1988.png",
      quote:
        "Rapid workforce deployment enabled uninterrupted production across facilities.",
      caseStudy: "/projects/tata-motors",
    },
    {
      name: "MRF Tyres",
      industry: "Manufacturing",
      logo: "https://i.pinimg.com/736x/81/8d/6e/818d6e280da3c9660adfdcf8ec8ec2d2.jpg",
      quote:
        "Zero onboarding delays and consistent access to skilled technicians.",
      caseStudy: "/projects/mrf",
    },
    {
      name: "Mahindra & Mahindra",
      industry: "Automotive",
      logo: "https://download.logo.wine/logo/Mahindra_%26_Mahindra/Mahindra_%26_Mahindra-Logo.wine.png",
      quote:
        "A dependable workforce partner across multiple manufacturing units.",
      caseStudy: "/projects/mahindra",
    },
    {
      name: "L&T Construction",
      industry: "Construction",
      logo: LT,
      quote:
        "Flexible workforce scaling during peak project execution phases.",
      caseStudy: "/projects/lnt",
    },
    {
      name: "Infosys",
      industry: "IT",
      logo: Infosys,
      quote:
        "Professional hiring support with predictable turnaround timelines.",
      caseStudy: "/projects/infosys",
    },
    {
      name: "Reliance Industries",
      industry: "Manufacturing",
      logo: Relaince,
      quote:
        "Strong compliance controls and consistently high workforce quality.",
      caseStudy: "/projects/reliance",
    },
  ];

  const industries = ["All", "Automotive", "Manufacturing", "Construction", "IT"];

  const visible =
    filter === "All"
      ? clients
      : clients.filter((c) => c.industry === filter);

  return (
    <main className="bg-[#020620] text-white min-h-screen">

      <section className="pt-44 pb-32 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl
                     font-extrabold tracking-tight"
        >
          Selected Client Partnerships
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-8 max-w-3xl mx-auto
                     text-slate-400 text-base sm:text-lg"
        >
          We work with organizations that operate at scale,
          value predictability, and demand operational certainty.
        </motion.p>
      </section>

      <section className="px-6 mb-24">
        <div className="flex justify-center gap-12 flex-wrap">
          {industries.map((ind) => (
            <button
              key={ind}
              onClick={() => setFilter(ind)}
              className={`text-xs uppercase tracking-[0.4em] transition
                ${
                  filter === ind
                    ? "text-white"
                    : "text-slate-500 hover:text-slate-300"
                }`}
            >
              {ind}
            </button>
          ))}
        </div>
      </section>

      <section className="px-6 pb-40">
        <div className="max-w-7xl mx-auto space-y-28">

          <AnimatePresence mode="wait">
            {visible.map((client, i) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="grid lg:grid-cols-2 gap-20 items-center"
              >
                <div className="flex justify-center lg:justify-end">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="h-20 object-contain opacity-90"
                  />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-[0.4em]
                                text-slate-500 mb-6">
                    {client.industry}
                  </p>

                  <h3 className="text-2xl sm:text-3xl
                                 font-semibold mb-6">
                    {client.name}
                  </h3>

                  <p className="text-lg sm:text-xl
                                text-slate-300 italic leading-relaxed">
                    “{client.quote}”
                  </p>

                  <a
                    href={client.caseStudy}
                    className="mt-10 inline-flex items-center gap-3
                               text-xs uppercase tracking-[0.35em]
                               text-cyan-400 hover:text-white transition"
                  >
                    View Case Study <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      <section className="pb-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-xs uppercase tracking-[0.4em]
                        text-slate-500 mb-6">
            Partnerships
          </p>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl
                         font-extrabold tracking-tight">
            Interested in Working Together?
          </h2>

          <p className="mt-8 text-slate-400 max-w-2xl mx-auto">
            We selectively partner with organizations where we can
            deliver measurable, long-term workforce impact.
          </p>

          <div className="mt-14">
            <a
              href="/contact"
              className="inline-flex items-center gap-3
                         text-xs uppercase tracking-[0.4em]
                         text-cyan-400 hover:text-white transition"
            >
              Start a Conversation <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
