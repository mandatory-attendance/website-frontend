/* function set_count() {
	count = 0;
}

function get_count() {
	return count;
}

function inc_count() {
	count += 1;
}

function rand_id() {
	return Math.floor((Math.random() * 52)) + 1;
}

function rand_answer() {
	return Math.floor((Math.random() * 3)) + 1;
}

// function store_id(correct_id) {
// 	c_id = correct_id;
// }

// function get_id() {
// 	return c_id;
// }

// function store_num(correct_num) {
// 	c_num = correct_num;
// }

// function get_num() {
// 	return c_num;
// }

function append_d1(correct_id, d1_num) {
	var d1_id = rand_id();

	while(d1_id == correct_id) {
		d1_id = rand_id();
	}

	var d1_word = eng_array[d1_id-1];
	$('#a' + d1_num).text(d1_word);
}

var eng_array = [];
var num_array = [1,2,3];

// function checkCorrect() {

// }

set_count();

document.getElementById("next-question").onclick = function() {next()};
document.getElementById("a1").onclick = function() {checkCorrect()};
document.getElementById("a2").onclick = function() {checkCorrect()};
document.getElementById("a3").onclick = function() {checkCorrect()};

function next() {
	if(count < 52) {
		function iterateRecords(data) {
			$.each(data.result.records, function(recordKey, recordValue) {
		
				var recordEnglish = recordValue["English"];
				var recordKala = recordValue["Kala Lagaw Ya"];
				var recordID = recordValue["_id"];

				eng_array.push(recordEnglish)

				if(recordKala && recordID == get_count()) {
					$('#quiz-question').text("What is the English word for " + recordKala + "?");
				}

				if(recordEnglish && recordID == get_count()) {
					var correct_num = rand_answer();
					$('#a' + correct_num).text(recordEnglish);
					var correct_id = recordID;
					eng_array.splice((recordID-1), 1);
					num_array.splice((correct_num-1), 1);
					console.log(eng_array);
					console.log(num_array);
				}
			});
		}

		var data = {resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"}
		$.ajax({
			url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
			data: data,
			dataType: "jsonp",
			cache: true,
			success: function(data) {
				iterateRecords(data);
			}
		});
		d1_num = num_array[0]
		append_d1(get_count(), d1_num);
		inc_count();
		eng_array = [];
		num_array = [1,2,3];
		console.log(get_count());
	}
}

$(document).ready(function() {
	next();
})
 */



var listOfWords = {};

function record(data) {
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordIndi = recordValue["Kala Lagaw Ya"];

		listOfWords[recordEnglish] = recordIndi;
	});

	setParam();
}

function randomIndiWord() {
	var index = Math.floor(Math.random()*52);
	var counter = 1;
	for (word in listOfWords) {
		if (counter == index) {
			return listOfWords[word];
		} else {
			counter += 1;
		}
	}
}

function randomEnglishWord() {
	var index = Math.floor(Math.random()*51);
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

function setOptions(questionWord) {
	var answer = findAnswer(questionWord);
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

	document.getElementById("a1").onclick = function() {checkAns(answer, option1)};
	document.getElementById("a2").onclick = function() {checkAns(answer, option2)};
	document.getElementById("a3").onclick = function() {checkAns(answer, option3)};
}

function setParam() {
	var word = randomIndiWord();
	var question = document.getElementById("question");
	question.innerText = "What is the English word for " + word + "?";

	setOptions(word);
}

function setCorrectVal(option) {

}

function setIncorrectVal(option) {

}


function checkAns(answer, option) {
	if (answer == option.innerText) {
		setCorrectVal(option);
	} else if (answer != option.innerText) {
		setIncorrectVal(option);
	}
}
































document.getElementById("next-question").onclick = function() {setParam()};

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