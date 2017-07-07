// var lastWord = 'welcome';
// console.log(lastWord);
// lastWord = 'goodbye';


// var message = "Up here!";
//
// function shout() {
//   console.log(message);
// }
//
// shout();


// var message = "Up here!";
//
// function shout(message) {
//   console.log(message);
// }
//
// shout("Down below!")


// var muffins = 'two dozen';
// var purchasedMuffins;
//
// function getMuffins() {
//   return muffins;
// }
// purchasedMuffins = getMuffins();
// console.log(purchasedMuffins);


// var chore = 'laundry';
//
// function doChores() {
//   var chore = 'sneak out';
//
//   function reportActivity() {
//     console.log(chore);
//   }
//
//   reportActivity();
// }
//
// doChores(); // calling doChores(), which then calls reportActivity()


// var letter;
// var contents = 'Looking for gold';
//
// function getMail() {
//
//   function changeContents() {
//     var contents = 'Struck it rich!';
//   }
//
//   changeContents();
//   return contents;
// }
//
// letter = getMail();
// console.log(letter);


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
