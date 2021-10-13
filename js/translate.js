function set_count() {
	count = 1;
}

function get_count() {
	return count;
}

function inc_count() {
	count = count + 1;
}

set_count();

document.getElementById("next_button").onclick = function() {next()};

function next() {
	function iterateRecords(data) {
		$.each(data.result.records, function(recordKey, recordValue) {
	
			var recordEnglish = recordValue["English"];
			var recordKala = recordValue["Kala Lagaw Ya"];
			var recordID = recordValue["_id"];
	
			if(recordEnglish && recordID == get_count()) {
				$("#records").append(
					$('<section class="english">').append(
						$('<h2>').text(recordEnglish)
					)
				);
			}
	
			if(recordKala && recordID == get_count()) {
				$("#records").append(
					$('<section class="kala">').append(
						$('<h2>').text(recordKala)
					)
				);
			}
		});
	console.log(count);
	inc_count()
	}

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
			iterateRecords(data);
		}
	});
})}
