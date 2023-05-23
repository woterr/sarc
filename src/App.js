import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Info from "./Pages/Info";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="/sent"
        element={
          <Info
            title={"Message delivered"}
            description={
              "Thank you for your message! We have received it and will respond as soon as possible."
            }
          />
        }
      />
      <Route
        path="*"
        element={
          <Info
            title={"Error 404"}
            description={
              "We're sorry, the page you were looking for could not be found. It's possible that the page has been removed, renamed, or is temporarily unavailable."
            }
          />
        }
      />
    </Routes>
  );
}

export default App;
