import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll"


function App() { 
  return (
      <div>
      <Navbar />
      <Scroll />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
  </div>
);
}
export default App;