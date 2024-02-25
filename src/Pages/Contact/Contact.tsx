import { EventList } from "@/Cards";
import Navbar from "../../UI/NavBar";
function Contact() {
  return (
    <>
      <Navbar />
      <div className="pt-[150px] pl-[20px] ">
        {/* <Cards /> */}
        <EventList/>
      </div>
    </>
  );
}

export default Contact;
