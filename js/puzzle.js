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

function arrayRandomize(array) {  //source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  let currentIndex = array.length;
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




function dragStart(e) {
  e.dataTransfer.setData('text', e.target.getAttribute('data-source-id'));
  e.target.style = 'opacity: 0.3';
}
function dragEnd(e) {
  e.target.style = 'opacity: 1';
}

function dragEnter(e) {
  e.preventDefault();
  e.target.style = 'border: 2px dashed black; box-sizing: border-box';
}

function dragOver(e) {
  e.preventDefault();
}

function dragLeave(e) {
  e.target.style = 'font-size:3vw; background: #467e9d';
}

function drop(e) {
  e.preventDefault();
  dragLeave(e); 
  
  const dataSourceId = e.dataTransfer.getData('text'); 
  const dataTargetId = e.target.getAttribute('data-target-id');
  // const dataNumberId = e.dataTransfer.getData('data-number-source-id')
  // console.log(dataTargetId);
  // console.log(dataNumberId);
  
  if(dataSourceId === dataTargetId) {
    e.target.insertAdjacentHTML('afterbegin', dataSourceId);
    e.target.style = 'font-size: 3vw; background: #467e9d';
    document.getElementById("tryAgain").style.display = "none";
    
    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    console.log(sourceElemSpanTag)
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
      
      

      let EnglishQuestion = document.getElementById("puzzleEnglishQuestion");
      EnglishQuestion.remove();
			$("#puzzleQuestion").prepend(
				$('<figcaption id = "puzzleEnglishQuestion">').text(recordEnglish)
				);

      let kalaLetter = recordKala.toUpperCase();
      let kalaOrderedLetter = kalaLetter.split('');
      
      
      for (let i = 0; i < kalaOrderedLetter.length; i++) {
        $("#answerTarget").append(
          $('<span data-target-id = "'+ kalaOrderedLetter[i] + '"data-number-target-id = "' + i +'"class = "target">')
          );
      }

      let kalaRandomLetter = arrayRandomize(kalaOrderedLetter);
      for (let i = 0; i < kalaRandomLetter.length; i++) {
        $("#answerSource").append(
          $('<span data-source-id = "'+ kalaRandomLetter[i] + '"data-number-source-id = "' + i +'"draggable="true" "class = "source">').text(kalaRandomLetter[i])
          );
      }
      const answerSource = document.querySelectorAll('#answerSource > span');
      const answerTarget = document.querySelectorAll('#answerTarget > span');

      answerSource.forEach(el => {
        el.addEventListener('dragstart', dragStart);
        el.addEventListener('dragend', dragEnd);
      })
      answerTarget.forEach(el => {
        el.addEventListener('dragenter', dragEnter);
        el.addEventListener('dragover', dragOver); 
        el.addEventListener('dragleave', dragLeave);
        el.addEventListener('drop', drop);
      }) 
      
      document.getElementById("nextPuzzle").onclick = function() {
        
        const completeSource = document.querySelectorAll('#answerSource > span');
        const completeTarget = document.querySelectorAll('#answerTarget > span');
        completeSource.forEach(el => {
          el.remove();
        })
        completeTarget.forEach(el => {
          el.remove();
        }) 
        inc_count();
        iterateRecords(data);
        
        
      };
      
      
		}


	});
  
}


$(document).ready(function() {
	set_count();
	var data = {
		resource_id: "9229d441-bdcc-40a9-8ad9-d287b2d679c4"
	};

	$.ajax({
		url: "https://www.data.qld.gov.au/api/3/action/datastore_search",
		data: data,
		dataType: "jsonp",
		cache: true,
		success: function(data) {
			iterateRecords(data);
		}
	});
})