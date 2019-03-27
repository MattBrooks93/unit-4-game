// 4 crystals with a hidden random value 1-12
//random number generated between 19-120
//a new random number must be generated when the previous random value is met
//clicking a crystal should add to the total sum displayed until it hits the score defined
// if not equal, start over
// if equal, increment a win counter

var rndm;
var lost = 0;
var win = 0;
var addTo = 0;


var startGame = function() {
	$(".crystals").empty();
	rndm = Math.floor(Math.random() * 102) + 19;
	$("#result").html('Try to Match: ' + rndm);

	for(var i = 0; i < 4; i++) {
		var randomNumber = Math.floor(Math.random() * 11) + 1;
		
		var crystal = $("<div>");
			crystal.attr({
				"class": 'crystal',
				"data-randomNumber": randomNumber
			});
		$(".crystals").append(crystal);
	
	}
	
}
startGame();



$(document).on('click', ".crystal", function(){
	var crystalNum = parseInt($(this).attr('data-randomNumber'));
	addTo += crystalNum;
	$("#addTo").html("Total: " + addTo)
	if(addTo > rndm) {
		$("#winlose").text("You Lose!");
		lost++;
		$("#losses").html("Losses: " + lost);
		addTo = 0;
		startGame();
	}
	else if(addTo === rndm) {
		$("#winlose").text("You Win!");
		win++;
		$("#wins").html("Wins: " + win);
		addTo = 0;
		startGame();
	}
});