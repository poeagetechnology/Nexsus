import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Users,
  MapPin,
  Briefcase,
  Calendar,
  Upload,
} from "lucide-react";

const industries = ["Manufacturing", "IT", "Construction", "Retail", "Healthcare", "Others"];
const workerTypes = ["Skilled", "Semi-skilled", "Unskilled"];
const durations = ["Temporary", "Permanent", "Contract"];
const roles = ["Technician", "Operator", "Engineer", "Helper", "Supervisor"];

const sectionAnim = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Hire() {
  const [form, setForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    industry: "",
    workersCount: "",
    workerType: "",
    jobRoles: [],
    location: "",
    duration: "",
    startDate: "",
    salaryRange: "",
    requirements: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  function handleChange(e) {
    const { name, value, type, files } = e.target;
    setForm({ ...form, [name]: type === "file" ? files[0] : value });
  }

  function toggleRole(role) {
    setForm(prev => ({
      ...prev,
      jobRoles: prev.jobRoles.includes(role)
        ? prev.jobRoles.filter(r => r !== role)
        : [...prev.jobRoles, role],
    }));
  }

  function validate() {
    let err = {};
    if (!form.companyName) err.companyName = "Required";
    if (!form.contactPerson) err.contactPerson = "Required";
    if (!form.email) err.email = "Required";
    if (!form.phone) err.phone = "Required";
    if (!form.industry) err.industry = "Required";
    if (!form.workersCount) err.workersCount = "Required";
    if (!form.workerType) err.workerType = "Required";
    if (!form.location) err.location = "Required";
    if (!form.duration) err.duration = "Required";
    if (form.jobRoles.length === 0) err.jobRoles = "Select at least one role";
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;
    setRefId(`PNX-${Date.now().toString().slice(-6)}`);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="max-w-xl mx-auto my-32 bg-white shadow-2xl rounded-3xl p-12 text-center"
      >
        <h2 className="text-3xl font-bold text-green-600">Request Received</h2>
        <p className="mt-4 text-gray-600">Reference ID</p>
        <p className="mt-2 text-xl font-semibold">{refId}</p>
      </motion.div>
    );
  }

  return (
    <>
      <section className="py-28 bg-gradient-to-br from-slate-50 via-white to-cyan-50 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-extrabold tracking-tight"
        >
          Workforce Request Portal
        </motion.h1>
        <p className="mt-5 text-gray-600 max-w-xl mx-auto">
          Enterprise-grade manpower deployment, tailored to your operational needs.
        </p>
      </section>

      <motion.form
        onSubmit={handleSubmit}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-6 py-20"
      >
        <div className="space-y-16">

          <motion.section variants={sectionAnim} className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-10">
            <Header icon={<Building2 />} title="Company Information" />
            <Grid>
              <Input label="Company Name" name="companyName" value={form.companyName} onChange={handleChange} error={errors.companyName} />
              <Input label="Contact Person" name="contactPerson" value={form.contactPerson} onChange={handleChange} error={errors.contactPerson} />
              <Input label="Email" name="email" value={form.email} onChange={handleChange} error={errors.email} />
              <Input label="Phone" name="phone" value={form.phone} onChange={handleChange} error={errors.phone} />
            </Grid>
          </motion.section>

          <motion.section variants={sectionAnim} className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-10">
            <Header icon={<Users />} title="Workforce Requirements" />
            <Grid>
              <Select label="Industry" name="industry" value={form.industry} options={industries} onChange={handleChange} />
              <Input label="Number of Workers" name="workersCount" type="number" value={form.workersCount} onChange={handleChange} />
              <Select label="Worker Type" name="workerType" value={form.workerType} options={workerTypes} onChange={handleChange} />
            </Grid>

            <div className="mt-8">
              <p className="font-medium mb-3">Job Roles</p>
              <div className="flex flex-wrap gap-3">
                {roles.map(r => (
                  <button
                    type="button"
                    key={r}
                    onClick={() => toggleRole(r)}
                    className={`px-4 py-2 rounded-full border transition ${
                      form.jobRoles.includes(r)
                        ? "bg-cyan-600 text-white border-cyan-600"
                        : "hover:bg-cyan-50"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>
          </motion.section>

          <motion.section variants={sectionAnim} className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-10">
            <Header icon={<MapPin />} title="Deployment Details" />
            <Grid>
              <Input label="Location" name="location" value={form.location} onChange={handleChange} />
              <Select label="Duration" name="duration" value={form.duration} options={durations} onChange={handleChange} />
              <Input label="Start Date" name="startDate" type="date" onChange={handleChange} />
              <Input label="Salary Range (Optional)" name="salaryRange" onChange={handleChange} />
            </Grid>
          </motion.section>

          <motion.section variants={sectionAnim} className="bg-white/80 backdrop-blur-xl border shadow-xl rounded-3xl p-10">
            <Header icon={<Briefcase />} title="Additional Information" />
            <textarea
              name="requirements"
              placeholder="Additional requirements"
              onChange={handleChange}
              className="w-full rounded-xl border px-4 py-4 h-32 border-gray-400  focus:ring-2 outline-none focus:ring-cyan-500 text-white"
            />

            <div className="mt-6 flex items-center gap-4">
              <Upload className="text-gray-500" />
              <input type="file" onChange={handleChange} />
            </div>
          </motion.section>

          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="px-16 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-full font-semibold shadow-2xl"
            >
              Submit Workforce Request
            </motion.button>
          </div>
        </div>
      </motion.form>
    </>
  );
}


function Header({ icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-cyan-100 text-cyan-600 rounded-xl">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid md:grid-cols-2 gap-6">{children}</div>;
}

function Input({ label, error, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        {...props}
        className="mt-1 w-full rounded-xl border px-4 py-3 focus:ring-2 focus:ring-cyan-500 outline-none border-gray-400"
      />
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <select
        {...props}
        className="mt-1 w-full rounded-xl border px-4 py-3  focus:ring-2 focus:ring-cyan-500 outline-none border-gray-400"
      >
        <option value="">Select</option>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
