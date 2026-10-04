import './App.css';
import Movies from './Movies.js';
import { useState } from 'react';

function Searchbar(){
	const [selectedSort, setSelectedSort] = useState(1);

	const filterByGenre = () => {
	
	};

	const sortBy = () => {
		if(selectedSort == 1){
			console.log("sortowanie po gatunku");
			console.log(selectedSort)
		}else if(selectedSort == 2){
			console.log("sortowanie po czasie");
			console.log(selectedSort)
		}else{
			console.log("sortowanie o tytule");
			console.log(selectedSort)
		}
	};

	const searchByTitle = () => {

	};

	return (
		<div id="searchBar">
			<div>
				<select id="sortOption" onChange={e => setSelectedSort(e.target.value)}>
					<option value="1">Gatunek</option>
					<option value="2">Czas</option>
					<option value="3">Tytuł</option>
				</select>
				<button onClick={() => sortBy()}>Sortuj</button>
			</div>

			<div>
				<select id="filterOption">
					<option>Gatunek</option>
				</select>
				<button onClick={() => filterByGenre()}>Filtruj</button>
			</div>

			<div>
				<input type="text" placeholder="Tytuł filmu..."/>
				<button onClick={() => searchByTitle()}>Wyszukaj</button>
			</div>
		</div>
	)
}

export default Searchbar;