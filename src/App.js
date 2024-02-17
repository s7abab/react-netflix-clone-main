import "./App.css";
import NavBar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import RowPost from "./Rowpost/Rowpost";
import { originals, trending, action } from "./urls";
import { bannerContext } from "./contexts";
import Search from "./Search/Search";

function App() {
	return (
		<div className="App">
			<NavBar />
			<bannerContext.Provider value={trending}>
				<Banner url={trending} />
			</bannerContext.Provider>
			<RowPost title={"Netflix Originals"} url={originals} />
			<RowPost title={"Action Movies"} url={action} />
			<Search />
		</div>
	);
}

export default App;
