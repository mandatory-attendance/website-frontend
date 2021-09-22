function getYear(year) {
	if(year) {
		return year.match(/[\d]{4}/); // This is regex (https://en.wikipedia.org/wiki/Regular_expression)
	}
}

function iterateRecords(data) {

	console.log(data);

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];

		if(recordEnglish) {
			$("#records").append(
				$('<section class="english">').append(
					$('<h2>').text(recordEnglish)
				)
			);
		}

		if(recordKala) {
			$("#records").append(
				$('<section class="kala">').append(
					$('<h2>').text(recordKala)
				)
			);
		}
	});

}

$(document).ready(function() {

	var data = {
		resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"
	}

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp", // We use "jsonp" to ensure AJAX works correctly locally (otherwise XSS).
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});

	// var data = {
	// 	resource_id: '9eaeeceb-e8e3-49a1-928a-4df76b059c2d', // the resource id
	// 	limit: 50, // get 5 results
	// 	// q: 'jones' // query for 'jones'
	//   };
	//   $.ajax({
	// 	url: 'https://www.data.qld.gov.au/api/3/action/datastore_search',
	// 	data: data,
	// 	dataType: 'jsonp',
	// 	success: function(data) {
	// 		iterateRecords(data)
	// 	}
	//   });

});