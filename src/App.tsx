// import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Events from "./Pages/Events/Events";
import Contact from "./Pages/Contact/Contact";
import Register from "./Pages/Register";
export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
// // // import { ModeToggle } from "./components/mode-toggle";
// // import Blog from "./UI/Blog";
// import Card from "./UI/Card";
// import Footer from "./UI/Footer";
// import { BG2 } from "./BG2";
// import Navbar from "./UI/NavBar";
// function App() {
//   return (
//     <>
//       {/* <ModeToggle/> */}
//       <Navbar />
//       <BG2/>
//       {/* <Blog /> */}
//       <Card />

//       <Footer />
//     </>
//   );
// }

// export default App;
