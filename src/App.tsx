import "./App.css";
import Client from "./components/Client";
import Comunity from "./components/Comunity";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center gap-[40px]">
				<Hero />
				<Client />
				<Comunity />
			</main>
		</>
	);
}

export default App;
