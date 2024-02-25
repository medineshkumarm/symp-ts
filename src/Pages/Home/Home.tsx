import Footer from "../../UI/Footer";
import Navbar from "../../UI/NavBar";
import General from "@/UI/General";
import { Carousels } from "@/UI/Carousels";
import BG2 from "@/BG2";
function Home() {
  return (
    <>
      <Navbar />
      <BG2 />
      <General />
      {/* <Card /> */}
      <Carousels/>
      <Footer />
    </>
  );
}

export default Home;
