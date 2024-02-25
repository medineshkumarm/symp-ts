import React from "react";
import Navbar from "../../UI/NavBar";
import "./events.css";

interface SingleCardProps {
  image: string;
  Button: string;
  CardDescription: string;
  CardTitle: string;
  titleHref?: string;
  btnHref?: string;
}

const SingleCard: React.FC<SingleCardProps> = ({
  image,
  Button,
  CardDescription,
  CardTitle,
  btnHref,
}) => {
  return (
    <div className="mb-10 overflow-hidden rounded-lg bg-dark shadow-1 duration-300 hover:shadow-3 dark:bg-dark-2 dark:shadow-card dark:hover:shadow-3">
      <h3 className="text-2xl font-semibold mb-4 p-8 text-center text-white bg-primary dark:bg-dark-2">
        {CardTitle}
      </h3>
      <img src={image} alt="" className="w-full " />
      <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9">
        <p className="mb-7 text-base leading-relaxed text-body-color dark:text-dark-6">
          {CardDescription}
        </p>

        {Button && (
          <a
            href={btnHref || "#"}
            className="text-black bg-white inline-block rounded-full border border-gray-3 px-7 py-2 text-base font-medium text-body-color transition hover:border-primary hover:bg-primary hover:text-white dark:border-dark-3 dark:text-dark-6"
          >
            {Button}
          </a>
        )}

        {/* Added "Know More" button */}
        {/* <a
          href={btnHref || "#"}
          className="inline-block mt-4 text-sm text-primary hover:underline dark:text-primary-dark transition"
        >
          Know More
        </a> */}
      </div>
    </div>
  );
};

const TechnicalEvents: React.FC = () => {
  const technicalEventsData = [
    {
      image: "https://i.ibb.co/r2zns1m/image-01.jpg",
      CardTitle: "TECHNICAL EVENTS 1 - BOTATHON",
      CardDescription:
        "Unleash the power of automation in BOTATHON! Join forces, submit your scenarios, and witness bots come to life at IDEA SUMMIT and BOT EXPO.",
      btnHref: "/allevents",
      Button: "Register",
    },
    {
      image: "https://i.ibb.co/0nbbWM9/image-02-1.jpg",
      CardTitle: "TECHNICAL EVENTS 2 - RED BREAK GREEN",
      CardDescription:
        "Break the code, paint the town red! RED BREAK GREEN challenges your coding skills, creativity, and teamwork. Which team will shine bright with red and green ribbons?",
      btnHref: "/allevents",
      Button: "Register",
    },
    // Add more technical events as needed
  ];

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {technicalEventsData.map((event, index) => (
            <SingleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const NonTechnicalEvents: React.FC = () => {
  const nonTechnicalEventsData = [
    {
      image: "https://i.ibb.co/r2zns1m/image-01.jpg",
      CardTitle: "E-SPORT",
      CardDescription:
        "Gear up for E-SPORT! Engage in fierce battles during DUO CLASSIC and experience the ultimate TDM clash in the gaming arena. Only the best will conquer!",
      btnHref: "/allevents",
      Button: "Register",
    },
    {
      image: "https://i.ibb.co/0nbbWM9/image-02-1.jpg",
      CardTitle: " IPL AUCTION",
      CardDescription:
        "Experience the thrill of IPL AUCTION! From CLASSIC QUIZ to strategic player selections with a budget of 100 crore, it's a cricketing journey where only the champions prevail.",
      btnHref: "/allevents",
      Button: "Register",
    },
    // Add more non-technical events as needed
  ];

  return (
    <section className="bg-gray-2 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container">
        <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
          {nonTechnicalEventsData.map((event, index) => (
            <SingleCard key={index} {...event} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Events: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="pb-[120px] bg-black"></div>
      <div className="bg-logo text-white bg-cover ">
        <div className="tech-cards">
          <h1 className="text-center text-4xl underline font-bold">
            Technical Events
          </h1>
          <TechnicalEvents />
        </div>
        <div className="nontech-cards">
          <h1 className="text-center text-4xl underline font-bold">
            Non-Technical Events
          </h1>
          <NonTechnicalEvents />
        </div>
      </div>
    </>
  );
};

export default Events;
