const SingleSkill = ({ imgSvg, text, color = "text-cyan" }) => {
  return (
    <div className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-white/10 bg-white/[0.03] hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300 cursor-default hover:scale-105">
      <div className={`text-4xl ${color} transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-lg`}>
        {imgSvg}
      </div>
      <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors duration-300">
        {text}
      </p>
    </div>
  );
};

export default SingleSkill;
