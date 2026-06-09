import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeImage = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="relative flex-shrink-0"
    >
      {/* Outer glow */}
      <div className="absolute -inset-6 bg-cyan/10 rounded-3xl blur-2xl -z-10 animate-pulse" />

      {/* KTM Card */}
      <div className="w-[270px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl shadow-cyan/10 relative bg-gradient-to-b from-[#0a1a35] to-[#0E2148]">

        {/* Card shimmer overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.03] to-cyan/5 pointer-events-none z-10" />

        {/* Header */}
        <div className="bg-gradient-to-r from-cyan/15 to-blue-600/15 border-b border-white/10 px-5 py-3 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan/20 border border-cyan/40 flex items-center justify-center flex-shrink-0">
            <span className="text-cyan text-[10px] font-extrabold tracking-tight">UMN</span>
          </div>
          <div>
            <p className="text-white text-xs font-bold tracking-wider">Universitas Multimedia Nusantara</p>
            <p className="text-white/40 text-[10px] uppercase tracking-widest">Student Card</p>
          </div>
        </div>

        {/* Photo */}
        <div className="flex flex-col items-center px-6 pt-6 pb-4 gap-4">
          <div className="relative">
            <div className="w-[110px] h-[130px] rounded-xl overflow-hidden border-2 border-cyan/40 shadow-lg shadow-cyan/20">
              <img
                src="images/about.png"
                alt="Felix Octaniel"
                className="w-full h-full object-cover object-top"
              />
            </div>
            {/* Active dot */}
            <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-green-400 border-2 border-[#0E2148] shadow-md shadow-green-400/50" />
          </div>

          {/* Name */}
          <div className="text-center">
            <h3 className="text-white font-bold text-base leading-tight">Felix Octaniel</h3>
            <p className="text-cyan/80 text-sm">Telaumbanua</p>
          </div>

          <div className="w-full h-[1px] bg-white/10" />

          {/* Info rows */}
          <div className="w-full flex flex-col gap-2 text-xs">
            {[
              { label: "Major", value: "Informatics" },
              { label: "Year", value: "3rd Year · 2023" },
              { label: "Campus", value: "UMN Tangerang" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center">
                <span className="text-white/40 uppercase tracking-widest text-[10px]">{item.label}</span>
                <span className="text-white/80 font-medium">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="w-full h-[1px] bg-white/10" />

          {/* Badges */}
          <div className="flex flex-wrap gap-1.5 justify-center pb-1">
            {["Full Stack", "AI Engineer", "Blockchain"].map((tag, i) => (
              <span
                key={i}
                className="px-2.5 py-0.5 text-[10px] rounded-full border border-cyan/25 bg-cyan/10 text-cyan/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Footer barcode-style */}
        <div className="border-t border-white/10 px-5 py-2.5 flex items-center justify-between">
          <div className="flex gap-[2px]">
            {Array.from({ length: 18 }).map((_, i) => (
              <div
                key={i}
                className="bg-white/20 rounded-sm"
                style={{
                  width: i % 3 === 0 ? "3px" : "2px",
                  height: i % 5 === 0 ? "14px" : "10px",
                }}
              />
            ))}
          </div>
          <span className="text-white/25 text-[9px] tracking-widest">UMN-2022</span>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutMeImage;
