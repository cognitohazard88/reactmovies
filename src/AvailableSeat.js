import './App.css';
import { useState } from 'react';

function AvailableSeat({seatCount, setSeatCount}){
	const [chosenSeat, setChosenSeat] = useState(false);

	if(chosenSeat == false){
		return(
			<div class="seatAvailable" onClick={() => {setChosenSeat(true); setSeatCount(seatCount => seatCount + 1)}}></div>
		)
	}else{
		return(
			<div class="seatChosen" onClick={() =>{ setChosenSeat(false); setSeatCount(seatCount => seatCount - 1)}}></div>
		)
	}
	
}

export default AvailableSeat