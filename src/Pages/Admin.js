import { useState } from "react";

function Admin({ setToken }) {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(credentials) {
    return fetch("https://entertaining-lovely-sesame.glitch.me/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }

  const handleData = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      user,
      password,
    });
    setToken(token);
  };

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
              Admin Login
            </h1>

            <form
              name="admin"
              id="admin"
              method="POST"
              onSubmit={handleData}
              noValidate
              className="contact__form"
            >
              <div className="half">
                <div className="input__item">
                  <label for="user" className="input__label">
                    Username (as per ENV variables)
                  </label>
                  <input
                    onChange={(e) => setUser(e.target.value)}
                    type="text"
                    className="form-control input"
                    name="user"
                    id="user"
                    required
                    data-validation-required-message="Authentication required"
                  />
                </div>

                <div className="input__item">
                  <label for="password" className="input__label">
                    Password
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control input"
                    name="password"
                    id="password"
                    required
                    data-validation-required-message="Authentication required"
                  />
                </div>
              </div>

              <button type="submit" className="action" id="sendMessageButton">
                Login
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Admin;
