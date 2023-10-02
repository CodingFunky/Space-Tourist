import moon from "../../../assets/destination/image-moon.png";

function Destination() {
  return (
    <div className="destinationContainer">
      <img src={moon} alt="Moon" />
      <div className="destinationLeftContent">01 Pick Your Destination</div>

      <div className="destinationRightContent">
        <div className="destinationNav"></div>
      </div>
    </div>
  );
}

export default Destination;
