import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <div className="max-w-5xl mx-auto px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>

          <p className="mt-6 max-w-3xl text-slate-600 leading-relaxed">
            This Privacy Policy explains how <strong>Poeage Nexus</strong> collects,
            uses, and protects your information when you access our website and
            workforce-related services.
          </p>
        </motion.div>

        <div className="space-y-12">
          <PolicySection title="Information We Collect">
            <p>
              We may collect personal and business-related information when you:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Submit enquiry or workforce request forms</li>
              <li>Contact us through the website</li>
              <li>Upload documents such as resumes or job descriptions</li>
              <li>Browse our website (basic usage data)</li>
            </ul>
            <p className="mt-4">
              This may include name, email address, phone number, company details,
              job requirements, and uploaded documents.
            </p>
          </PolicySection>

          <PolicySection title="How We Use Information">
            <p>
              The information we collect is used strictly for legitimate business
              and operational purposes, including:
            </p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Responding to enquiries and service requests</li>
              <li>Providing manpower and HR-related services</li>
              <li>Improving website performance and user experience</li>
              <li>Internal record keeping and compliance</li>
            </ul>
            <p className="mt-4 font-medium">
              We do not sell or rent your personal information to third parties.
            </p>
          </PolicySection>

          <PolicySection title="Data Storage & Security">
            <p>
              We implement reasonable technical and organizational safeguards to
              protect your data against unauthorized access, misuse, or loss.
            </p>
            <p className="mt-4">
              Access to personal information is restricted to authorized personnel
              only and used solely for legitimate business purposes.
            </p>
            <p className="mt-4 text-slate-600">
              While we take data protection seriously, no internet-based system
              can be guaranteed to be completely secure.
            </p>
          </PolicySection>

          <PolicySection title="Cookie Policy">
            <p>
              Our website may use cookies or similar technologies to enhance user
              experience and analyze site performance.
            </p>
            <p className="mt-4">
              Cookies help us understand user behavior so we can improve
              functionality and content. You may disable cookies through your
              browser settings.
            </p>
          </PolicySection>

          <PolicySection title="Third-Party Services">
            <p>
              We may engage trusted third-party services for hosting, analytics,
              or communication purposes.
            </p>
            <p className="mt-4">
              These service providers are contractually obligated to process data
              responsibly and only for defined purposes.
            </p>
          </PolicySection>

          <PolicySection title="User Rights">
            <p>You have the right to:</p>
            <ul className="list-disc ml-6 mt-4 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data, subject to legal obligations</li>
              <li>Withdraw consent where applicable</li>
            </ul>
          </PolicySection>

          <PolicySection title="Contact for Privacy Concerns">
            <p>
              For questions or concerns regarding this Privacy Policy or the
              handling of your information, contact:
            </p>
            <p className="mt-4 font-semibold text-slate-800">
              Email: support@poeagenexus.com
            </p>
          </PolicySection>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-20 text-sm text-slate-500 leading-relaxed"
        >
          This Privacy Policy may be updated periodically. Continued use of this
          website constitutes acceptance of any revised terms.
        </motion.p>
      </div>
    </section>
  );
}


function PolicySection({ title, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="bg-white/80 backdrop-blur-xl border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm"
    >
      <h2 className="text-2xl font-semibold text-slate-900 mb-4">
        {title}
      </h2>
      <div className="text-slate-700 leading-relaxed text-[15px]">
        {children}
      </div>
    </motion.div>
  );
}
