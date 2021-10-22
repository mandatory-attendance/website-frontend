function set_count() {
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
