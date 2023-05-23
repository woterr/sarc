import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Admin from "./Admin";
import useToken from "../Components/useToken";
import { decrypt } from "n-krypta";

function AdminDashboard() {
  let [projectArray, setProjectArray] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");

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

  const navigate = useNavigate();
  const { token, setToken } = useToken();

  const secret_token = process.env.REACT_APP_SECRET;
  function TokenDec(str) {
    const secret_key = "ewby739h2diuwiu";
    if (str || token !== "" || token !== null) {
      if (decrypt(str, secret_key) === secret_token) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  if (!token || token === "" || token === null) {
    return <Admin setToken={setToken} />;
  }
  if (TokenDec(token) !== true) {
    sessionStorage.clear();
    return <Admin setToken={setToken} />;
  }

  const deleteItem = async (e, id) => {
    // console.log(id);
    navigate("/");
    await axios
      .post("https://entertaining-lovely-sesame.glitch.me/delete", {
        id: id,
      })
      .then((res) => {
        console.log(res);
        getprojects();
      });
  };

  async function handleData(e) {
    e.preventDefault();

    navigate("/");
    await axios
      .post("https://entertaining-lovely-sesame.glitch.me/projects", {
        title: title,
        description: description,
        link: link,
      })
      .then((res) => {
        console.log(res);
      });
  }

  return (
    <>
      <section className="section">
        <div className="container">
          <div
            className="container__data"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="heading" style={{ marginBottom: "2rem" }}>
              Add project
            </h1>

            <form
              name="addForm"
              id="addForm"
              method="POST"
              onSubmit={handleData}
              noValidate
              className="contact__form"
            >
              <div className="half">
                <div className="input__item">
                  <label for="title" className="input__label">
                    Project title
                  </label>
                  <input
                    type="text"
                    className="form-control input"
                    name="title"
                    id="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    data-validation-required-message="Please enter a title"
                  />
                </div>
                <div className="input__item">
                  <label for="link" className="input__label">
                    Link
                  </label>
                  <input
                    onChange={(e) => setLink(e.target.value)}
                    type="text"
                    className="form-control input"
                    name="link"
                    id="link"
                    required
                    data-validation-required-message="please enter a project link over the web"
                  />
                </div>
              </div>
              <div className="half">
                <div className="input__item">
                  <label for="description" className="input__label">
                    Description
                  </label>
                  <textarea
                    rows="5"
                    className="form-control input"
                    onChange={(e) => setDescription(e.target.value)}
                    name="description"
                    id="description"
                    required
                    style={{ width: "100%" }}
                    data-validation-required-message="Please enter a description."
                  ></textarea>
                </div>
              </div>

              <button type="submit" className="action" id="sendMessageButton">
                Add
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="section" style={{ marginTop: "4rem" }}>
        <div className="container projects">
          <div
            className="container__data"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <h1 className="heading">Delete project</h1>
          </div>
          <div
            className="items grid"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            {projectArray.map((item, i) => (
              <div className="item" key={i}>
                <div className="item__data">
                  <h3 className="item-title">{item.title}</h3>
                  <div>{item.description}</div>
                  <p>ID: {item._id}</p>
                  <button
                    className="action"
                    id="sendMessageButton"
                    onClick={(e) => {
                      deleteItem(e, item._id);
                    }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminDashboard;
