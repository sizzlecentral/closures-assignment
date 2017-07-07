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
var message = "Up here!";
function shout(message) {
  console.log(message);
}
shout("Down below!")

  => Outputs 'Down below!' as that is the value passed in as
  an argument when the function is called.

4.  
var muffins = 'two dozen';
var purchasedMuffins;
function getMuffins() {
  return muffins;
}
purchasedMuffins = getMuffins();
console.log(purchasedMuffins);

  => Outputs 'two dozen', as that is the value of muffins
  returned by the function getMuffins, which is then saved
  in the variable purchasedMuffins.

5.  
var chore = 'laundry';
function doChores() {
  var chore = 'sneak out';
  function reportActivity() {
    console.log(chore);
  }
  reportActivity();
}
doChores(); // calling doChores(), which then calls reportActivity()

  => Outputs 'sneak out', as the variable chore being used
  is the one local to the function being called, not the
  variable defined in the first line.

6.  
