1.  
var lastWord = 'welcome';
console.log(lastWord);
lastWord = 'goodbye';

  => Outputs 'welcome' since that was the value of lastWord
  at the time the function was run.

2.  
var message = "Up here!";
function shout() {
  console.log(message);
}
shout();

  => Outputs 'Up here!' since that is the value of message,
  and the function is called at the bottom.

3.  
