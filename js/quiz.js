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
	Math.floor((Math.random() * 52)) + 1;
}

function rand_answer() {
	Math.floor((Math.random() * 3)) + 1;
}

set_count();

document.getElementById("next-question").onclick = function() {next()};

function next() {
	if(count < 52) {
		function iterateRecords(data) {
			$.each(data.result.records, function(recordKey, recordValue) {
		
				var recordEnglish = recordValue["English"];
				var recordKala = recordValue["Kala Lagaw Ya"];
				var recordID = recordValue["_id"];

				if(recordKala && recordID == get_count()) {
					$('#quiz-question').text("What is the English word for " + recordKala + "?");
				}
		
				// if(recordEnglish && recordID == get_count()) {
				// 	$('.englishword').text(recordEnglish);
				// 	$('.englishword').append('<img src="../images/' + recordID + '.png" alt="' + recordEnglish + '"/>'); 
				// 	$('#word-num').text("Word " + recordID + " of 52"); 
				// }
		
				// if(recordKala && recordID == get_count()) {
				// 	$('.kalaword').text(recordKala); 
				// 	$('.kalaword').append('<img src="../images/' + recordID + '.png" alt="' + recordEnglish +'"/>');
				// 	$('#word-num').text("Word " + recordID + " of 52"); 
				// }

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
		inc_count();
	}
}

$(document).ready(function() {
	next()
})
