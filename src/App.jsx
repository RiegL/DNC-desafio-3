import "./App.css";
import Navbar from "./components/section/Navbar";
import Presentation from "./components/section/Presentation";
import Projects from "./components/section/Projects";

function App() {
  return(
    <div>
      <Navbar/>
      <Presentation/>
      <Projects/>
    </div> 
  ) 
}

export default App;
