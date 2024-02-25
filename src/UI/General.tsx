import React from "react";

export default function General() {
  return (
    <main className="h-[40rem] flex justify-center items-center">
      <div className="bg-white shadow-2xl rounded-xl p-6">
        <h1 className="text-4xl font-semibold mb-4">General Info</h1>
        <div className="border-t pt-4">
          <div className="flex gap-10">
            <image
              href="./logo.jpg"
              height={100}
              width={100}
              className="p-[200px] bg-black"
            />
            <div>
              <h1 className="text-2xl underline">General Instruction</h1>
              <p className="mt-5 max-w-xl text-xl text-gray-700">
                We are excited to announce an upcoming event at Panimalar
                Engineering College, organized by the Computer Science And
                Engineering Department. Please mark your calendars for,
              </p>
              <div className="mt-8">
                <span className="space-y-1 text-lg">
                  <p className="">
                    <h1 className="text-xl mb-2 font-semibold">
                      {" "}
                      EVENT DETAILS :{" "}
                    </h1>
                    <span className="font-semibold text-zinc-900">
                      Theme :{" "}
                    </span>
                    Artificial Intelligence and Data
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">
                      Science Venue :
                    </span>{" "}
                    Department of AI & DS, Panimalar Engineering
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">
                      College Timing :
                    </span>{" "}
                    All participants should report at venue by 8:30am.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">
                      Registration :{" "}
                    </span>
                    No on-spot registration will not be available.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">
                      Prizes :{" "}
                    </span>
                    Exciting cash prizes for winners and runners for each event.
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}