import { Link } from "react-router-dom";

interface Props {}

export const SampleHome: React.FC<Props> = () => {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Welcome to the Xerone
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join us for a series of engaging events conducted by Department
                of CSE, Panimalar Engineering College
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Themes
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Explore the following themes during the symposium.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">1. Techincal Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Explore innovative solutions and redefine productivity in our
                  technical events.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">2. Non-technical Events</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Ignite creativity and inspire breakthroughs in our engaging
                  non-technical activities.
                </p>
              </div>
              {/* <div className="space-y-2">
                  <h3 className="text-xl font-bold">3. Digital Transformation</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Embracing change and technology
                  </p>
                </div> */}
            </div>
          </div>
        </section>
        <div className="grid grid-cols-2 m-0 p-0">
          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Schedule
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Don't miss out on the symposium's sessions and workshops.
                  Check the full schedule.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  View Schedule
                </Link>
              </div>
            </div>
          </section>

          <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Register
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Secure your spot at the symposium. Register now to access all
                  sessions and connect with fellow attendees.
                </p>
              </div>
              <div className="flex justify-center gap-4 md:gap-6">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                  to="#"
                >
                  Register Now
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
