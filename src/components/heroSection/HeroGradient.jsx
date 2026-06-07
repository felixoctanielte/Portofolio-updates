const HeroGradient = () => {
  return (
    <div className="pointer-events-none">
      {/* Cyan blob — top right */}
      <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full bg-cyan/10 blur-[120px] -z-10 animate-pulse" />

      {/* Orange blob — top left */}
      <div className="absolute top-[5%] left-[-80px] w-[400px] h-[400px] rounded-full bg-orange/8 blur-[100px] -z-10 opacity-60" />

      {/* Subtle grid overlay */}
      <div
        className="fixed inset-0 -z-20 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(21,209,233,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(21,209,233,0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />
    </div>
  );
};

export default HeroGradient;
