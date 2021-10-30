function set_count() {
	count = 0;
}

function get_count() {
	return count;
}

function inc_count() {
	count += 1;
}

function dec_count() {
	count -= 1;
}

set_count();

document.getElementById("next_button").onclick = function() {next()};

function next() {
	if(count < 52) {
		function iterateRecords(data) {
			$.each(data.result.records, function(recordKey, recordValue) {
		
				var recordEnglish = recordValue["English"];
				var recordKala = recordValue["Kala Lagaw Ya"];
				var recordID = recordValue["_id"];
		
				if(recordEnglish && recordID == get_count()) {
					$('.englishword').text(recordEnglish);
					$('.englishword').append('<img src="../images/' + recordID + '.png" alt="' + recordEnglish + '"/>'); 
					$('#word-num').text("Word " + recordID + " of 52"); 
				}
		
				if(recordKala && recordID == get_count()) {
					$('.kalaword').text(recordKala); 
					$('.kalaword').append('<img src="../images/' + recordID + '.png" alt="' + recordEnglish +'"/>');
					$('#word-num').text("Word " + recordID + " of 52"); 
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
		inc_count();
	}
}

document.getElementById("prev_button").onclick = function() {prev()};

function prev() {
	if(count > 1) {
		count -= 2;
		next();
	}
}

function changeLanguage() {
	if(document.getElementById('current-language').innerHTML == 'English') {
		$('#current-language').text('Kala Lagaw Ya');
	}

	else {
		$('#current-language').text('English');
	}
}

$(document).ready(function() {
	next();
	$('#current-language').text('English');
	var card = document.querySelector('.card');
	card.addEventListener( 'click', function() {
  		card.classList.toggle('is-flipped');
		changeLanguage();
	});
})
