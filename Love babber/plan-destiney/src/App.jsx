import { useState } from "react";
import Tour from "./components/Tour";
import data from "./data";
function App() {
  const [tours, settours] = useState(data);
  function removeTours(id) {
    const newTours = tours.filter((tours) => tours.id !== id);
    settours(newTours);
  }

  if (tours.length === 0) {
    return (
      <>
        <div>
          <h1 className="font-naruto text-5xl text-center font-bold m-3">
            Plan for Best
          </h1>
        </div>
        <div className="flex flex-col justify-center gap-10 items-center mt-[10rem]">
          <h1 className="text-2xl font-semibold ">No Tours Is There</h1>
          <button onClick={()=> settours(data)} className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-600 rounded-lg hover:bg-indigo-500 focus:outline-none focus:ring focus:ring-indigo-300 focus:ring-opacity-80">
            <svg
              className="w-5 h-5 mx-1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                clipRule="evenodd"
              />
            </svg>

            <span className="mx-1">Refresh</span>
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="font-naruto text-5xl text-center font-bold m-3 ">
        <h1 className="  ">Plan for Best</h1>
      </div>
      <div className="">
        <Tour tours={tours} removeTours={removeTours}></Tour>
      </div>
    </>
  );
}

export default App;
