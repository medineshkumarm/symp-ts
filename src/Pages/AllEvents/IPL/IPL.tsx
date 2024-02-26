import "../styles.css";

export default function IPL() {
  return (
    <>
    <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4 flex flex-col items-center gap-4  md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              Technical Event 2: IPL AUCTION
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400 text-center">
              In the first round, showcase your cricket knowledge in an exciting online cricket quiz. The top 10 performing teams move on to the second round, where teams bid for players using virtual points. The team with the highest accumulated points from successful bids emerges as the ultimate winner!
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-1 gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 ">
                <h3 className="font-bold"> Dates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Preliminary Round: March 7th
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Final Round: March 9th
                </p>
              </div>
            </div>
            <div className="grid">
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="space-y-4 ">
                  <h3 className="font-bold"> Rules and Regulations</h3>
                  <h4 className="font-bold">Round 1 (Preliminary):</h4>
                  <ul className="list-disc pl-6">
                    <li>Number of Teams: 10 (2 per team)</li>
                    <li>Number of Rounds: 2 (Online prelims + finals)</li>
                    <li>1st Prize: ₹2,000</li>
                    <li>2nd Prize: ₹1,000</li>
                  </ul>
                  <h4 className="font-bold">
                    Round 1 (Prelims): CRIC - QUIZ
                  </h4>
                  <ul className="list-disc pl-6">
                    <li>Engage in a dynamic online cricket quiz featuring 20 questions, testing your cricket knowledge.</li>
                    <li>Each team has a 30-minute time limit to answer questions accurately and swiftly.</li>
                  </ul>
                  <h4 className="font-bold">
                    Round 2 (Finals): IPL AUCTION
                  </h4>
                  <ul className="list-disc pl-6">
                    <li>Each team is given a budget of 50 crore rupees for the final round.</li>
                    <li>In this round, teams are required to select 11 players, with a specific composition of 4 foreign players and 7 Indian players.</li>
                    <li>Each player is assigned a certain number of points.</li>
                  </ul>
                </div>
              </div>
              <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
                <div className="space-y-4 ">
                  <h3 className="font-bold"> Judging Criteria</h3>
                  <h4 className="font-bold">Round 1:</h4>
                  <ul className="list-disc pl-6">
                    <li>Cumulative points from correctly answered questions.</li>
                    <li>In the event of a tie between two teams with the same points, priority is given to the team that completed the quiz first.</li>
                  </ul>
                  <h4 className="font-bold">Round 2:</h4>
                  <ul className="list-disc pl-6">
                    <li>The total points for all players in each team are calculated, and the team with the highest points is declared the winner of the event.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-xl md:text-3xl lg:text-4xl xl:text-5xl">
              Prizes & Awards
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              The top 2 teams will be rewarded handsomely:
            </p>
            <ul className="list-disc pl-6">
              <li>1st Prize: ₹2,000</li>
              <li>2nd Prize: ₹1,000</li>
            </ul>
            <h2 className="text-xl md:text-3xl lg:text-xl xl:text-4xl">
              Contact
            </h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              For any inquiries or clarifications, please feel free to reach out
              to our event coordinators:
            </p>
            <ul className="list-disc pl-6">
              <li>
                Coordinator 1: [Coordinator Name 1] - [Coordinator Email/Phone]
              </li>
              <li>
                Coordinator 2: [Coordinator Name 2] - [Coordinator Email/Phone]
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
