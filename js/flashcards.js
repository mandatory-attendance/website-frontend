var card = document.querySelector('.card');
card.addEventListener( 'click', function() {
  card.classList.toggle('is-flipped');
});

function set_count() {
	count = 1;
}

function get_count() {
	return count;
}



set_count();

// document.getElementById("tryAgain").style.display = "none"

function iterateRecords(data) {
	console.log(data);
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];

		if(recordEnglish && recordID == get_count()) {
			// $('<section class="scene scene--card"><section class="card"><section class="card__face card__face--front">').append(
				$('.englishword ').text(recordEnglish);
				// $(".footer_left > p").text("This is New Text");
				// );
		}

		if(recordKala && recordID == get_count()) {

			$('.notenglishword ').text(recordKala); 
		}
	});
}

function inc_count() {
	
	count = count + 1;
	console.log(count);
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];

		if(recordEnglish && recordID == get_count()) {
			// $('<section class="scene scene--card"><section class="card"><section class="card__face card__face--front">').append(
				$('.englishword ').text(recordEnglish);
				// $(".footer_left > p").text("This is New Text");
				// );
		}

		if(recordKala && recordID == get_count()) {

			$('.notenglishword ').text(recordKala); 
		}
	})
}

// function next() {
// 	console.log(count);
	
// 	iterateRecords()	
// 	console.log(count);
// 	inc_count()
// }

document.getElementById("next_button").onclick = function(){inc_count()};

$(document).ready(function() {
	var data = {resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});
})
