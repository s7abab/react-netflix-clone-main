import "./MovieCard.css";
import { w300ImageUrl } from "../constants";

function MovieCard({ movie }) {
	return (
		<div
			style={{ backgroundImage: `url(${w300ImageUrl}${movie.poster_path})` }}
			className="card"
		>
			<div className="info">
				<h3>{movie.title}</h3>
				<p>
					<span className="bold">Average Rating:</span> {movie.vote_average}
				</p>
				<p>
					<span className="bold">Release Date:</span> {movie.release_date}
				</p>
			</div>
		</div>
	);
}

export default MovieCard;
