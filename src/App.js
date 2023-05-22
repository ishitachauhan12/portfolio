import "./App.css";
import Parallax from "./Components/ParallaxImg";
import Background from "./Components/Background";
import Projects from "./Components/Projects";
import LastPage from "./Components/LastPage";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";

function App() {
  return (
    <div className="App">
      <Parallax />
      <Background />
      <Projects />
      <Experience />
      <Skills />
      <LastPage />
    </div>
  );
}

export default App;
