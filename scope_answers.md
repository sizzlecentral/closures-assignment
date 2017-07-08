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
var letter;
var contents = 'Looking for gold';
function getMail() {
  function changeContents() {
    var contents = 'Struck it rich!';
  }
  changeContents();
  return contents;
}
letter = getMail();
console.log(letter);

  => Outputs 'looking for gold', as changeContents has no
  return value and var contents is local to that function.  
  The variable contents set in line 2 remains unchanged.

7.  
var decision;
function firstIdea() {
  var decision = 'Buy a new car';
  return decision;
}
function secondIdea() {
  console.log(decision);
}
firstIdea();
secondIdea();

  => Outputs 'undefined', as firstIdea has a return value
  of the local variable decision but prints nothing to the
  screen.  secondIdea doesn't have access to the local
  variable in firstIdea, so it logs the undefined variable
  decision to the screen, from line 1.


// ----- Exercise 2 ----- //

1.
function buildHouse(address) {
  // ... house gets built
  return 'Building house at ' + address;
}
buildHouse('123 Happy St.');
console.log(address);

  => Errors as address can't be accessed outside of the
  function.  Defining 'address = buildHouse('123 Happy St.')'
  outside of the function prints the correct string.

2.  
var determined = false;
if (determined) {
  var smoothie = 'strawberry banana';
}
console.log(smoothie);

  => smoothie is undefined outside of the if statement.  
  Moving var smoothie outside of the statement makes it
  print whether determined is true or false.

3.  
for (var index = 0; index < 5; index++) {
  // ...
}
console.log(index);

  => Moving the for loop inside a function makes index
  inaccessible to console.log.

4.  
var items = ['glasses', 'toothpaste', 'wallet'];
items.forEach(function(item) {
  var lastItem = item;
});
console.log(lastItem);

  => Changing forEach loop to a for loop allows you to
  output the last item from items.
