const NavbarLogo = () => {
  return (
    <div className="logo-fire-wrap h-16 w-auto cursor-pointer select-none">
      <div className="flame-glow" />
      <div className="flame-base" />
      <div className="flame-mid" />
      <div className="flame-tip" />
      <img
        src="images/logo.png"
        alt="Felix Octaniel Logo"
        className="h-16 w-auto object-contain"
      />
    </div>
  );
};

export default NavbarLogo;
