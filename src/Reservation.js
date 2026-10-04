import Movies from './Movies.js';
import { useState } from 'react';
import Seats from './Seats.js';
import './App.css';

function Reservation({movies, display = "none", setDisplay, movieId, setFormDisplay, setTicketArray, ticketArray, seatCount, setSeatCount}){
	
	const [selectedShowtime, setSelectedShowtime] = useState("--:--");
	const movie = movies[movieId-1];

	const styles = {
		reservation: {
			display: display
		}
	}

	/*const toObj = () => {
		const ticketObjects = [];
		for(let i=0; i<seatCount; i++){
			ticketObjects.push(new Object({id: i, type: "normalny"}));
		}
		ticketArray = ticketObjects;
		setTicketArray(ticketArray);
		console.log(ticketArray)
	};*/

	const confirmTickets = () => {
		if(seatCount == 0 || selectedShowtime == "--:--"){
			return(<><button disabled>Potwierdź miejsca</button></>);
		}else{
			return(<><button onClick={() => {setFormDisplay("block"); setDisplay("none")}}>Potwierdź miejsca</button></>);
		}
	}

	const buttonMap = movie.showtimes.map((showtime) => {
		return <button onClick={() => setSelectedShowtime(showtime)}>{showtime}</button>;
	})

	return(
		<div style={styles.reservation} class="formDiv">
			<div class="floatLeft">
			<button onClick={() => {setDisplay("none"); setFormDisplay("none")}}>X</button>
			<h2>{movie.title}</h2>
			<p>Wybierz seans: {buttonMap}</p>
			<Seats seatCount={seatCount} setSeatCount={setSeatCount}/></div>
			<div style={{marginTop: '35%', textAlign: 'center'}}><p>Wybrane miejsca: {seatCount}</p>
			<p>Wybrany seans: {selectedShowtime}</p>
			{confirmTickets()}</div>
		</div>
	)
}

export default Reservation;