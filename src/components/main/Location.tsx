import { useState, useEffect } from "react";
import Weather from "./Weather";

//API to location
//http://api.openweathermap.org/geo/1.0/direct?q=Valparaiso&limit=5&appid=c1b3309af0cdee69a5a0ee80ad479486

function Location() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      "http://api.openweathermap.org/geo/1.0/direct?q=Valparaiso&limit=5&appid=c1b3309af0cdee69a5a0ee80ad479486"
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <div>
      {data ? (
        // Display the fetched data

        <Weather />
      ) : (
        // Display a loading message or other UI while data is being fetched
        <p>Loading...</p>
      )}
    </div>
  );
}
export default Location;
