var listOfWords = {};

function initiate_data() {
	for (word in listOfWords) {
		$("#engWords").append("<option value=\"" + word + "\"");
		$("#indiWords").append("<option value=\"" + listOfWords[word] + "\"");
	}
}

function record(data) {
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordIndi = recordValue["Kala Lagaw Ya"];

		listOfWords[recordEnglish] = recordIndi;
	});

	initiate_data();
}

function setVal() {
	var englishInput = document.getElementById("english-word").value;
	if (englishInput != undefined) {
		
		if (englishInput in listOfWords) {
			$("#indigenous-word").val(listOfWords[englishInput]);
			setImg(englishInput);
		}
	}

	var indiInput = document.getElementById("indigenous-word").value;
	if (indiInput != undefined) {
		for(word in listOfWords) {
			if  (listOfWords[word] == indiInput) {
				$("#english-word").val(word);
				setImg(word);
			}
		}
	}
}

function findImg(input) {
	let i = 1;
	for (word in listOfWords) {
		if (word != input) {
			i += 1;
		}
		else if (word == input) {
			break;
		}
	}
	return i;
}

function setImg(input) {
	let index = findImg(input);
	var pic = document.getElementById("picture");
	pic.setAttribute("src","./../images/" + index + ".png");
	pic.setAttribute("alt",input);
}

document.getElementById("translate").onclick = function() {setVal()};

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