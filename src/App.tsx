import "./App.css";
import Client from "./components/Client";
import Comunity from "./components/Comunity";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Unlock from "./components/Unlock";

function App() {
	return (
		<>
			<Header />
			<main className="flex flex-col items-center gap-[40px]">
				<Hero />
				<Client />
				<Comunity />
				<div className="flex flex-col gap-[48px]">
					<Unlock />
				</div>
			</main>
		</>
	);
}

export default App;
