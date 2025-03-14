import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  // const handleKeyPress = (e) => {
  //   if (e.key === "+") {
  //     setCount((prevCount) => prevCount + 1);
  //   }
  //   if (e.key === "-") {
  //     setCount((prevCount) => prevCount - 1);
  //   }
  //   if (e.key == "Backspace") {
  //     setCount(resetHandler);
  //   }
  // };

  useEffect(() => {

    const keyHandler = (e) => {
      if (e.key === "+") {
        setCount((prevCount) => prevCount + 1);
      }
      if (e.key === "-") {
        setCount((prevCount) => prevCount - 1);
      }
      if(e.key == "Backspace" || e.key == " "){
        setCount(resetHandler)
      }
    }
    document.addEventListener('keydown', keyHandler);
    return () => {
      document.removeEventListener('keydown', keyHandler);
    }
  }, [])

  const resetHandler = () => {
    setCount(0);
  };

  const decrementHandler = () => {
    setCount(prev => prev-1);
  };

  const incrementHandler = () => {
    setCount(prev => prev+1);
  };
  return (
    <>
      <div
        className="bg-slate-700 min-h-screen text-white flex flex-col gap-10 items-center justify-center  "
        
      >
        <div className="font-bold text-2xl">Increment & Decrement</div>
        <div className=" flex gap-10 justify-center text-black bg-white p-5 rounded-md border-double border-2 border-sky-500"
        // onKeyDown={handleKeyPress} tabIndex={0}
        >
          <button
            onClick={decrementHandler}
            className="font-extrabold text-2xl border-r-2 w-20 border-black "
          >
            -
          </button>
          <div className="font-bold text-2xl">{count}</div>
          <button
            onClick={incrementHandler}
            className=" font-extrabold text-2xl border-l-2 w-20 border-black"
          >
            +
          </button>
        </div>
        <button
          onClick={resetHandler}
          className="bg-slate-900 font-bold text-xl p-2 rounded-md mx-7 border-solid border-white border-2"
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default App;
