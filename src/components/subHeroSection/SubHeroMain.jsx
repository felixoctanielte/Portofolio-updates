const stats = [
  { number: "12+", label: "Projects" },
  { number: "2", label: "Internships" },
  { number: "3+", label: "Years Exp" },
  { number: "4", label: "Certifications" },
];

const SubHeroMain = () => {
  return (
    <div className="w-full border-y border-white/10 bg-white/[0.03] backdrop-blur-sm py-8">
      <div className="max-w-[1200px] mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-1 group">
            <span className="text-4xl font-extrabold text-cyan group-hover:scale-110 transition-transform duration-300">
              {stat.number}
            </span>
            <span className="text-sm uppercase tracking-widest text-white/50">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubHeroMain;
