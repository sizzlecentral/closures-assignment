
// Generate a function that requires arguments.
// Notice that the examples at the end are also passing arguments!
// How many parameters do the outer and inner functions each need?

var recipient = "Devon";

function sendNote(note) {
  getSendNoteFunction();
  console.log(note);
}

// YOUR CODE HERE ------------------------

function getSendNoteFunction() {
  var recipient = "Devon";
  console.log("Dear " + recipient + ",");
}

// ---------------------------------------

sendNote("I hope you are well!");
// Dear Devon,
// I hope you are well!
recipient = "Mark"; // (no effect on next method call)
sendNote("You are cordially invited...");
// Dear Devon,
// You are cordially invited...
