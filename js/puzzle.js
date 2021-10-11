document.getElementById("tryAgain").style.display = "none"

const answerSource = document.querySelectorAll('#answerSource > span');
const answerTarget = document.querySelectorAll('#answerTarget > span');

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

	console.log(data);
	$.each(data.result.records, function(recordKey, recordValue) {

		var recordEnglish = recordValue["English"];
		var recordKala = recordValue["Kala Lagaw Ya"];
		var recordID = recordValue["_id"];
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
})