import data from "./data/eventsData.json";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function Cards({ event }) {
  return (
    <Card className="w-[600px]">
      <CardHeader>
        <CardTitle>{event.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Type: {event.type}</p>
        <p>No of Teams: {event.teams}</p>
        <p>Members per Team: {event.members_per_team}</p>
        <p>No of Rounds: {event.rounds}</p>
        <p>
          Prizes: 1st - {event.prizes["1st"]}, 2nd - {event.prizes["2nd"]}
        </p>
        {/* 
        {event.round_details && (
          <div>
            <h3>Round Details:</h3>
            {event.round_details.map((round, index) => (
              <div key={index}>
                <p>Name: {round.name}</p>
                <p>Type: {round.type}</p>
                <ul>
                  {round.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )} */}

        {/* {event.rules && (
          <div>
            <h3>Rules:</h3>
            <ul>
              {event.rules.map((rule, ruleIndex) => (
                <li key={ruleIndex}>{rule}</li>
              ))}
            </ul>
          </div>
        )} */}
        {/* 
        {event.judging_criteria && (
          <div>
            <h3>Judging Criteria:</h3>
            {event.judging_criteria.map((criteria, criteriaIndex) => (
              <p key={criteriaIndex}>
                Round {criteria.round}: {criteria.criteria}
              </p>
            ))}
          </div>
        )} */}
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Rules</Button>
        <Button variant="secondary" className="bg-slate-950 text-white">
          Register
        </Button>
      </CardFooter>
    </Card>
  );
}

export const EventList = () => (
  <div className="event-list">
    {data.events.map((event, index) => (
      <Cards key={index} event={event} />
    ))}
  </div>
);

// const App = () => (
//   <div className="event-list">
//     {eventData.events.map((event, index) => (
//       <Cards key={index} event={event} />
//     ))}
//   </div>
// );

// <Card className="w-[600px]">
//   <CardHeader>
//     <CardTitle>BOTATHON</CardTitle>
//   </CardHeader>
//   <CardContent>
//     {/* <h1 className="text-2xl">BOTATHON</h1> */}
//     <img src={img} alt="" width={100} height={50} />
//     <CardDescription>Deploy your new project in one-click.</CardDescription>
//   </CardContent>
//   <CardFooter className="flex justify-between">
//     <Button variant="outline">Rules</Button>
//     <Button variant="secondary" className="bg-slate-950 text-white">
//       Register
//     </Button>
//   </CardFooter>
// </Card>
