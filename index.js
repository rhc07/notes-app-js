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

function getContentValue() {
  var value = document.getElementById("note").value;
  return value;
}
function createElement(content) {
  var el = document.createElement("a");
  var notePad = document.getElementsByClassName("notes")[0];
  notePad.appendChild(el);
  el.setAttribute("href", '#' + content);
  return el;
}
function appendText(content, element) {
  element.innerHTML = "<li>" + content + "</li>";
}

function addNote() {
  var content = getContentValue();
  insertNote(content);
  appendText(content, createElement(content));
  resetTextarea();
}

function resetTextarea() {
  var text = document.getElementById('note');
  text.value = text.defaultValue;
}