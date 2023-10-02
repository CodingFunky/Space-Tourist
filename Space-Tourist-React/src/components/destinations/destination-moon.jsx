import moon from "../../../assets/destination/image-moon.png";
import "./destination.css";
import dataFile from "../../../data.json";
import Card from "./card.jsx";
const data = dataFile.destinations;
console.log(data[0].description);

function Destination() {
  // const [currentActiveTab, setActiveTab] = useState("Moon");

  return (
    <div className="destinationContainer">
      <p className="destinationTitle">
        <span className="bold transparent">0 1</span> PICK YOUR DESTINATION
      </p>
      <section className="destinationHero">
        <img src={moon} alt="Moon" className="moonPic" />
        <div className="cardContainer">
          <div className="dNav">
            <button className="btn dNav-btn">Moon</button>
            <button className="btn dNav-btn">Mars</button>
            <button className="btn dNav-btn">Europa</button>
            <button className="btn dNav-btn">Titan</button>
          </div>
          <Card
            name={data[0].name}
            description={data[0].description}
            distance={data[0].distance}
            travel={data[0].travel}
          />
        </div>
      </section>
    </div>
  );
}

export default Destination;
