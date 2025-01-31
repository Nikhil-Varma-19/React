import TextField from "@mui/material/TextField";
import { useState } from "react";
import Button from "@mui/material/Button";
import "./SearchBox.css";
export default function SearchBox() {
  const API_KEY = "d4d55511f7448e042be2d8a01efd1f55";
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  let [city, setCity] = useState("");

  let getWeather=async () => {
    let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`)
    let data=await res.json()
    
  }

  let handlingValue = (e) => {
    setCity(e.target.value);
  };
  let OnSubmitHanding = (e) => {
    e.preventDefault();
    console.log(city)
    setCity("")
    getWeather()

  };
  return (
    <div className="serachbox_container">
      <h2>Serach for the Weather</h2>
      <form onSubmit={OnSubmitHanding}>
        <TextField
          id="standard-basic"
          label="City Name"
          variant="standard"
          required
          value={city}
          onChange={handlingValue}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
