import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import About from "./components/About/about";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom"

function App() {
	return (
		<Router>
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Projects />
			<Skills />
			<Footer />
		</div>
		</Router>
	);
}

export default App;
