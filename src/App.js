import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import NavBar from "./components/NavBar/navBar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import About from "./components/About/about";
import "./App.css";

function App() {
	return (
		<div className="App">
			<NavBar />
			<Home />
			<About />
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
