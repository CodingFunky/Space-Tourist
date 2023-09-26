import logo from "../assets/shared/logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="Logo" />
      <div className="home">00 Home</div>
      <div className="destination">01 Destination</div>
      <div className="crew">02 Crew</div>
      <div className="technology">03 Technology</div>
    </div>
  );
}

export default Navbar;
