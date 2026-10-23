import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/pages/About.jsx";
import Art from "./components/pages/Art.jsx";
import Web from "./components/pages/Web.jsx";

function App() {
  return (
    <Router>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/art" element={<Art />} />
          <Route path="/webdevelopment" element={<Web />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
