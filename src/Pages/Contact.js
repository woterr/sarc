import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Contact() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function sendEmbed(e) {
    e.preventDefault();
    navigate("/sent");
    await axios
      .post("https://sarc-backend-7m71v47ox-sarcc.vercel.app/contact", {
        name: name,
        email: email,
        message: message,
      })
      .then((res) => {
        console.log("sent");
      });
  }
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="container__data" style={{ marginTop: "-3rem" }}>
            <h1 className="heading">Contact</h1>
            <p
              className="description"
              style={{ marginBottom: "2rem", width: "100%" }}
            >
              Reach out to me regarding any projects or business inquiries.
            </p>
            <form method="POST" className="contact__form" onSubmit={sendEmbed}>
              <div className="half">
                <div
                  className="input__item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <label for="name" className="input__label">
                    Name*
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    onChange={(e) => setName(e.target.value)}
                    className="input"
                  />
                </div>
                <div
                  className="input__item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="300"
                >
                  <label for="email" className="input__label">
                    Email*
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="input"
                  />
                </div>
              </div>
              <div
                className="full items grid"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="600"
              >
                <label for="message" className="input__label">
                  Message*
                </label>
                <textarea
                  name="message"
                  id="message"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="input message"
                ></textarea>
              </div>
              <div className="action">
                <input type="submit" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
