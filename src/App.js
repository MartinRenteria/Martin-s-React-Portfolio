import './App.css';
import Contact from './components/Contact/contact';
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Contact />
    </div>
  );
}

export default App;
