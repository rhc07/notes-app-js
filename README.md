# notes-app-js


## Team members

- Kasey
- Sandy
- Rorie
- Jai

### Timetable structure:

- Morning meeting: 10am - 10:15am
- Lunch time catch up: 2pm - 2:15pm
- Afternoon round up: 4:45pm - 5:15pm

### Aim to swap pairs every hour (this can be flexible)

### What do we need our Testing Framework to be doing?

##### Basic Features:
- See whether our tests are passing or failing
- Label for tests and referencing
- We will be using the equal and error matchers


Example Test input:

```
it('2 + 2 is equal to 4', function(){
  expect(2 + 2).toEqual(4)
})
```

Example Test Output:

```
Test: 2 + 2 is equal to 4
✔ Pass
```

### Node//HTTP-Server Set Up

Installing Node
In your terminal, run:
```
$ node -v
```
If you get a message that says node: command not found, run:
```
$ brew install node
```
npm will automatically be installed when you install node.

HTTP-Server Set Up
In your terminal, run:
```
npm install -g http-server
```
```
http-server
```
Access the webpage by pasting one of the links in your browser.

Skeleton Plan:

1) http node server
2) in node - interface.js
3) index.html
4) connect interface, index, and tests
