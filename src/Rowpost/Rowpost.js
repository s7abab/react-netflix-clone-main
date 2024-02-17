import React, { useEffect, useState } from "react";
import "./RowPost.css";
import axios from "../axios";
import { API_KEY, imageUrl } from "../constants";
import YouTube from "react-youtube";

function RowPost({ title, url }) {
	const [movies, setMovies] = useState([]);
	const [isHovering, setIsHovering] = useState(false);
	const [urlId, setUrlId] = useState();

	useEffect(() => {
		axios
			.get(url)
			.then((response) => {
				setMovies(response.data.results);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleClick = (movie) => {
		if (isHovering) {
			setIsHovering(!isHovering);
			return;
		}

		axios
			.get(`/movie/${movie.id}/videos?api_key=${API_KEY}`)
			.then((response) => {
				const videos = response.data.results.filter(
					(video) => video.site === "YouTube" && video.type === "Trailer"
				);

				if (videos.length !== 0) {
					setIsHovering(true);
					setUrlId(videos[0].key);
				} else {
					throw "Could not find any videos";
				}
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const opts = {
		playerVars: {
			autoplay: 1,
		},
	};

	return (
		<div className="row">
			<h2>{title}</h2>
			<div className="posters">
				{movies.map((movie) => (
					<img
						onClick={() => handleClick(movie)}
						key={movie.id}
						className="poster"
						alt="poster"
						src={imageUrl + movie.poster_path}
					/>
				))}
			</div>
			{isHovering && <YouTube videoId={urlId} opts={opts} />}
		</div>
	);
}

export default RowPost;
