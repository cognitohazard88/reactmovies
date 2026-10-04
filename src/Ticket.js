import { useState } from 'react';
import './App.css';
import Summary from './Summary.js';

function Ticket({ticketArray, setTicketArray, seatCount, userInput, summaryDisplay, display}){
   const ticketNormal = 25;
	const ticketUlgowy = 18;
   const totalCost = ticketNormal*seatCount;

   const tickets = [];
   for(let i=0; i<seatCount; i++){
      tickets.push(new Object({id: i, type: "normalny"}));
   };

   const ticketMap = tickets.map((ticket) => 
      <div class="ticket">
         <p>{ticket.id+1}. Bilet {ticket.type}</p>
      </div>
   );

   const styles = {
		reservationForm: {
			display: display
		}
	}

   /*const changeTicketType = (ticketArray, id, type) => {
      if(type == "normalny"){
         ticketArray[id].type = "ulgowy";
      }else if(type == "ulgowy"){
         ticketArray[id].type = "normalny";
      }
   }

   const renderTickets = () => {
      let tickets;
      console.log(ticketArray);
      for(let i=0; i<seatCount; i++){
         tickets += <div>
            <p>{ticketArray[i].id+1}.</p>
            <p>Bilet {ticketArray[i].type}</p>
            <button onClick={() => changeTicketType(ticketArray, ticketArray[i].id, ticketArray[i].type)}>Zmień</button>
         </div>
      }
      return tickets;
   }
   

   const ticketMap = tickets.map((ticket) => 
      <div>
         <p>{ticket.id+1}.</p>
         <p>Bilet {ticket.type}</p>
         <button onClick={() => changeTicketType(tickets, ticket.id)}>Zmień</button>
      </div>
   );*/
   

   return(
      <div>
         <div style={styles.reservationForm}>
            {ticketMap}
            <p>Cena rezerwacji: {totalCost}zł</p>
         </div>
         <Summary totalCost={totalCost} userInput={userInput} seatCount={seatCount} display={summaryDisplay}/>
      </div>
   )
}

export default Ticket