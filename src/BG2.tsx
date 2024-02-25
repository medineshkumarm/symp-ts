"use client";
import vid from "/video/intro.mp4";
import CountDown from "./UI/CountDown";

export default function BG2() {
  // You can remove the unused imports

  return (
    <div className="hero-section">
      <video className="video-background" autoPlay muted loop>
        <source src={vid} type="video/mp4" />
      </video>
      <div className="hero-content">
        <CountDown />
        {/* Add any other UI components/content as needed */}
      </div>
    </div>
  );
}


// "use client";
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { motion, useAnimation } from "framer-motion";
// import vid from "/video/intro.mp4";
// import CountDown from "./UI/CountDown";
// export function BG2() {
//   // const controls = useAnimation();

//   // useEffect(() => {
//   //   const handleScroll = () => {
//   //     const scrollY = window.scrollY;
//   //     if (scrollY > 100) {
//   //       controls.start({
//   //         opacity: 1,
//   //         scale: 1.1,
//   //         transition: { duration: 0.3 },
//   //       });
//   //     } else {
//   //       controls.start({ opacity: 1, scale: 1, transition: { duration: 0.3 } });
//   //     }
//   //   };

//   //   window.addEventListener("scroll", handleScroll);
//   //   return () => window.removeEventListener("scroll", handleScroll);
//   // }, [controls]);
//   // const [showEvents, setShowEvents] = useState(false);
//   // const navigate = useNavigate(); // Initialize navigate hook

//   // const toggleEvents = () => {
//   //   setShowEvents(!showEvents);
//   //   if (!showEvents) {
//   //     navigate("/events"); // Redirect to events page
//   //   }
//   // };

//   return (
//     <div className="hero-section">
//       <video className="video-background" autoPlay muted loop>
//         <source src={vid} type="video/mp4" />
//       </video>
//       {/* <p>Your browser does not support the video tag.</p> */}
//       <div className="hero-content">
//         <CountDown/>
//         {/* <h1>Welcome to Our Website</h1> */}
//         {/* <p>{new Date().toLocaleDateString()}</p> */}
//       </div>
//       {/* <button className="toggle-button" onClick={toggleEvents}> */}
//         {/* {showEvents ? "Hide Events" : "Show Events"} */}
//       {/* </button> */}
//     </div>
//   );
// }
