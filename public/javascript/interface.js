var notes = [
  "blue bugs bite bushes",
  "I'm no longer scared of touchies",
  "Take the mango out, and push it to the moon",
  "juice should only be jambad on thursdays",
  "A haiku, by Jai, Kasey, Rorie & Sandy"
]

// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_localstorage
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("notes", notes);
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("notes");
  } else {
    document.getElementById("result").innerHTML = "Your notes were not saved because your browser does not support Web Storage.";
  }
