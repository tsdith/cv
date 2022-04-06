// Check the game selection
function handleClick() {
  var x = document.getElementById("games");
  var i = x.selectedIndex;
  var gameSelected = x.options[i].value;

  if (i>0 && gameSelected=="craps")  {
  // if (gameSelected=="craps" && document.querySelector(".btn").addEventListener("click",open(gameSelected+".html"))) {
    //document.getElementById("ok").onclick = alert("Hello !");
    alert("You selected to play "+x.options[i].text);
    open(gameSelected+".html");
  } else if (i>0 && gameSelected != "craps") {
      alert("You selected to play " + x.options[i].text + ", but this site is still under construction.  Come back again later.  Thank you.");
  }

}  //End of handleClick()
