import { useEffect, useState } from "react";
import "./Search.css";
import MovieCard from "../MovieCard/MovieCard";
import axios from "../axios";
import { search, trending } from "../urls";

function Search() {
	const [searchTerm, setSearchTerm] = useState("");
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		axios
			.get(trending)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleSearch = (query) => {
		axios
			.get(`${search}&query=${query}`)
			.then((response) => {
				console.log(query);
				console.log(response.data.results);
				setMovies(response.data.results);
			})
			.catch((error) => console.log(error));
	};

	return (
		<div className="main">
			<div className="search">
				<h1>Search</h1>
				<div>
					<input
						className="search-form"
						type="text"
						placeholder="Search movies here"
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
					/>
					<button
						className="search-btn"
						type="submit"
						onClick={() => handleSearch(searchTerm)}
					>
						Search
					</button>
				</div>
			</div>
			<div className="container">
				{movies.length === 0 && "Nothing to show here"}
				{movies.map((movie) => (
					<MovieCard key={movie.id} movie={movie} />
				))}
			</div>
		</div>
	);
}

export default Search;
