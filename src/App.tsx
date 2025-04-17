import "./App.css";
import Archievements from "./components/Archievements";
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
				<div className="flex w-screen flex-col gap-[48px]">
					<Unlock />
					<Archievements />
				</div>
			</main>
		</>
	);
}

export default App;
