"use strict";
$(document).ready(function(){

	const holes = document.querySelectorAll(".square.hole.mole");
	const scoreBoard = document.querySelector(".score");
	const moles = document.querySelectorAll(".mole");
	// const startButton = document.querySelector(".StartButton")
	let lastHole;
	let timeUp = false;
	let score = 0;





	function randomTime(min,max){
		return Math.round(Math.random() * (max - min) + min);

	}



	function randomHole(holes){
		const idx = Math.floor(Math.random() * holes.length );
		const hole = holes[idx];
		if (!hole === lastHole){
			return randomHole(holes);
		}
		lastHole = hole;
		return hole;
	}

	function peep(){
		const time = randomTime(200, 500);
		const mole = randomHole(moles);
		$('.img').on("click", function (){
			$(this).toggleClass("hidden");
		})
		// mole.classList.add('down');
		setTimeout(() => {
			mole.classList.toggle('up');
			if(timeUp) peep();
		}, time);

	}

	function startGame() {
		$(".StartButton").click(() => {
			scoreBoard.textContent = 0;
			timeUp = true;
			score = 0;
			peep();
			setTimeout(() => timeUp = false, 9000);
		});

	}
startGame();



	function whack(){
		if(!timeUp) return;
		score++;
		this.parentNode.classList.remove("up");
		scoreBoard.textContent = score;
		console.log(this);
		console.log(this.classList);
	}

	moles.forEach(mole => mole.addEventListener('click', whack));
	console.log(moles);



});





