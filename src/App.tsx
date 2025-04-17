import "./App.css";
import Archievements from "./components/Archievements";
import Calender from "./components/Calender";
import Client from "./components/Client";
import Comunity from "./components/Comunity";
import Customers from "./components/Cunstomers";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Unlock from "./components/Unlock";
import Update from "./components/Update";

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
					<Calender />
					<Customers />
					<Update />
				</div>
			</main>
			<Footer />
		</>
	);
}

export default App;
