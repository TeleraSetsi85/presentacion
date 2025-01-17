import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import NavBar from "./components/NavBar.jsx";
import Sections from "./components/Sections.jsx";
import BackToTop from "./components/BackToTop.jsx";

function App() {
  return (
    <div className="Contenedor">
      <NavBar />
      <Sections />
      <BackToTop />
    </div>
  );
}

export default App;
