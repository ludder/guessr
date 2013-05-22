(function(){

	var guessrlist = [],
		solution = [],
		roundtrips = 5,
		maxNr = 20;


	function init() {
		getNumberList();
		setHandlers();
	}

	function setHandlers() {
		document.getElementById('start').addEventListener('click', startGame);
	}

	function startGame() {
		// document.getElementById('canvas').innerHTML = showNextNumber();
		showNextNumber();
	}

	function showNextNumber() {
		var nr = guessrlist.pop();
		solution.push(nr);
		if (guessrlist.length > 0) {
			document.getElementById('canvas').innerHTML = nr;
			window.setTimeout(showNextNumber, 1000);
		} else {
			document.getElementById('canvas').innerHTML = '';
			showEndText();
		}
	}

	function showEndText() {
		document.getElementById('solution-container').style.display = 'block';
		document.getElementById('solution').focus();

	}


	function getNumberList() {
		for (var i = 0; i < roundtrips; i ++ ) {
			guessrlist.push(getRandomUniqueInteger());
		}
	}

	function getRandomUniqueInteger() {
		var int = Math.ceil(Math.random() * maxNr);
		if (guessrlist.indexOf(int) > -1) {
			return getRandomUniqueInteger();
		} else {
			return int;
		}
	}




	init();

})();