function Summary({totalCost, userInput, seatCount, display}){
   const styles = {
		summary: {
			display: display
		}
	}

   return(
      <div style={styles.summary} class="formDiv summary">
         <h1>Podsumowanie reserwacji</h1>
         <p>Imię: {userInput[0]}</p>
         <p>Nazwisko: {userInput[1]}</p>
         <p>E-mail: {userInput[2]}</p>
         <p>Liczba miejsc: {seatCount}</p>
         <p>Cena: {totalCost}zł</p>
      </div>
   )
}
export default Summary