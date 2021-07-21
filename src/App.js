import './App.css';
import Contact from './components/Contact/contact';
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';
import About from './components/About/about';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
