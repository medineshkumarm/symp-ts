import "../styles.css";

export default function BGMI() {
  return (
    <>
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4 flex flex-col items-center gap-4 text-center md:gap-8 md:px-6">
          <div className="space-y-4 md:space-y-6">
            <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">Non-Technical Event 1: E-SPORT</h1>
            <p className="mx-auto max-w-[600px] text-gray-500 md:text-lg lg:text-xl xl:text-2xl dark:text-gray-400">
              Dive into the gaming arena with E-SPORT! This non-technical event promises intense battles and strategic gameplay. Are you ready to conquer?
            </p>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-4 lg:gap-8">
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold"># Dates</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Preliminary Round: [Sample Date]</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">Final Round: [Sample Date]</p>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold"># Rules and Regulations</h3>
                <ul className="list-disc pl-6">
                  <li>Number of Teams: 10 (2 per team)</li>
                  <li>Number of Rounds: 2 (Online prelims + finals)</li>
                  <li>1st Prize: ₹2,000</li>
                  <li>2nd Prize: ₹1,000</li>
                </ul>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4 sm:p-8">
              <div className="space-y-4 text-center">
                <h3 className="font-bold"># Rounds and Descriptions</h3>
                <h4 className="font-bold">Round 1 (Prelims Online): DUO CLASSIC</h4>
                <p className="text-gray-500 dark:text-gray-400">A team of two battles to participate in the final round.</p>
                <h4 className="font-bold">Round 2 (Finals): TDM CLASH</h4>
                <p className="text-gray-500 dark:text-gray-400">Team Deathmatch between 10 teams (duo).</p>
                <p className="text-gray-500 dark:text-gray-400">Only M416 allowed.</p>
                <p className="text-gray-500 dark:text-gray-400">No pistol, slide-off.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-8 md:py-16 lg:py-20">
        <div className="container px-4">
          <div className="space-y-6 prose prose-gray prose-lg dark:prose-dark">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"># Prizes & Awards</h2>
            <ul className="list-disc pl-6">
              <li>1st Prize: ₹2,000</li>
              <li>2nd Prize: ₹1,000</li>
            </ul>
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl"># Contact</h2>
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
