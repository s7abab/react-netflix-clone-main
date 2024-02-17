import React, { useContext, useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import { imageUrl } from "../constants";
import { bannerContext } from "../contexts";

function Banner() {
	const [trendingMovie, setTrendingMovie] = useState();
	const trending = useContext(bannerContext);

	useEffect(() => {
		axios
			.get(trending)
			.then((response) => {
				let i = Math.floor(Math.random() * 20);
				setTrendingMovie(response.data.results[i]);
			})
			.catch((error) => {
				setTrendingMovie({
					title: "Something went wrong",
					overview: "Something went wrong",
					backdrop_path: "",
				});
			});
	}, []);

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${
						trendingMovie ? imageUrl + trendingMovie.backdrop_path : ""
					})`,
				}}
				className="banner"
			>
				<div className="content">
					<h1 className="title">
						{trendingMovie ? trendingMovie.title : "loading..."}
					</h1>
					<div className="banner_buttons">
						<button className="button">Play</button>
						<button className="button">My list</button>
					</div>
					<h1 className="description">
						{trendingMovie ? trendingMovie.overview : "loading..."}
					</h1>
				</div>
				<div className="fade_bottom"></div>
			</div>
		</>
	);
}

export default Banner;
