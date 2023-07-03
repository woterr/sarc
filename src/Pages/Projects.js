import axios from "axios";
import { useState, useEffect } from "react";

function Projects() {
  let [projectArray, setProjectArray] = useState([]);

  async function getprojects() {
    await axios
      .get("https://sarc-backend-7m71v47ox-sarcc.vercel.app/projects")
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
            // {projectArray.map((item, i) => (
            //   <a href={item.link} className="item" key={i}>
            //     <div className="item__data">
            //       <h3 className="item-title">{item.title}</h3>
            //       <div>{item.description}</div>
            //     </div>
            //   </a>
            // ))}
              <a href="https://stickmansaga.com/" className="item">
                <div className="item__data">
                  <h3 className="item-title">Stickman Saga</h3>
                  <div>PvP P2E battle arena, battle and compete to win $STIX and rewards in the ecosystem.</div>
                </div>
              </a>
              <a href="https://www.jazzheroes.io/" className="item">
                <div className="item__data">
                  <h3 className="item-title">Jazz Heroes</h3>
                  <div>The first ever player’s initiative NFT collection that illustrates Utah Jazz players as superheroes. By the players for the Community!</div>
                </div>
              </a>
              <a href="https://y0nft.com/" className="item">
                <div className="item__data">
                  <h3 className="item-title">Y0</h3>
                  <div>Bridging The Gap Between Science Fiction & Reality.</div>
                </div>
              </a>
              <a href="https://www.graveyarddao.com/" className="item">
                <div className="item__data">
                  <h3 className="item-title">Graveyard DAO</h3>
                  <div>The Graveyard DAO is a community of NFT collectors who are tired of holding onto dead NFT collections.</div>
                </div>
              </a>
              <a href="https://discord.gg/notion" className="item">
                <div className="item__data">
                  <h3 className="item-title">Notion Community</h3>
                  <div>This community-run Discord server is all about Notion, the future of productivity apps.</div>
                </div>
              </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
