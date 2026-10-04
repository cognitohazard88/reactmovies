import './App.css';
import AvailableSeat from './AvailableSeat';

function Seats({setSeatCount, seatCount}){
	const seatsArray = [[],[],[],[],[],[]];

	const assignSeats = (seats) => {
		for(let i=0; i<6; i++){
			for(let j=0; j<8; j++){
				seats[i][j] = Math.floor(Math.random() * 1);
				//seats[i][j] = Math.floor(Math.random() * 2);
			}
		}
	}

	const colorSeats = (seat) => {
		if(seat == 2){
			return <div class="seatTaken"></div>
		}else{
			return <AvailableSeat seatCount={seatCount} setSeatCount={setSeatCount}/>
		}
	}

	if(seatsArray[0].length == 0){
		assignSeats(seatsArray);
	}

	const seatsMap = seatsArray.map((seats) => {
		for(let i=0; i<seats.length; i++){
			const seatsMap2 = seats.map((seat) => {
				for(let j=0; j<8; j++){
					return colorSeats(seat);
				}
			});
			return <div class="inlineBlock">{seatsMap2}</div>;
		}}
	)

	return(
		<>
			{seatsMap}
			<div class="inlineBlock centerItems"><div class="seatAvailable seatGuide inlineBlock"></div><p class="inlineBlock">Miejsce dostępne</p></div>
			<div class="inlineBlock centerItems"><div class="seatTaken seatGuide inlineBlock"></div><p class="inlineBlock">Miejsce zajęte</p></div>
		</>
	)
}

export default Seats;