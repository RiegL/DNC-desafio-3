import "./App.css";
import Navbar from "./components/section/Navbar";
import Presentation from "./components/section/Presentation";
import Projects from "./components/section/Projects";
import Aboutme from "./components/section/Aboutme";

function App() {
  return(
    <div>
      <Navbar/>
      <Presentation/>
      <Projects/>
      <Aboutme/>
    </div> 
  ) 
}

export default App;
