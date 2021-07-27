import React, { useState } from "react";
import axios from "axios";

export const WeatherContext = React.createContext();

const Provider = (props) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
 
  //* clear teh dara state
  const handleClear = () => {
    setData([]);
  }

  //* fetch data from api
  const fetchData = async (city) => {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=87d5d61924ec8c3e83a6ee3e19227a1a`
      )
      .then((res) => {setData(res.data)})
      .catch((error) => setError(true));
    setLoading(true);
    setTimeout(() => {
      setError(false);
    }, 2000);
  };

  return (
    <WeatherContext.Provider
      value={{ fetchData,handleClear, data, loading, error }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default Provider;
