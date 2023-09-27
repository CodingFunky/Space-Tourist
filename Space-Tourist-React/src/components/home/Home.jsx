import Navbar from "../navbar/Navbar";
import "./style.css";
function Home() {
  return (
    <div className="homeContainer">
      <div className="homeLeftContent">
        {" "}
        <span className="barlow-condensed">So, you want to travel to</span>{" "}
        <span className="bellefair">Space</span>{" "}
        <p className="barlow">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="homeRightContent">
          <button type="button">Explore</button>
      </div>
    </div>
  );
}

export default Home;
