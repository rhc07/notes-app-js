'use strict'
class Note {
  constructor(content) {
    this.fullContent = content ;
    this.preview = content.substring(0,20) ;
  };
};
class Notelist {
  constructor() {
    // stores an array of Note objects. 
      this.list = [];
  };
  // creates a new Note object with the provided string. 
  add(content) {
    let note = new Note(content);
    this.list.push(note) ;
  };
};
// instantiate notelist
let noteList = new Notelist ;

// begins listning for the form submit event
formSubmitEventHandler();

// displays the notes full content when the note prview is clicked. 
displayNoteWhenPreviewClicked();

revertToDefaultDisplay(); 

"=============================================================================="
'the code below contains the apps internal methods' 

// gets the content of the box and returns it. Used as an input argument for other functions. 
function getBoxContent() {
    let content = document.getElementById("note-content").value;
    return content ;
};

// clears the preview list in the webpage
function clearPreviews() {document.getElementById("notes").innerHTML = ""}

// listens for a click on a selected note. The note will then be oopened in full. 
function displayNoteWhenPreviewClicked() {
  window.addEventListener('hashchange', function(event){
    let ind = getIndexFromUrl(window.location);
    displayNoteContent(ind);
    // event.preventDefault()
    // revertToDefaultDisplay();
  });
};
function revertToDefaultDisplay(){
  document.getElementById("revert").addEventListener('click', function(){
    refreshContentPreviews();
  })
};
  
function displayNoteContent(ind) {
  document.getElementById(`${ind}`).innerHTML = noteList.list[ind].fullContent ;
};
// gets the hash index value from the url 
function getIndexFromUrl(location){
  return parseInt(location.hash.split("#")[1]);
};

// refreshes the previews on the page. Taking info from the Notelist. 
function refreshContentPreviews() { 
    clearPreviews();
    noteList.list.forEach(function(content, ind) {
      if(content.fullContent.length <= 20) {document.getElementById("notes").innerHTML += (`<li id='${ind}'><a href='#${ind}'>` + content.preview + '</a></li>'
      )}
      else {document.getElementById("notes").innerHTML += (`<li id='${ind}'><a href='#${ind}'>` + content.preview + "..." + '</a></li>' )}; 
    });
    window.location.hash = ""
    clearTextarea();
};

// takes the box content and creates a Note object with it. Then saves into the notelist 
function saveNote() {
    noteList.add(getBoxContent());
};
 
// listens for a 'form submit' event. upon this it saves the note and refreshes the previews 
function formSubmitEventHandler() {
    let button = document.getElementById("submit");
    button.addEventListener('click', function(event) {
       event.preventDefault();
       saveNote();
       refreshContentPreviews();
     });
};

function clearTextarea() {
  document.getElementById("note-content").value = "";
};

"experimental section"
"=============================================================================="



// function clearNotePad() {
//   document.getElementById("notes").innerHTML = '';
// }

// Local storage management --> this is not working yet
// function storeData() {
//   localStorage.setItem('notes', JSON.stringify(myNoteManager.notes));
// }
// function retrieveData() {
//   let retrievedData = localStorage.getItem('notes');
//   let data = JSON.parse(retrievedData);
//   data.forEach(note => myNoteManager.notes.push(new Note(note)));
//   printContent();
// }