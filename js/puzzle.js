document.getElementById("tryAgain").style.display = "none";

function set_count() {
	count=1;
}

function get_count() {
	return count;
}

function inc_count() {
	count = count + 1;
}

function arrayShuffle(array) {  //source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];

  }

  return array;
}

set_count();




function dragStartHandler(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
  e.target.style = 'opacity: 0.3';
}
function dragEndHandler(e) {
  e.target.style = 'opacity: 1';
}

function dragEnterHandler(e) {
  e.preventDefault();
  e.target.style = 'border: 2px dashed gray; box-sizing: border-box';
}

function dragOverHandler(e) {
  e.preventDefault();
}

function dragLeaveHandler(e) {
  e.target.style = 'font-size:3vw; background: #E4E7E9';
}

function dropHandler(e) {
  e.preventDefault();
  dragLeaveHandler(e); 
  
  const dataSourceId = e.dataTransfer.getData('text'); 
  const dataTargetId = e.target.getAttribute('data-target-id');
  
  if(dataSourceId === dataTargetId) {
    e.target.insertAdjacentHTML('afterbegin', dataSourceId);
    e.target.style = 'font-size: 3vw; background: #A0CDC4';
    document.getElementById("tryAgain").style.display = "none";
    
    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    
    Object.assign(sourceElemSpanTag, {
      className: 'notDraggable',
      draggable: false,
    });
  }
  else{
    document.getElementById("tryAgain").style.display = "block";
  }
  
}

function iterateRecords(data) {

	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];


    if(recordEnglish && recordID == get_count()) {
			$("#puzzleQuestion").prepend(
				$('<figcaption id = "puzzleEnglishQuestion">').text(recordEnglish)
				);

      let kalaLetter = recordKala.toUpperCase();
      let kalaOrderedLetter = kalaLetter.split('');
      

      console.log(kalaLetter);
      console.log(kalaOrderedLetter);
      
      for (let i = 0; i < kalaOrderedLetter.length; i++) {
        $("#answerTarget").append(
          $('<span data-target-id = "'+ kalaOrderedLetter[i] +'"class = "target">')
          );
      }

      let kalaRandomLetter = arrayShuffle(kalaOrderedLetter);
      console.log(kalaRandomLetter);
      for (let i = 0; i < kalaRandomLetter.length; i++) {
        $("#answerSource").append(
          $('<span data-source-id = "'+ kalaRandomLetter[i] +'"draggable="true" "class = "source">').text(kalaRandomLetter[i])
          );
      }
      const answerSource = document.querySelectorAll('#answerSource > span');
      const answerTarget = document.querySelectorAll('#answerTarget > span');

      console.log(answerSource);
      console.log(answerTarget);

      answerSource.forEach(el => {
        el.addEventListener('dragstart', dragStartHandler);
        el.addEventListener('dragend', dragEndHandler);
      })
      answerTarget.forEach(el => {
        el.addEventListener('dragenter', dragEnterHandler);
        el.addEventListener('dragover', dragOverHandler); 
        el.addEventListener('dragleave', dragLeaveHandler);
        el.addEventListener('drop', dropHandler);
      })  
      
		}


	});
}


$(document).ready(function() {
	
	var data = {
		resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"
	};

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