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
      document.getElementById("nextPuzzle").style.display="none"; //change this next button to block if needed

      //Appending the question in English
			$("#puzzleQuestion").append(
				$('<figcaption id = "puzzleEnglishQuestion">').text(recordEnglish)
			);
      
      //Appending the picture to the page
      $("#puzzleQuestion").append(
				$('<img id = "questionPicture" src = "../images/'+ recordID + '.png" alt = "' + recordEnglish +'">')
			);

      //Setting up the answer and the choice

      let kalaLetter = recordKala.toUpperCase();
      currentWord = kalaLetter;
      let kalaOrderedLetter = kalaLetter.split('');
      let kalaRandomLetter = [];
      
      //Setting up the target blocks
      for (let i = 0; i < kalaOrderedLetter.length; i++) {
        $("#answerTarget").append(
          $('<span data-target-id = "'+ kalaOrderedLetter[i] + i +'"class = "target">')
          );
        
          kalaRandomLetter.push(kalaOrderedLetter[i] + i);
      }

      //Randomizing the position for each words
      kalaRandomLetter = arrayRandomize(kalaRandomLetter);
      
      //Setting up the randomized source blocks
      for (let i = 0; i < kalaRandomLetter.length; i++) {
        $("#answerSource").append(
          $('<span data-source-id = "'+ kalaRandomLetter[i] +'"draggable="true" "class = "source">').text(kalaRandomLetter[i][0])
          );
      }

      //Initializing each blocks into drag and drop functions
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
        let puzzlePicture = document.getElementById("questionPicture");
    
        englishQuestion.remove();
        puzzlePicture.remove();

        currentGuessedLetter = 0;
        
        // Delete current finished question
        completeSource.forEach(el => {
          el.remove();
        })
        completeTarget.forEach(el => {
          el.remove();
        }) 

        //Incrementing the question id
        inc_count();

        //Showing the next question
        if (get_count()<53){

          iterateRecords(data);

        }

        //Displaying message when the user has finished puzzle mode
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
// changes: variable names
  
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
// changes: variable names, position, and structure 

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
  e.target.style = 'font-size:5vw; background: #467e9d';
}

function drop(e) {
  e.preventDefault();
  dragLeave(e); 
  
  const dataSourceId = JSON.parse(e.dataTransfer.getData('text')); 
  const letterSourceId = dataSourceId.sourceId;
  const dataTargetId = e.target.getAttribute('data-target-id');
  const wordLength = currentWord.length;
  
  //If user has correctly assign one of the letter
  if(letterSourceId === dataTargetId) {
    e.target.insertAdjacentHTML('afterbegin', letterSourceId[0]);
    e.target.style = 'font-size: 5vw; background: #467e9d';
    document.getElementById("tryAgain").style.display = "none";
    
    let sourceElemDataId = 'span[data-source-id="' + letterSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    currentGuessedLetter++;
    
    //Set finished letter into undraggable
    Object.assign(sourceElemSpanTag, {
      className: 'notDraggable',
      draggable: false,
    });
    
    //When user has correctly assign the all the letters, display next button
    if (currentGuessedLetter === wordLength){
      document.getElementById("nextPuzzle").style.display="block";
    }
    
  }
  //When user has assign the wrong letter, display "Try again" message
  else{
    document.getElementById("tryAgain").style.display = "block";
  }
  
}

//When the page is ready
$(document).ready(function() {

  //Hiding complete message and try again message
  document.getElementById("tryAgain").style.display = "none";
  document.getElementById("finishMessage").style.display = "none";

  //Initializing the current word id
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