class Note {
  constructor(content) {
    this.content = content;
  }
}

class NoteManager {
  constructor() {
    this.notes = []
  }
}

// Initialising NoteManager instance
myNoteManager = new NoteManager;

// Prints the notes from the NoteManager onto the HTML
function printNote(note, index) {
  let substring = if note.content.length < 20 then let subtring = note.conten else `${note.content.substring(0,20)}...`;
  let string = `${note.content}`;
  document.getElementById("notes").innerHTML += (`<a href='#${note.content}' id="${index}" >` + substring + '</a>');
}

// list = document.getElementById("notes");
// let html = "";
// let notesList = myNoteManager.notes;
// for (let i = 0; i < notesList.length; i++) {
//     html += `<a href="#${notesList[i].content}" id="${i}">${notesList[i].content}</a><br>`;
//     };
// list.innerHTML = html;

function printContent() {
  clearNotePad();
  myNoteManager.notes.forEach((note, index) => {
    printNote(note, index);
  });
}

function clearNotePad() {
  document.getElementById("notes").innerHTML = '';
}

// Add the note to NoteManager instance
function getBoxContent() {
  let content = document.getElementById("note-content").value;
  let note = new Note(content);
  insertNote(note);
  return content;
}

function insertNote(content) {
  myNoteManager.notes.push(content)
}

function clearTextarea() {
  document.getElementById("note-content").value = "";
}

function addNote() {
  getBoxContent();
  clearTextarea();
}

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

// Event Handler
function eventHandler() {
  let button = document.getElementById("submit");
  button.addEventListener('click', function(event) {
    event.preventDefault();
    addNote();
    printContent()

    // window.addEventListener("load", retrieveData());
    // window.addEventListener("beforeunload", storeData());
});
}

eventHandler();



let element = document.getElementById("index");
let string = "going on a really long run" // myNoteManager.notes[index]
element.addEventListener('click', function(event) {
  event.preventDefault();
  element.innerHTML = string;})