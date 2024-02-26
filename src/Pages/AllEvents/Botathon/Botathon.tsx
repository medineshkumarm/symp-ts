import '../styles.css'
export default function Botathon() {
  return (
    <>
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Technical Event 1: BOT-A-THON</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Explore the world of automation in BOTATHON! This exciting event challenges participants to solve real-world problems through innovative automation solutions.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold">Dates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Preliminary Round: [Sample Date]</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Final Round: [Sample Date]</p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold">Rules and Regulations</h3>
                <h4 className="font-bold">Round 1 (Prelims): IDEA SUMMIT</h4>
                <ul className="list-disc pl-6">
                  <li>Each team must submit a real-world scenario-based problem statement.</li>
                  <li>Propose an automation solution for the same.</li>
                  <li>Discuss its potential impact in the form of a PPT Presentation.</li>
                </ul>
                <h4 className="font-bold">Round 2 (Finals): BOT EXPO</h4>
                <ul className="list-disc pl-6">
                  <li>Selected teams showcase their bots.</li>
                  <li>Demonstrate the implementation of their proposed automation solution.</li>
                  <li>Deploy automation solutions and present them during the event.</li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold">Participants Rules</h3>
                <h4 className="font-bold">In Prelims:</h4>
                <ul className="list-disc pl-6">
                  <li>Follow the guidelines provided for the submission of the problem statement.</li>
                  <li>Ensure the automation solution is well-documented in the presentation.</li>
                  <li>Preliminary rounds are online, adhere to the specified deadlines.</li>
                </ul>
                <h4 className="font-bold">In Finals:</h4>
                <ul className="list-disc pl-6">
                  <li>Prepare to showcase the working model of the bots.</li>
                  <li>Be ready for a detailed presentation and Q&A session.</li>
                  <li>Deployment of automation solutions is part of the final evaluation.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Prizes & Awards</h2>
            <p className="text-lg lg:text-xl xl:text-2xl">The top 2 teams will be rewarded handsomely:</p>
            <ul className="list-disc pl-6">
              <li>1st Prize: ₹3,000</li>
              <li>2nd Prize: ₹2,000</li>
            </ul>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl">Contact</h2>
            <p className="text-lg lg:text-xl xl:text-2xl">
              For any inquiries or clarifications, please feel free to reach out to our event coordinators:
            </p>
            <ul className="list-disc pl-6">
              <li>[Coordinator Name 1]: [Coordinator Email/Phone]</li>
              <li>[Coordinator Name 2]: [Coordinator Email/Phone]</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}


// const Botathon = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center w-full">
//       <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
//         <h1 className="text-3xl font-semibold mb-4 text-indigo-700">Technical Event 1: BOTATHON</h1>

//         <div className="mb-4">
//           <h2 className="text-xl font-semibold mb-2">Event Details</h2>
//           <ul className="list-disc pl-4">
//             <li>Number of Teams: 10 (3 per team)</li>
//             <li>Number of Rounds: 2 (Online prelims + finals)</li>
//             <li>1st Prize: ₹3,000</li>
//             <li>2nd Prize: ₹2,000</li>
//           </ul>
//         </div>

//         <div className="mb-4">
//           <h2 className="text-xl font-semibold mb-2">Round 1 (Prelims): IDEA SUMMIT</h2>
//           <p className="text-gray-700">
//             Each team must submit a real-world scenario-based problem statement.
//             Propose an automation solution for the same.
//             Discuss its potential impact in the form of a PPT Presentation.
//           </p>
//         </div>

//         <div>
//           <h2 className="text-xl font-semibold mb-2">Round 2 (Finals): BOT EXPO</h2>
//           <p className="text-gray-700">
//             Selected teams showcase their bots.
//             Demonstrate the implementation of their proposed automation solution.
//             Deploy automation solutions and present them during the event.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Botathon;
