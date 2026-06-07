import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsBriefcaseFill } from "react-icons/bs";

const internships = [
  {
    role: "Frontend Developer Intern",
    company: "Nama Perusahaan 1",
    period: "Jan 2025 - Apr 2025",
    location: "Jakarta, Indonesia",
    description: [
      "Mengembangkan fitur UI menggunakan React.js dan Tailwind CSS",
      "Berkolaborasi dengan tim backend untuk integrasi REST API",
      "Melakukan code review dan testing untuk memastikan kualitas kode",
      "Berkontribusi dalam sprint planning dan daily standup Agile",
    ],
    tech: ["React", "Tailwind CSS", "TypeScript", "Git"],
  },
  {
    role: "Fullstack Developer Intern",
    company: "Nama Perusahaan 2",
    period: "Jun 2025 - Agu 2025",
    location: "Remote",
    description: [
      "Membangun fitur fullstack menggunakan Next.js dan Node.js",
      "Merancang dan mengimplementasikan skema database PostgreSQL",
      "Mengembangkan REST API dengan autentikasi JWT",
      "Mengoptimalkan performa aplikasi dan memimpin dokumentasi teknis",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
];

const InternshipMain = () => {
  return (
    <div id="internship" className="max-w-[1200px] mx-auto px-4 mt-20">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mt-[100px]"
      >
        <h2 className="text-6xl text-cyan mb-10">Internship</h2>
        <p className="text-lg text-center max-w-[600px]">
          Work experience as an intern, contributing to real-world projects and
          growing alongside professional teams.
        </p>
      </motion.div>

      <div className="flex flex-col gap-8 mt-16 relative">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-cyan/20 lg:block sm:hidden" />

        {internships.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("right", index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="relative flex gap-8 items-start"
          >
            {/* Timeline dot */}
            <div className="lg:flex sm:hidden flex-shrink-0 w-12 h-12 rounded-full bg-black border-2 border-cyan flex items-center justify-center z-10">
              <BsBriefcaseFill className="text-cyan" size={18} />
            </div>

            {/* Card */}
            <div className="flex-1 border border-white/10 bg-white/5 hover:border-cyan/40 transition-all duration-500 rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-cyan">{item.role}</h3>
                  <p className="text-orange font-semibold mt-1">{item.company}</p>
                  <p className="text-white/50 text-sm mt-1">
                    {item.period} · {item.location}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 mb-5">
                {item.description.map((point, i) => (
                  <li key={i} className="flex gap-2 text-white/75 text-sm">
                    <span className="text-cyan mt-1 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs rounded-full border border-cyan/30 text-cyan/80 bg-cyan/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default InternshipMain;
