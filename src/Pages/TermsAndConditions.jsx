export default function TermsConditions() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 text-gray-800">

      <h1 className="text-4xl font-bold mb-6">
        Terms & Conditions
      </h1>

      <p className="text-gray-600 mb-10">
        These Terms & Conditions govern the use of the Poeage Nexus website and
        the services offered through it. By accessing or using this website,
        you agree to comply with these terms.
      </p>

      <Section title="Use of Website">
        <p>
          The content on this website is provided for general information
          purposes only. You agree to use the website in a lawful manner and
          not engage in any activity that could harm, disrupt, or misuse the
          website or its services.
        </p>
      </Section>

      <Section title="Services Disclaimer">
        <p>
          Poeage Nexus provides manpower and HR-related services based on client
          requirements. While we strive to deliver reliable and timely services,
          we do not guarantee specific outcomes such as employment, placement
          duration, or business results.
        </p>
      </Section>

      <Section title="User Responsibilities">
        <p>
          You are responsible for ensuring that the information you provide
          through this website is accurate, complete, and up to date.
        </p>
        <p className="mt-4">
          Any misuse of the website, including providing false information or
          attempting unauthorized access, may result in termination of access.
        </p>
      </Section>

      <Section title="Intellectual Property">
        <p>
          All content on this website, including text, logos, designs, and
          graphics, is the property of Poeage Nexus unless otherwise stated.
        </p>
        <p className="mt-4">
          You may not reproduce, distribute, or use any content from this
          website without prior written permission.
        </p>
      </Section>

      <Section title="Third-Party Links">
        <p>
          This website may contain links to third-party websites for
          informational purposes. Poeage Nexus is not responsible for the
          content, privacy policies, or practices of such third-party sites.
        </p>
      </Section>

      <Section title="Limitation of Liability">
        <p>
          Poeage Nexus shall not be liable for any direct, indirect, incidental,
          or consequential damages arising from the use or inability to use
          this website or its services.
        </p>
      </Section>

      <Section title="Changes to Terms">
        <p>
          We reserve the right to update or modify these Terms & Conditions at
          any time without prior notice. Continued use of the website indicates
          acceptance of the updated terms.
        </p>
      </Section>

      <Section title="Governing Law">
        <p>
          These Terms & Conditions shall be governed by and interpreted in
          accordance with the laws applicable in India.
        </p>
      </Section>

      <Section title="Contact Information">
        <p>
          If you have any questions regarding these Terms & Conditions, please
          contact us at:
        </p>
        <p className="mt-4 font-medium">
          Email: support@poeagenexus.com
        </p>
      </Section>

      <p className="text-sm text-gray-500 mt-12">
        Last updated: January 2026
      </p>
    </section>
  );
}


function Section({ title, children }) {
  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold mb-4">
        {title}
      </h2>
      <div className="text-gray-700 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
