import Footer from "./components/Footer/footer";
import Home from "./components/Home/home";
import Navbar from "./components/NavBar/navbar";
import Skills from "./components/Skills/skills";
import Projects from "./components/Projects/project";
import About from "./components/About/about";
// import Experience from "./components/Experience/experience";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Home />
			<About />
			{/* <Experience /> */}
			<Projects />
			<Skills />
			<Footer />
		</div>
	);
}

export default App;
