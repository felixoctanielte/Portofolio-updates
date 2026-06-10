const NavbarLogo = () => {
  return (
    <div className="logo-fire-wrap  relative h-16 w-auto cursor-pointer select-none">
      {/* <div className="flame-glow absolute inset-0 z-0" /> */}
      {/* <div className="flame-base absolute inset-0 z-0" /> */}
      {/* <div className="flame-mid absolute inset-0 z-0" /> */}
      {/* <div className="flame-tip absolute inset-0 z-0" /> */}
      <img
        src="images/logo.png"
        alt="Felix Octaniel Logo"
        className="relative z-10 h-16 w-auto object-contain"
      />
    </div>
  );
};

export default NavbarLogo;
