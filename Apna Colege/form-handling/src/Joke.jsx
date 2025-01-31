import React, { useState,useEffect } from "react";
import "./Joke.css"
// export default function Joke() {
//   const [joke, setJoke] = useState({});
//   const url = "https://official-joke-api.appspot.com/random_joke";
//   const getNewJoke = async () => {
//     let res = await fetch(url);
//     let data = await res.json();
//     setJoke({
//       setup: data.setup,
//       punchline: data.punchline,
//     });
//   };

//   useEffect(() => { 
//     getNewJoke()
//   }, []);
//   return (
//     <div>
//       <h1>Joke</h1>
//       <h2>{joke.setup}</h2>
//       <h3>{joke.punchline}</h3>
//       <button onClick={getNewJoke}>Generate Joke</button>
//     </div>
//   );
// }

export default function Joke() {
  const [joke, setJoke] = useState({ setup: "", punchline: "" });
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 
  const url = "https://official-joke-api.appspot.com/random_joke";

 
  const getNewJoke = async () => {
    setLoading(true);
    setError(null); 
    try {
      let res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch joke"); 
      let data = await res.json();
      setJoke({
        setup: data.setup,
        punchline: data.punchline,
      });
    } catch (err) {
      setError("Failed to fetch joke. Please try again later.");
    } finally {
      setLoading(false); 
    }
  };


  useEffect(() => {
    getNewJoke(); 
  }, []);

  return (
    <div>
      <h1>Joke</h1>
      {loading ? (
        <p>Loading...</p> 
      ) : error ? (
        <p>{error}</p> 
      ) : (
        <>
          <h2>{joke.setup}</h2>
          <h3>{joke.punchline}</h3>
        </>
      )}
      <button onClick={getNewJoke} disabled={loading}>
        {loading ? "Loading..." : "Generate New Joke"}
      </button>
    </div>
  );
}
