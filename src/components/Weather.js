import { useContext } from "react";
import { WeatherContext } from "./Provider";

const Weather = () => {
  const { data,loading,error} = useContext(WeatherContext);
  const date = new Date();
  return (
    <div>
      {loading &&
        error === false &&
        Object.keys(data).length !==
          0 && (
            <div className="weatherInfo">
              <p className="city">{data.name ? data.name : null}</p>
              <p>
                {data.main?.temp}
                <span>&#176;</span>
              </p>
              <p className="description">
                {data.weather ? data.weather[0].description : null}
              </p>
              <p className="date">{date.toDateString()}</p>
              <div className="info">
                <p> Wind {data.wind?.deg} m/s</p>
                <p> pressure {data.main?.pressure} hpa</p>
                <p>Humidity {data.main?.humidity} %</p>
                <p>clouds {data.clouds?.all}%</p>
              </div>
            </div>
          )}
    </div>
  );
};

export default Weather;
