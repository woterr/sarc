import axios from "axios";
import { useState, useEffect } from "react";

function Projects() {
  let [projectArray, setProjectArray] = useState([]);

  async function getprojects() {
    await axios
      .get("https://entertaining-lovely-sesame.glitch.me/projects")
      .then((response) => {
        const projects = response.data;
        console.log(projects);
        setProjectArray(projects);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getprojects();
  }, []);

  return (
    <>
      <section className="section">
        <div className="container projects">
          <div
            className="container__data"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="heading">Projects</h1>
            <p
              className="description"
              style={{ marginBottom: "2rem", width: "100%" }}
            >
              A list of all the projects I've worked with or I'm currently
              working with.
            </p>
          </div>
          <div
            className="items grid"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {projectArray.map((item, i) => (
              <a href={item.link} className="item" key={i}>
                <div className="item__data">
                  <h3 className="item-title">{item.title}</h3>
                  <div>{item.description}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
