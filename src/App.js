import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import Scroll from "./components/Scroll"
import Design from "./components/Design";


function App() { 
  return (
    <div className="w-full h-screen relative">
      <div>
      <Navbar />
      <Scroll />
      <Home />
      <About />
      <Skills />
      <Works />
      <Contact />
    </div>
    <div className="w-full h-screen absolute top-0 left-0">
      <Design />
    </div>
  </div>
);
}
export default App;