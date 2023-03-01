var tabs = document.querySelectorAll(".gameTabs ul li");
var Leaderboard = document.querySelector(".Leaderboard");
var Game = document.querySelector(".Game");
var Name = document.querySelector(".Name");
var items = document.querySelectorAll(".gameItem");
let names = [];
let playCount = [];
let count=0;

const pi = "31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989";
let index = 0; 
let countPlay=0;
let guesses = "";
const digitsElement = document.getElementById("digits"); 
const inputElement = document.getElementById("input");
const resultElement = document.getElementById("result");
const guessesElement = document.getElementById("guesses");

function checkDigit() {
  const guess = inputElement.value;
  const digit = pi.charAt(index);
  
  if (guess === digit) {
    resultElement.textContent = "Keep going!";
	countPlay++;
    index++;
	if(index===1)
		guesses += guess+".";
	else
		guesses += guess;
    
    if (index === pi.length) {
      resultElement.textContent = "You win!";
      inputElement.disabled = true;
    } else {
      const pointsScored = index;
      digitsElement.textContent =pointsScored;
      inputElement.value = "";
    }
	guessesElement.textContent = guesses;
  } else {
    resultElement.textContent = "Aw man, you lose :(. Your score was: "+countPlay;
    inputElement.disabled = true;
  }
}

/*function handleButtonClick() {
	// Get the user's input from the input field
	const nameInput = document.getElementById("name-input");
	const input = nameInput.value;
	nameInput.textContent=input;
	names[count]=input;
	count=count+1;
	reload();
  }*/
  //const fName = names[count];
  //const firstName = document.getElementById("firstName");
  //firstName.textContent = fName;

tabs.forEach(function(tab){
	tab.addEventListener("click", function(){
		var currenttab = tab.getAttribute("data-li");
		
		tabs.forEach(function(tab){
			tab.classList.remove("active");
		})

		tab.classList.add("active");

		items.forEach(function(item){
			item.style.display = "none";
		})

		if(currenttab == "Name"){
			Name.style.display = "block";
		}
		else if(currenttab == "Leaderboard"){
			Leaderboard.style.display = "block";
		}
		else if(currenttab == "Game"){
			Game.style.display = "block";
		}

	})
})