//roll the dice
function rollBothDice() {
  //Generate random number
  function randomMe() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return (randomNumber);
  }

  //Set the dice image with random number
  function setImageAttribute(dice, whichImage) {
    var randomImageSource = "images/" + dice;
    var image = document.querySelectorAll("img")[whichImage];
    image.setAttribute("src", randomImageSource);
  }

  /* Get the random number of the dice */
  var randomNumber1 = randomMe();
  var randomDiceImage = "dice" + randomNumber1 + ".png";
  var dice1 = randomDiceImage;
  /* Get the random number of the dice */
  var randomNumber2 = randomMe();
  var randomDiceImage = "dice" + randomNumber2 + ".png";
  var dice2 = randomDiceImage;

  setImageAttribute(dice1, 0);
  setImageAttribute(dice2, 1);
  // if randomNumber1 and randomNumber2 is 7 or 11 then declare a winner
  var total = randomNumber1 + randomNumber2;

  switch (total) {
    case 7:
      document.getElementById('winner').innerHTML = "Winner !!!";
      document.getElementById('winner').style.color = "red";
      break;
    case 11:
      document.getElementById('winner').innerHTML = "Winner !!!";
      document.getElementById('winner').style.color = "red";
      break;
    case 2:
      document.getElementById('winner').innerHTML = "Lose!";
      document.getElementById('winner').style.color = "yellow";
      break;
    case 3:
      document.getElementById('winner').innerHTML = "Lose!";
      document.getElementById('winner').style.color = "yellow";
      break;
    case 12:
      document.getElementById('winner').innerHTML = "Lose!";
      document.getElementById('winner').style.color = "yellow";
      break;
    default:
      document.getElementById('winner').innerHTML = "It's a draw!";
      document.getElementById('winner').style.color = "orange";
  }



}


document.querySelector(".btn").addEventListener("click", rollBothDice);
//document.querySelector(".btn").innerHTML = "Roll";
//Set image for dice 1 and dice 2
