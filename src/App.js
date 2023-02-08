import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import ContactMe from "./pages/ContactMe";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Home />
                <Footer />
              </div>
            }
          />
          <Route
            path="/projects"
            element={
              <div>
                <Navbar />
                <Projects />
                <Footer />
              </div>
            }
          />
          <Route
            path="/project/:id"
            element={
              <div>
                <Navbar />
                <ProjectDisplay />
                <Footer />
              </div>
            }
          />

          <Route
            path="/experience"
            element={
              <div>
                <Navbar />
                <Experience />
                <Footer />
              </div>
            }
          />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
