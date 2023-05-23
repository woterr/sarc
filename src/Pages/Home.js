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
                <span className="c-f">
                  {" "}
                  {weatherData[2]} - ({weatherData[3]})
                </span>
                <span className="w-i"> ({weatherData[1]})</span> in
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
            <a href="https://twitter.com/SarcBZ">
              <i className="bx bxl-twitter"></i>
            </a>
            <a href="https://discord.gg/raj">
              <i className="bx bxl-discord-alt"></i>
            </a>
            <a href="https://www.instagram.com/sarc/">
              <i className="bx bxl-instagram-alt"></i>
            </a>
            <a href=" https://www.twitch.tv/raaj">
              <i className="bx bxl-twitch"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
