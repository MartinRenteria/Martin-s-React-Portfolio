import './App.css';
import Contact from './components/Contact/contact';
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Skills from './components/Skills/skills';
import Projects from './components/Projects/project';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
