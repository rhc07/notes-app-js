// function create() {
//   var value = document.getElementById("note").value;
//   var el = document.createElement("a");
//   var notePad = document.getElementsByClassName("notes")[0];
//   notePad.appendChild(el);
//   el.setAttribute("href", '#' + value)
//   el.innerHTML = "<li>" + value + "</li>";
// } 

noteList = [];

function insertNote(content) {
  noteList.push(content)
}


function getBoxContent() {
  let content = document.getElementById("note-content").value;
  return content;
}

function printContent(content) {
  document.getElementById("notes").innerHTML += (`<a href='#${content}'>` + content + '</a>');
}

function addNote() {
  printContent(getBoxContent());
}

function eventHandler() {
  let button = document.getElementById("submit");
  button.addEventListener('click', function(event) {
    event.preventDefault();
    addNote();
});
}

eventHandler();
