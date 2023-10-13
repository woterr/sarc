import React from "react";
import ReactDOM from "react-dom";
import { useEffect, useState } from "react";

function Home() {
  const time = new Date().toLocaleTimeString("en-US", {
    timeZone: "America/Los_Angeles",
  });

  const date = new Date().toLocaleDateString("en-US", {
    timeZone: "America/Los_Angeles",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const [currentTime, setCurrentTime] = useState(time);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString("en-US", {
      timeZone: "America/Los_Angeles",
    });
    setCurrentTime(time);
  };
  setInterval(updateTime, 1000);

  const [weatherData, setWeatherData] = useState("");
  async function getWeather() {
    const api_call = await fetch(
      `//api.openweathermap.org/data/2.5/weather?lat=34.0522&lon=-118.2437&appid=5744881b4415d03996967b53a29b3eed&units=metric`
    );
    const data = await api_call.json();
    const dataArr = [
      "Los Angeles",
      data.weather[0].description,
      Math.round(data.main.temp * 1.8 + 32) + "°F",
      data.main.temp + "°C",
    ];
    setWeatherData(dataArr);
  }

  useEffect(() => {
    setWeatherData(getWeather());
  }, []);

  return (
    <>
      <section className="section">
        <div className="container home">
          <div
            className="container__data"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="heading">raj</h1>
            <p className="description">
              17-year-old <span>community manager</span> and community builder
              from California
            </p>
            <div className="time">
              <i className="bx bx-time-five"></i>
              <span className="date-time">
                {date} • {currentTime}
              </span>
            </div>
            <div
              className="weather "
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="200"
            >
              <i className="bx bx-cloud"></i>
              <span className="weather-t">
                It is currently
                <span className="c-f"> {weatherData[2]}</span>
                <span className="w-i" style={{ textTransform: "capitalize" }}>
                  {" "}
                  ({weatherData[1]})
                </span>{" "}
                in
                <span className="w-l"> {weatherData[0]}</span>
              </span>
            </div>
          </div>
          <div
            className="socials"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <a href="https://twitter.com/sarrcc">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://discord.com/users/261816312462835712">
              <i className="bx bxl-discord-alt"></i>
            </a>
            <a href="https://www.instagram.com/sarc/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href=" https://www.twitch.tv/raaj">
              <svg
                fill="#ffffff"
                viewBox="0 0 256 256"
                id="Flat"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path d="M208,32H48A16.01833,16.01833,0,0,0,32,48V192a16.01833,16.01833,0,0,0,16,16H64v32a7.99949,7.99949,0,0,0,13.12109,6.14551L122.89648,208h42.207a16.03033,16.03033,0,0,0,10.24316-3.709l42.896-35.7461A15.958,15.958,0,0,0,224,156.253V48A16.01833,16.01833,0,0,0,208,32ZM128,136a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Z"></path>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
