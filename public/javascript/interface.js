// var http = require('http');
//
// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);

var notes = [
  "blue bugs bite bushes",
  "I'm no longer scared of touchies",
  "Take the mango out, and push it to the moon",
  "Please lord save our souls from fossilization",
  "A haiku, by Jai, Kasey, Rorie & Sandy"
]

for (i = 0; i < notes.length; i++)
document.writeln(notes[i].substring(0,20) + "<br>");
