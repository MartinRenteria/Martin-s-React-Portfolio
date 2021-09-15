import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Experience />
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
