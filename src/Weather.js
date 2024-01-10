import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    time: "Monday, 13:23",
    humidity: "81%",
    speed: "6km/h",
    temperature: "15",
    longitude: "2.1774322",
    latitude: "41.3828939",
    feels: "9°",
    description: "scattered clouds",
    suggestion: "Don't forget the sunglasses!😎",
    imgUrl:
      "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/109/707/original/sunny.png?1704713621",
  };

  return (
    <div className="weather">
      <header>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            className="search-form-input"
          />

          <input type="submit" value="Search" className="search-form-button" />
        </form>
      </header>

      <main>
        <h1 className="city">{weatherData.city}</h1>

        <div className="data">
          <div className="weather-info-left">
            <p>
              <span className="time">{weatherData.time}</span>
              <br />
              Humidity:{" "}
              <strong className="humidity">{weatherData.humidity}</strong>
              <br />
              Wind: <strong className="speed">{weatherData.speed}</strong>
            </p>
          </div>
          <div className="temperature-container">
            <div className="icon">
              <img src={weatherData.imgUrl} alt={weatherData.decription} />
            </div>
            <div className="temperature">{weatherData.temperature}</div>
            <div className="unit">°</div>
          </div>
          <div className="weather-info-right">
            <p>
              Long:{" "}
              <strong className="longitude">{weatherData.longitude}</strong>
              <br />
              Lat: <strong className="latitude">{weatherData.latitude}</strong>
              <br />
              Feels like:{" "}
              <strong className="feels-like">{weatherData.feels}</strong>
            </p>
          </div>
        </div>
        <div className="description-suggestion-container">
          <p className="description">{weatherData.description}</p>
          <p className="suggestion">{weatherData.suggestion}</p>
        </div>
      </main>

      <footer>
        <p>
          Coded by
          <a
            href="https://github.com/elenapoddighe"
            target="_blank"
            rel="noreferrer"
          >
            Elena Poddighe
          </a>
          , open-sourced on{" "}
          <a
            href="https://github.com/elenapoddighe/weather-react-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://elenas-weather-react-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}
