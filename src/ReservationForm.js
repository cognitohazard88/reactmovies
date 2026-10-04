import { useState } from 'react';
import './App.css';
import Ticket from './Ticket.js';
import Summary from './Summary.js';

function ReservationForm({display, setDisplay, setUserInput, setSummaryDisplay}){
   const [nameInput, setNameInput] = useState();
   const [lastNameInput, setLastNameInput] = useState();
   const [emailInput, setEmailInput] = useState();
   const [hintName, setHintName] = useState("none");
   const [hintLastName, setHintLastName] = useState("none");
   const [hintEmail, setHintEmail] = useState("none");


   const styles = {
		reservationForm: {
			display: display
		}
	}

   const checkInput = () => {
      if(nameInput === undefined || lastNameInput === undefined || emailInput === undefined || emailInput.includes("@") == false){
         if(nameInput === undefined){
            setHintName("inline-block");
         }else{
            setHintName("none");
         };

         if(lastNameInput === undefined){
            setHintLastName("inline-block");
         }else{
            setHintLastName("none");
         };

         if(emailInput === undefined || emailInput.includes("@") == false){
            setHintEmail("inline-block");
         }else{
            setHintEmail("none");
         };

         return;
      }else{
         setHintName("none");
         setHintLastName("none");
         setHintEmail("none");
      }
      setUserInput([nameInput,lastNameInput,emailInput]);
      setDisplay("none");
      setSummaryDisplay("block")
   }

   return(
      <div>
         <div style={styles.reservationForm} class="formDiv reservationForm">
            <button onClick={() => setDisplay("none")}>X</button>
            <div class="inlineBlock"><label for="nameInput">Imię</label>
            <input name="nameInput" type="text" onChange={e => setNameInput(e.target.value)}></input>
            <p style={{display: hintName}} class="hint">Wpisz imię</p></div>
            <div class="inlineBlock"><label for="lastNameInput">Nazwisko</label>
            <input name="lastNameInput" type="text" onChange={e => setLastNameInput(e.target.value)}></input>
            <p style={{display: hintLastName}} class="hint">Wpisz nazwisko</p></div>
            <div class="inlineBlock"><label for="emailInput">E-mail</label>
            <input name="emailInput" type="email" onChange={e => setEmailInput(e.target.value)}></input>
            <p style={{display: hintEmail}} class="hint">Wpisz adres e-mail</p></div>

            <button onClick={() => checkInput()}>Zarezerwuj</button>
         </div>
      </div>
      
   )
}

export default ReservationForm