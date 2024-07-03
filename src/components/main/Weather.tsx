import { useState, useEffect } from "react";

//API to
//https://api.openweathermap.org/data/2.5/weather?lat=-33.02&lon=-71.55&units=metric&appid=c1b3309af0cdee69a5a0ee80ad479486

function Weather() {
  //Props
  // const lat: string = props.weather[0].lat;
  // const lon: string = props.weather[0].lon;
  // const name: string = props.weather[0].name;

  const [data, setData] = useState([]);
  const name: string = data.name;

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=-33.02&lon=-71.55&units=metric&appid=c1b3309af0cdee69a5a0ee80ad479486
`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div>
      {data ? (
        // Display the fetched data

        <div>
          <h1 className="text-4xl">{name},<span className="text-3xl"> {data.sys.country}</span></h1>
          <br />
          <h2 className="text-3xl">Today is {data.main.temp}°C</h2>
        </div>
      ) : (
        // Display a loading message or other UI while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Weather;
