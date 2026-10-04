import './App.css';
import Movies from './Movies.js';
import Tools from './Tools.js';
import Reservation from './Reservation.js';
import ReservationForm from './ReservationForm.js';
import Ticket from './Ticket.js';
import Summary from './Summary.js';
import { useState } from 'react';

function App() {
	const [selectedMovieId, setSelectedMovieId] = useState(1);
	const [reservationDisplay, setReservationDisplay] = useState("none");
	const [moviesCopy, setMoviesCopy] = useState();
	const [formDisplay, setFormDisplay] = useState("none");
	const [seatCount, setSeatCount] = useState(0);
	/*const [ticketArray, setTicketArray] = useState([{
		id: 0, type: "normalny"
	}]);*/
	const [userInput, setUserInput] = useState(["","",""]);
	const [summaryDisplay, setSummaryDisplay] = useState("none");

	const movies = [
		{id: 1,
		title: "Interstellar",
		genre: "Sci-Fi",
		duration: 169,
		description: "Byt ludzkości na Ziemi dobiega końca wskutek zmian klimatycznych. Grupa naukowców odkrywa tunel czasoprzestrzenny, który umożliwia poszukiwanie nowego domu.",
		poster: "/images/interstellar.jpg",
		showtimes: ["16:00", "19:30"]},
		{id: 2,
		title: "Gladiator",
		genre: "Dramat historyczny",
		duration: 155,
		description: "Generał Maximus - prawa ręka cesarza, szczęśliwy mąż i ojciec - w jednej chwili traci wszystko. Jako niewolnik-gladiator musi walczyć na arenie o przeżycie.",
		poster: "/images/gladiator.jpg",
		showtimes: ["13:40", "20:30"]},
		{id: 3,
		title: "Avatar",
		genre: "Sci-Fi",
		duration: 162,
		description: "Jake, sparaliżowany były komandos, zostaje wysłany na planetę Pandora, gdzie zaprzyjaźnia się z lokalną społecznością i postanawia jej pomóc.",
		poster: "/images/avatar.jpg",
		showtimes: ["12:55", "18:00"]},
		{id: 4,
		title: "Matrix",
		genre: "Akcja",
		duration: 136,
		description: "Haker komputerowy Neo dowiaduje się od tajemniczych rebeliantów, że świat, w którym żyje, jest tylko obrazem przesyłanym do jego mózgu przez roboty.",
		poster: "/images/matrix.jpg",
		showtimes: ["15:10", "20:10"]},
		{id: 5,
		title: "Ojciec chrzestny",
		genre: "Dramat",
		duration: 175,
		description: "Opowieść o nowojorskiej rodzinie mafijnej. Starzejący się Don Corleone pragnie przekazać władzę swojemu synowi.",
		poster: "/images/ojciecChrzestny.jpg",
		showtimes: ["17:00", "22:30"]},
		{id: 6,
		title: "Pulp Fiction",
		genre: "Gangsterski",
		duration: 154,
		description: "Przemoc i odkupienie w opowieści o dwóch płatnych mordercach pracujących na zlecenie mafii, żonie gangstera, bokserze i parze okradającej ludzi w restauracji.",
		poster: "/images/pulpFiction.jpg",
		showtimes: ["14:20", "22:05"]}
	];

	return (
		<div>
			<Tools movies={movies} setMoviesCopy={setMoviesCopy}/>
			<Movies movies={movies} moviesCopy={moviesCopy} setSelectedMovieId={setSelectedMovieId} setDisplay={setReservationDisplay}/>
			<Reservation movies={movies} display={reservationDisplay} setDisplay={setReservationDisplay} 
			movieId={selectedMovieId} setFormDisplay={setFormDisplay} seatCount={seatCount} setSeatCount={setSeatCount}/>
			<div class="inlineBlock">
				<ReservationForm display={formDisplay} setDisplay={setFormDisplay} setUserInput={setUserInput} setSummaryDisplay={setSummaryDisplay}/>
				<Ticket display={formDisplay} seatCount={seatCount} userInput={userInput} summaryDisplay={summaryDisplay}/>
			</div>
				
		</div>
	);
}

export default App;