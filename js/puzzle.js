let currentWord = '';
let currentGuessedLetter = 0;



//counting functions
function set_count() {
	count=1;
}

function get_count() {
	return count;
}

function inc_count() {
	count = count + 1;
}

//main data iteration
function iterateRecords(data) {

  

	$.each(data.result.records, function(recordKey, recordValue) {
    
		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];
    

    if(recordEnglish && recordID == get_count()) {
      
      
      //Seting up the questions
			$("#puzzleQuestion").append(
				$('<figcaption id = "puzzleEnglishQuestion">').text(recordEnglish)
			);
      
      $("#puzzleQuestion").append(
				$('<img id = "picture" src = "../images/'+ recordID + '.png" alt = "' + recordEnglish +'">')
			);
      // $('#puzzleQuestion').append('<img src="../images/' + recordID + '.png" />'); 

      //Setting up the answer and the choice

      let kalaLetter = recordKala.toUpperCase();
      currentWord = kalaLetter;
      let kalaOrderedLetter = kalaLetter.split('');
      let kalaRandomLetter = [];
      
      for (let i = 0; i < kalaOrderedLetter.length; i++) {
        $("#answerTarget").append(
          $('<span data-target-id = "'+ kalaOrderedLetter[i] + i +'"class = "target">')
          );
        
          kalaRandomLetter.push(kalaOrderedLetter[i] + i);
      }

      kalaRandomLetter = arrayRandomize(kalaRandomLetter);
      
      for (let i = 0; i < kalaRandomLetter.length; i++) {
        $("#answerSource").append(
          $('<span data-source-id = "'+ kalaRandomLetter[i] +'"draggable="true" "class = "source">').text(kalaRandomLetter[i][0])
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
      

      //When next button is clicked

      document.getElementById("nextPuzzle").onclick = function() {
        
        const completeSource = document.querySelectorAll('#answerSource > span');
        const completeTarget = document.querySelectorAll('#answerTarget > span');
        let englishQuestion = document.getElementById("puzzleEnglishQuestion");
        let puzzlePicture = document.getElementById("picture");
    
        englishQuestion.remove();
        puzzlePicture.remove();

        currentGuessedLetter = 0;
        

        completeSource.forEach(el => {
          el.remove();
        })
        completeTarget.forEach(el => {
          el.remove();
        }) 
        inc_count();

        if (get_count()<53){

          iterateRecords(data);

        }

        else{

          document.getElementById("nextPuzzle").style.display="none";
          document.getElementById("finishMessage").style.display = "block";
        }

        
      }; 
		}
	}); 
}

//Array randomizer
//source : https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  
function arrayRandomize(array) {  

  let oldIndex = array.length;
  let newRandomIndex;

  // Loop while old array is not empty
  while (oldIndex != 0) {

    // Assign new index for new array
    newRandomIndex = Math.floor(Math.random() * oldIndex);
    oldIndex--;

    // Swap old index and new index
    [array[oldIndex], array[newRandomIndex]] = [
      array[newRandomIndex], array[oldIndex]];

  }

  return array;
}



//Drag and Drop Functions
//source : https://blog.jscrambler.com/build-a-simple-game-in-vanilla-js-with-the-drag-and-drop-api

function dragStart(e) {
  const data = { 
    sourceId : e.target.getAttribute('data-source-id')
  };
  e.dataTransfer.setData('text', JSON.stringify(data));
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
  
  const dataSourceId = JSON.parse(e.dataTransfer.getData('text')); 
  const letterSourceId = dataSourceId.sourceId;
  const dataTargetId = e.target.getAttribute('data-target-id');
  const wordLength = currentWord.length;
  
  
  if(letterSourceId === dataTargetId) {
    e.target.insertAdjacentHTML('afterbegin', letterSourceId[0]);
    e.target.style = 'font-size: 3vw; background: #467e9d';
    document.getElementById("tryAgain").style.display = "none";
    
    let sourceElemDataId = 'span[data-source-id="' + letterSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    currentGuessedLetter++
    
    Object.assign(sourceElemSpanTag, {
      className: 'notDraggable',
      draggable: false,
    });

    if (currentGuessedLetter === wordLength){
      document.getElementById("nextPuzzle").style.display="block";
    }
    
  }
  else{
    document.getElementById("tryAgain").style.display = "block";
  }
  
}


$(document).ready(function() {

  document.getElementById("nextPuzzle").style.display="none"; //change this next button to block if needed
  document.getElementById("tryAgain").style.display = "none";
  document.getElementById("finishMessage").style.display = "none";

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