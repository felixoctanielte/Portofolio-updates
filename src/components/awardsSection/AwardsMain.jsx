import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { BsTrophyFill } from "react-icons/bs";

const awards = [
  {
    rank: "1st Place",
    competition: "Nama Lomba 1",
    organizer: "Penyelenggara",
    year: "2025",
    description: "Deskripsi singkat pencapaian dan apa yang dibangun/dilakukan.",
    color: "text-yellow-400 border-yellow-400/30 bg-yellow-400/5",
    dot: "bg-yellow-400",
  },
  {
    rank: "2nd Place",
    competition: "Nama Lomba 2",
    organizer: "Penyelenggara",
    year: "2025",
    description: "Deskripsi singkat pencapaian dan apa yang dibangun/dilakukan.",
    color: "text-slate-300 border-slate-300/30 bg-slate-300/5",
    dot: "bg-slate-300",
  },
  {
    rank: "Finalist",
    competition: "Nama Lomba 3",
    organizer: "Penyelenggara",
    year: "2024",
    description: "Deskripsi singkat pencapaian dan apa yang dibangun/dilakukan.",
    color: "text-orange border-orange/30 bg-orange/5",
    dot: "bg-orange",
  },
];

const rankLabel = {
  "1st Place": "🥇",
  "2nd Place": "🥈",
  "3rd Place": "🥉",
  Finalist: "🏅",
  Winner: "🏆",
};

const AwardsMain = () => {
  return (
    <div id="awards" className="max-w-[1200px] mx-auto px-4 mt-20">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="flex flex-col items-center mt-[100px]"
      >
        <h2 className="text-6xl text-cyan mb-10">Awards</h2>
        <p className="text-lg text-center max-w-[600px]">
          Recognitions and achievements from competitions, hackathons, and
          tech events I have participated in.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", index * 0.15)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.1 }}
            className={`relative rounded-2xl border p-6 transition-all duration-500 hover:scale-[1.02] ${award.color}`}
          >
            <div className="flex items-start justify-between mb-4">
              <BsTrophyFill className={`text-3xl ${award.color.split(" ")[0]}`} />
              <span className="text-2xl">{rankLabel[award.rank] ?? "🏆"}</span>
            </div>

            <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${award.color.split(" ")[0]}`}>
              {award.rank}
            </p>
            <h3 className="text-white font-bold text-lg leading-snug mb-1">
              {award.competition}
            </h3>
            <p className="text-white/50 text-sm mb-3">
              {award.organizer} · {award.year}
            </p>
            <p className="text-white/70 text-sm leading-relaxed">
              {award.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AwardsMain;
