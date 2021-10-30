var listOfWords = {};
var count = 1;

function record(data) {
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordIndi = recordValue["Kala Lagaw Ya"];

		listOfWords[recordEnglish] = recordIndi;
	});

	next();
}

// function randomIndiWord() {
// 	var index = Math.floor(Math.random()*52);
// 	var counter = 1;
// 	for (word in listOfWords) {
// 		if (counter == index) {
// 			return listOfWords[word];
// 		} else {
// 			counter += 1;
// 		}
// 	}
// }

function randomEnglishWord() {
	var index = Math.floor((Math.random() * 52) + 1);
	var counter = 1;
	for (word in listOfWords) {
		if (counter == index) {
			return word;
		} else {
			counter += 1;
		}
	}
}

function findAnswer(option) {
	for (word in listOfWords) {
		if (listOfWords[word] == option) {
			return word;
		}
	}
	return "Not found";
}

var correctAnswer;

function setOptions(questionWord) {
	var answer = findAnswer(questionWord);
	correctAnswer = answer;
	var val2 = randomEnglishWord();
	if (answer == val2) {
		val2 = randomEnglishWord();
	}
	var val3 = randomEnglishWord();
	if (answer == val3) {
		val3 = randomEnglishWord();
	}

	var option1 = document.getElementById("option1");
	var option2 = document.getElementById("option2");
	var option3 = document.getElementById("option3");

	var ansId = Math.floor(Math.random() * 3) + 1;

	if (ansId == 1) {
		option1.innerText = answer;
		option2.innerText = val2;
		option3.innerText = val3;
	} else if (ansId == 2) {
		option1.innerText = val2;
		option2.innerText = answer;
		option3.innerText = val3;
	} else if (ansId == 3) {
		option1.innerText = val3;
		option2.innerText = val2;
		option3.innerText = answer;
	}
}

function reset() {
	document.getElementById("a1").setAttribute("class", "none");
	document.getElementById("a2").setAttribute("class", "none");
	document.getElementById("a3").setAttribute("class", "none");
}


// function setParam() {
// 	reset();
// 	var word = randomIndiWord();
// 	var question = document.getElementById("question");
// 	question.innerText = "What is the English word for " + word + "?";

// 	setOptions(word);
// }

function next() {
	if (count <= 52) {
		reset();
		var counter = 1;
		for (w in listOfWords) {
			if (counter == count) {
				var word = listOfWords[w];
				$('numberOfWords').text("Word" + count + " of 52"); 
				break;
			} else {
				counter += 1;
				$('numberOfWords').text("Word" + count + " of 52"); 
			}
		}
		var question = document.getElementById("question");
		question.innerText = "What is the English word for " + word + "?";
		$('#q-num').text("Question " + count + " of 52"); 
		count += 1;
		setOptions(word);
	}
}

function setCorrectVal(option) {
	if (option == "option1") {
		document.getElementById("a1").setAttribute("class", "correct");
	} else if (option == "option2") {
		document.getElementById("a2").setAttribute("class", "correct");
	} else if (option == "option3") {
		document.getElementById("a3").setAttribute("class", "correct");
	}
}

function setIncorrectVal(option) {
	if (option == "option1") {
		document.getElementById("a1").setAttribute("class", "incorrect");
	} else if (option == "option2") {
		document.getElementById("a2").setAttribute("class", "incorrect");
	} else if (option == "option3") {
		document.getElementById("a3").setAttribute("class", "incorrect");
	}
}


function checkAns(option) {
	var optionVal = document.getElementById(option); 
	if (correctAnswer == optionVal.innerText) {
		setCorrectVal(option);
	} else if (correctAnswer != optionVal.innerText) {
		setIncorrectVal(option);
	}
}

// document.getElementById("next-question").onclick = function() {setParam()};
document.getElementById("next-question").onclick = function() {next()};
document.getElementById("a1").onclick = function() {checkAns("option1")};
document.getElementById("a2").onclick = function() {checkAns("option2")};
document.getElementById("a3").onclick = function() {checkAns("option3")};

$(document).ready(function() {
	
	var data = {
		resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"
	}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(data) {
			record(data);
		}
	});
})