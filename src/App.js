import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Scroll from "./components/Scroll"
// import Skills from "./components/Skills";


function App() { 
  return (
      <div>
      <Navbar />
      <Scroll />
      <Home />
      <Projects />
      <About />
      <Contact />
  </div>
);
}
export default App;