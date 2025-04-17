import "./App.css";
import Client from "./components/Client";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center gap-[40px]">
				<Hero />
				<Client />
			</main>
		</>
	);
}

export default App;
