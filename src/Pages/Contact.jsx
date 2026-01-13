import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Clock,
  MessageCircle,
  Facebook,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [openFaq, setOpenFaq] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    setStatus("Message sent successfully. We’ll respond within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  }

  const faqs = [
    {
      q: "How fast can you deploy workers?",
      a: "Typically within 2–7 working days depending on role and volume.",
    },
    {
      q: "Are candidates verified?",
      a: "Yes. All candidates go through ID, background and skill screening.",
    },
    {
      q: "Do you support contract & permanent hiring?",
      a: "Yes. We provide temporary, contract and full-time staffing.",
    },
    {
      q: "Which industries do you serve?",
      a: "Manufacturing, IT, Construction, Healthcare, Retail and more.",
    },
  ];

  return (
    <div className="pt-28 min-h-screen bg-gradient-to-br from-cyan-100 via-white to-blue-100">

      <section className="relative text-center px-6 mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-extrabold"
        >
          Let’s Talk Workforce
        </motion.h1>
        <p className="mt-5 text-gray-600 max-w-2xl mx-auto text-lg">
          Speak directly with Poeage Nexus experts and scale your workforce
          faster, smarter, and compliant.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          ⏱ Average response time: <strong>within 24 hours</strong>
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16">

        <div className="space-y-10 min-w-0">

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: <Phone />,
                label: "Call Us",
                value: "+91 80568 89616",
                link: "tel:+918056889616",
              },
              {
                icon: <Mail />,
                label: "Email",
                value: "contact@poeagenexus.com",
                link: "mailto:contact@poeagenexus.com",
              },
              {
                icon: <MessageCircle />,
                label: "WhatsApp",
                value: "Chat Instantly",
                link: "https://wa.me/918056889616",
              },
              {
                icon: <MapPin />,
                label: "Office",
                value: "Tamil Nadu, India",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.link || "#"}
                target={item.link?.includes("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center h-28 w-full 
             bg-white/70 backdrop-blur-xl 
             p-6 rounded-2xl border shadow 
             hover:shadow-lg transition"
              >
                   <div className="flex flex-col w-[220px]">
                  <div className="p-3 bg-cyan-100 rounded-xl text-cyan-600 shrink-0">
                    {item.icon}
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p
                      className="font-semibold whitespace-nowrap
             overflow-x-hidden hover:overflow-x-auto
             no-scrollbar"
                    >
                      {item.value}
                    </p>

                  </div>
                </div>


              </a>
            ))}
          </div>

          <div className="bg-white/70 backdrop-blur-xl p-6 rounded-2xl border shadow">
            <div className="flex items-center gap-3">
              <Clock className="text-blue-600" />
              <p className="font-semibold">Office Hours</p>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Monday – Saturday · 9:00 AM – 6:30 PM
            </p>
          </div>

          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="p-3 border rounded-full bg-white hover:bg-gray-50 shadow"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/80 backdrop-blur-xl border rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>

          <div className="space-y-5">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name *"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none border-gray-400"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email *"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none  border-gray-400"
            />
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 border rounded-xl  border-gray-400 focus:ring-cyan-500 outline-none"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell us your requirement *"
              rows="5"
              className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-cyan-500 outline-none  border-gray-400"
            />
          </div>

          {status && <p className="mt-4 text-sm text-blue-600">{status}</p>}

          <button className="mt-8 w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl font-semibold flex justify-center gap-2">
            Send Message <Send size={18} />
          </button>
        </motion.form>
      </div>

      <section className="mt-24">
        <h3 className="text-3xl font-bold text-center mb-6">Our Location</h3>
        <iframe
          title="Poeage Nexus Map"
          src="https://www.google.com/maps?q=Tamil%20Nadu%20India&output=embed"
          className="w-full h-[400px] border-0"
          loading="lazy"
        />
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border shadow overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex justify-between items-center p-5 font-semibold"
              >
                {faq.q}
                <ChevronDown
                  className={`transition ${openFaq === i ? "rotate-180" : ""
                    }`}
                />
              </button>
              {openFaq === i && (
                <p className="px-5 pb-5 text-sm text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
