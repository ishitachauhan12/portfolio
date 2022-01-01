import './App.css';
import Parallax from "./Components/ParallaxImg"
import Background from "./Components/Background"
import Projects from "./Components/Projects"
import LastPage from './Components/LastPage';
import Skills from './Components/Skills';


function App() {
  return (
    <div className="App">
      <Parallax/>
      <Background/>
      <Projects/>
      <Skills/>
      <LastPage/>
    </div>
  );
}

export default App;
