import Footer from "../../UI/Footer";
import { BG2 } from "../../BG2";
import Navbar from "../../UI/NavBar";
import General from "@/UI/General";
function Home() {
  return (
    <>
      <Navbar />
      <BG2 />
      <General />
      {/* <Card /> */}
      <Footer />
    </>
  );
}

export default Home;
