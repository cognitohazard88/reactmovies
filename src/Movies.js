import Reservation from './Reservation.js';
import { useState } from 'react';
import './App.css'

function Movies({movies, moviesCopy, setDisplay, setSelectedMovieId}){
	let movies1 = [];
	const movieReservation = (id) => {
		console.log(id);
		Reservation.getMovie(movies[id-1]);
	};

	const showReservation = (id) => {
		setSelectedMovieId(id); 
		setDisplay("block");
	}

	const renderMovies = (movies) => {
		const moviesMap = movies.map((movie) => <>
			<div class="movieDiv" key={movie.id}>
				<h3 class="movieTitle">{movie.title}</h3>
				<img class="moviePoster" src={movie.poster}/>
				<p>{movie.description}</p>
				<p>{movie.genre} | {movie.duration} min</p>
				<p>{movie.showtimes[0]}, {movie.showtimes[1]}</p>
				<button onClick={() => {showReservation(movie.id)}}>Zarezerwuj</button> 
			</div>
		</>);
		return moviesMap;
	}

	if(moviesCopy != undefined){
		movies1 = renderMovies(moviesCopy);
	}else{
		movies1 = renderMovies(movies);
	}
	
	return (
		<>
			{movies1}
		</>
		/*<div style={styles.movieDiv}>
			<h3 style={styles.movieTitle}>Matrix</h3>
			<img style={styles.moviePoster} src="https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg"/>
			<p>Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.</p>
			<p>Akcja | 136 min</p>
			<p>15:10, 20:10</p>
		</div>*/
		/*			<Reservation movieId={movieId} display={display} setDisplay={setDisplay}/> */
	)
}

export default Movies;