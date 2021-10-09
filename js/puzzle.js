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
    
    let sourceElemDataId = 'span[data-source-id="' + dataSourceId + '"]';
    let sourceElemSpanTag = document.querySelector(sourceElemDataId);
    
    Object.assign(sourceElemSpanTag, {
      className: 'notDraggable',
      draggable: false,
    });
  }
  
}