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
      this.list = [new Note('this is note 1')];
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

"=============================================================================="
'the code below contains the apps internal methods' 

// gets the content of the box and returns it. Used as an input argument for other functions. 
function getBoxContent() {
    let content = document.getElementById("note-content").value;
    return content ;
};

// clears the preview list in the webpage
function clearPreviews() {document.getElementById("notes").innerHTML = ""}

// refreshes the previews on the page. Taking info from the Notelist. 
function refreshContentPreviews() { 
    clearPreviews();
    noteList.list.forEach(function(content, ind) {
      document.getElementById("notes").innerHTML += (`<li id='${ind}'><a href='#${content.preview}'>` + content.preview + '</a></li>');
    });
};

// takes the box content and creates a Note object with it. Then saves into the notelist 
function saveNote() {
    noteList.add(getBoxContent());
};

// listens for a click on a selected note. The note will then be oopened in full. 
for(let i = 0; i < noteList.list.length; i++ ) {
    let note = document.getElementById(`${i}`) ;
    let noteText = '' 
    note.addEventListener('click', function(event) {
      noteText = noteList.list[i].fullContent;
      document.getElementById(`${i}`).innterHTML = noteText ;
    });

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

