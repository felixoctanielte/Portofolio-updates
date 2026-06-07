import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsBriefcaseFill } from "react-icons/bs";

const internships = [
  {
    role: "Fullstack Developer Intern",
    company: "PT Rigo Inovasi Digital",
    period: "Dec 2026 - Apr 2026",
    location: ", Jl. Poris Paradise Eksklusif No.A4 No. 23 Ruko Lantai 2, Poris Gaga, Kec. Batuceper, Kota Tangerang, Banten 15148",
    description: [
      "Developed and maintained a high-performance web application using Next.js and TypeScript, ensuring type safety and optimal frontend rendering",
      "Architected and managed database schemas and server-side logic using Prisma ORM and Supabase, focusing on efficient data retrieval and real-time synchronization.",
      "Implemented containerization and deployment strategies using Docker, streamlining the development workflow and ensuring consistent environments across staging and production.",
      "Collaborated with cross-functional teams using Git for version control and Jira for project management, contributing to agile development processes and ensuring timely delivery of features."
    ],
    tech: ["Supabase", "Docker", "Tailwind CSS", "TypeScript", "Next js", "Git", "Jira"],
  },
  {
    role: "Software Engineering Intern",
    company: "PT VEF Solution Indonesia",
    period: "Feb 2026 - Jun 2026",
    location: " Ruko Graha  Boulevard Summarecon Serpong, Jln Gading Serpong Boulevard BVA1, Curug Sangereng, Kecamatan  Kelapa Dua, Kabupaten Tangerang, Banten 15810",
    description: [
      "Developed and maintained a high-performance web application using Python and the Frappe framework, ensuring efficient backend processing and seamless integration with the frontend.",
      "Designed and optimized database schemas using MariaDB, focusing on data integrity and query performance to support the application's scalability.",
      "Implemented version control and collaborative development practices using Git, contributing to a streamlined workflow and effective team communication.",
      "Participated in project management and task tracking using Asana, ensuring timely completion of assigned tasks and contributing to the overall success of the project."
    ],
    tech: ["Python", "Javascript", "Mariadb", "Framework Frappe", "Github", "Asana"],
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
