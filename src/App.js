import './App.css';
import Contact from './components/Contact/contact';
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/NavBar";
import Skills from './components/Skills/skills';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
