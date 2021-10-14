function init_Arrays() {
	engArray = [];
	kalaArray = [];
}

function get_eng_array() {
	return engArray;
}

function get_kala_array() {
	return kalaArray;
}

init_Arrays();

function iterateRecords(data) {
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];

		for (let i = 1; i < 53; i++) {
			if(recordID == i) {
			get_eng_array().push(recordEnglish)
			}
		}
		
		for (let i = 1; i < 53; i++) {
			if(recordID == i) {
				get_kala_array().push(recordKala)
			}
		}	

		document.getElementById('translate-button').onclick = function() {translate()};

		function translate() {
			var engInput = document.getElementById('eng-input').value
			var index = get_eng_array().indexOf(engInput)
			console.log(index)
			if(index) {
				var translation = get_kala_array()[index]
				$('.word').text(translation);
			}

			var kalaInput = document.getElementById('kala-input').value
			var index = get_kala_array().indexOf(kalaInput)
			console.log(index)
			if(index) {
				var translation = get_eng_array()[index]
				$('.word').text(translation);
			}
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

// Autocomplete functionality - https://www.w3schools.com/howto/howto_js_autocomplete.asp

function autocomplete(inp, arr) {
  var currentFocus;
  inp.addEventListener("input", function(e) {
      var a, b, i, val = this.value;
      closeAllLists();
      if (!val) { return false;}
      currentFocus = -1;
      a = document.createElement("DIV");
      a.setAttribute("id", this.id + "autocomplete-list");
      a.setAttribute("class", "autocomplete-items");
      this.parentNode.appendChild(a);
      for (i = 0; i < arr.length; i++) {
        if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
          b = document.createElement("DIV");
          b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
          b.innerHTML += arr[i].substr(val.length);
          b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
              b.addEventListener("click", function(e) {
              inp.value = this.getElementsByTagName("input")[0].value;
              closeAllLists();
          });
          a.appendChild(b);
        }
      }
  });
  inp.addEventListener("keydown", function(e) {
      var x = document.getElementById(this.id + "autocomplete-list");
      if (x) x = x.getElementsByTagName("div");
      if (e.keyCode == 40) {
        currentFocus++;
        addActive(x);
      } else if (e.keyCode == 38) {
        currentFocus--;
        addActive(x);
      } else if (e.keyCode == 13) {
        e.preventDefault();
        if (currentFocus > -1) {
          if (x) x[currentFocus].click();
        }
      }
  });
  function addActive(x) {
    if (!x) return false;
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    x[currentFocus].classList.add("autocomplete-active");
  }
  function removeActive(x) {
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }
  function closeAllLists(elmnt) {
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
      x[i].parentNode.removeChild(x[i]);
    }
  }
}
document.addEventListener("click", function (e) {
    closeAllLists(e.target);
});
}

$(document).ready(function() {
	console.log(get_eng_array())
	console.log(get_kala_array())
	autocomplete(document.getElementById("eng-input"), get_eng_array());
	autocomplete(document.getElementById("kala-input"), get_kala_array());
});