import './App.css';
import { useState } from 'react';

function Tools({movies, setMoviesCopy}){
	const [selectedSort, setSelectedSort] = useState(1);
	const [selectedGenre, setSelectedGenre] = useState(movies[0].genre);
	const [inputTitle, setInputTitle] = useState();

	const movieGenres = movies.map((movie) => 
		<option value={movie.genre}>{movie.genre}</option>
	);

	const toObj = (movies) => {
		const titleObjects = [];
		for(let i=0; i<movies.length; i++){
			titleObjects.push(new Object({id: movies[i].id, title: movies[i].title}));
		}
		return titleObjects;
	}
	const movieTitles = toObj(movies);

	const filterByGenre = () => {
		const filteredMovies = movies.filter((movie) =>
			movie.genre == selectedGenre
		);
		setMoviesCopy(filteredMovies);
	};

	const searchByTitle = () => {
		const moviesResult = [];
		for(let i=0; i<movieTitles.length; i++){
			const title = movieTitles[i].title.toLowerCase();
			if(title.search(inputTitle.toLowerCase()) == -1){
				delete movieTitles[i];
			}else{
				moviesResult.push(movies[i]);
			}
		};
		setMoviesCopy(moviesResult);
	};

	return (
		<div id="searchBar">
			<div>
				<select id="filterOption" onChange={e => setSelectedGenre(e.target.value)}>
					{movieGenres}
				</select>
				<button onClick={() => filterByGenre()}>Filtruj</button>
			</div>

			<div>
				<input type="text" placeholder="Tytuł filmu..." onChange={e => setInputTitle(e.target.value)}/>
				<button onClick={() => searchByTitle()}>Wyszukaj</button>
			</div>
		</div>
	)
}

export default Tools;