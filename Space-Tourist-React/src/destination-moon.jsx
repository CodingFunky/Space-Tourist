import moon from "../assets/destination/image-moon.png";

function Destination() {
  return (
    <div className="destContainer">
      <img src={moon} alt="Moon" />
      <div className="destLeftContent">01 Pick Your Destination</div>

      <div className="destRightContent"></div>
    </div>
  );
}

export default Destination;
