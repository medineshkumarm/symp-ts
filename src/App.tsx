import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Register from "./Pages/Register";
import AllEvents from "./Pages/AllEvents/AllEvents";
import Botathon from "./Pages/AllEvents/Botathon/Botathon";
import FlapCard from "./UI/FlapCard/FlapCard";
import RPG from "./Pages/AllEvents/RPG/RPG";
import IPL from "./Pages/AllEvents/IPL/IPL";
import BGMI from "./Pages/AllEvents/BGMI/BGMI";

import { SampleHome } from "./components/component/SampleHome";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/allevents" element={<AllEvents />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
          <Route path="/register" element={<Register />} />
          {/* <Route path="/demo" element={<CardGrid />} /> */}
          <Route path="/f" element={<FlapCard />} />
          <Route path="/bot" element={<Botathon />} />
          <Route path="/rpg" element={<RPG />} />
          <Route path="/ipl" element={<IPL />} />
          <Route path="/bgmi" element={<BGMI />} />
          <Route path="/sam" element={<SampleHome/>} />


        </Routes>
      </Router>
    </>
  );
}
