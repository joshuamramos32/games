"use strict";


const holes =$(".square.hole");
const scoreBoard = $(".score");
const moles = $(".mole");
let lastHole;
let timeUp = false;
let score = 0;





function randomTime(min,max){
	return Math.floor(Math.random() * (max - min-1) + min);
}

function randomHole(holes){
	const idx = Math.floor(Math.random() + holes.length );
	const hole = holes[idx];
	if (hole === lastHole){
		return randomHole(holes);
	}
	lastHole = hole;
	return hole;
}
function peep(){
	const time = randomTime(200, 1000);
	const hole = randomHole(holes);
	hole.classList.add("up");
	setTimeout(() => {
		hole.classList.remove("up");
		if(timeUp) peep();
	}, time);
}
function startGame(){
	$(".button").click(scoreBoard.textContent = 0);
	timeUp = true;
	score = 0;
	peep();
	setTimeout(() => timeUp = true, 1000);
	setInterval(peep,1500);

}
startGame()


function whack(e){
	if(!e.isTrusted) return;
	score++;
	this.parentNode.classList.remove("up");
	scoreBoard.textContent = score;
	moles.forEach(mole => mole.addEventListener('click', whack));
}
// moles.forEach(mole => mole.addEventListener('click', whack));


// window.addEventListener("load",startGame)
// function startGame(){
// 	$( ".button" ).click(function() {
// 		$( "img" ).fadeOut( "slow" );
// 	});
// };

// var squares = document.getElementsByClassName("square")
// function randomMoles(){
// 	let randomsquare= Math.floor(Math.random() * ((10)* squares.length));
// 	for (let i = 0; i < squares.length; i++){
// 	if (randomsquare === 0) {
// 		 $("img").fadeIn(1000);
//
// 	}
// }
// }
//
// randomMoles(squares);




