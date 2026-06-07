import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsPatchCheckFill } from "react-icons/bs";

const courses = [
  {
    title: " AWS re/Start Batch 13 program with Orbit Future Academy ",
    platform: "Orbit Future Academy",
    category: "Cloud Computing",
    year: "2025",
    credential: "",
  },
  {
    title: "HCIA-openGauss V1.0 Course",
    platform: "Huawei Learning",
    category: "Database",
    year: "2025",
    credential: "20250715000110",
  },
  {
    title: "HCIA-AI V3.5 Course",
    platform: "Huawei Learning",
    category: "AI/ML",
    year: "2025",
    credential: "EBG20250529012234",
  },
  {
    title: "PIJAK in collaboration with IBM SkillsBuild",
    platform: "Yayasan Dicoding Indonesia",
    category: "AI",
    year: "2026",
    credential: "",
  },
];

const categoryColor = {
  "Web Development": "text-cyan border-cyan/30 bg-cyan/10",
  "Cloud Computing": "text-blue-400 border-blue-400/30 bg-blue-400/10",
  "UI/UX Design": "text-purple-400 border-purple-400/30 bg-purple-400/10",
  "Data Science": "text-green-400 border-green-400/30 bg-green-400/10",
  "Mobile Development": "text-orange border-orange/30 bg-orange/10",
  Blockchain: "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
};

const CoursesMain = () => {
  return (
    <div id="courses" className="max-w-[1200px] mx-auto px-4 mt-20">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mt-[100px]"
      >
        <h2 className="text-6xl text-cyan mb-10">Courses & Training</h2>
        <p className="text-lg text-center max-w-[600px]">
          Certifications, online courses, and training programs I have
          completed to continuously sharpen my skills.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        {courses.map((course, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className="rounded-2xl border border-white/10 bg-white/5 hover:border-cyan/40 transition-all duration-500 p-5 flex flex-col gap-3 hover:scale-[1.02]"
          >
            <BsPatchCheckFill className="text-cyan text-2xl" />

            <div>
              <h3 className="text-white font-bold text-sm leading-snug">
                {course.title}
              </h3>
              <p className="text-white/50 text-xs mt-1">{course.platform}</p>
              <p className="text-white/40 text-xs">{course.year}</p>
            </div>

            <span
              className={`self-start text-xs px-2 py-1 rounded-full border font-medium ${
                categoryColor[course.category] ??
                "text-white/60 border-white/20 bg-white/5"
              }`}
            >
              {course.category}
            </span>

            {course.credential && (
              <a
                href={course.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-cyan hover:underline mt-auto"
              >
                View Certificate →
              </a>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default CoursesMain;
