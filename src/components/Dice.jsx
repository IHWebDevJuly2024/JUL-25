import dice0 from "../assets/dice-empty.png";
import dice1 from "../assets/dice1.png";
import dice2 from "../assets/dice2.png";
import dice3 from "../assets/dice3.png";
import dice4 from "../assets/dice4.png";
import dice5 from "../assets/dice5.png";
import dice6 from "../assets/dice6.png";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function Dice() {
  const [dice, setDice] = useState(dice4);
  // the user is logged in and we allow them to see the content
  const isLoggedIn = true;

  const arrayOfDices = [dice1, dice2, dice3, dice4, dice5, dice6];

  function changeDice() {
    console.log("the dice has been clicked");
    setDice(dice0);

    function randomizeDice() {
      const randomDiceIndex = Math.floor(Math.random() * arrayOfDices.length);
      setDice(arrayOfDices[randomDiceIndex]);
    }

    const rollDice = setInterval(() => {
      randomizeDice();
    }, 50);

    setTimeout(() => {
      clearInterval(rollDice);
      randomizeDice();
    }, 1000);
  }
  if (isLoggedIn) {
    return (
      <>
        <h2>dice</h2>
        <img onClick={changeDice} width="100px" src={dice} alt="dice image" />
      </>
    );
  } else {
    // when the user is not logged in we send them to /contact
    return <Navigate to={"/contact"} />;
  }
}

export default Dice;
