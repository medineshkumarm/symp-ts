import Card from "@/UI/Card";
import Navbar from "../../UI/NavBar";
import "./events.css";
function Events() {
  return (
    <>
      <Navbar />
      <div className="pb-[120px] bg-black"></div>
      <div className="bg-logo text-white bg-cover ">
        <div className="tech-cards">
          <h1 className="text-center text-4xl underline font-bold">
            Technical Rounds
          </h1>
          <Card />
        </div>
        <div className="nontech-cards">
          <h1 className="text-center text-4xl underline font-bold">
            Technical Rounds
          </h1>
          <Card />
        </div>
      </div>
    </>
  );
}

export default Events;
