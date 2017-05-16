//alert("Let's get to work! ")
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.


/* TODO: Write a form handler function that will:
  1. capture the question asked in the form
  2. randomly select an element from the array of answers
  3. console log something conversational to user, like "Oh, you want to know [question]? Well, I think... [answer]"
*/

//This is an anonymous function
/*window.onload = function() {
  console.log("zomg ready!");
}

//or
*/

 //Have a named function
function windowReady() {
  //console.log("zomg ready!");
  //console.log("All of your questions answered, just maybe not in the order you ask them.");
  console.log(document.getElementsByTagName("small"));
  console.log(document.getElementById("fortune-container"));
}
window.onload = windowReady;

/*var newArray = [];
console.log("Length of array " + newArray.length); */

var spices = ["clove", "nutmeg", "ancho"];
//This is a named function
function countEmUp(arr){
   var allSpices = spices.join("");
   return allSpices.length;
}
//console.log(countEmUp(spices));

/*function toggleSpice(name) {
  var spiceIndex = spices.indexOf(name);
  //add name to spices if it is not there
 if (spiceIndex == -1){
   spices.push(name);
   console.log("Added to spices " + name);
 }
 else {
   spices.splice(spiceIndex, 1); // index of spice and how many to remove;
   //spices.pop(name);
   console.log("Removed from spices " + name);
 }
  //remove name from spices if it is already there
}

toggleSpice("vanilla");
toggleSpice("ancho");
console.log("Spices are " + spices);

*/

//var numbers = [1, 2, 3, 4, 5];

//console.log(numbers.indexOf(3)); //returns 2
//console.log(numbers.indexOf(10)); //returns -1


/*function isBigEnough(element){
  console.log("checking " + element);
  return element >= 4;
}

var index =  numbers.indexOf(isBigEnough);
console.log(index + " is the answer"); */

/*for (var i=0; i< numbers.length; i++){
  var n = numbers[i];
  console.log(n * n);
}

function squareMe(n){
  console.log(n * n);
}

numbers.forEach(squareMe);
*/
/*******************************************/
var cart = [
  { name: "Blue chukka boots", price: 17.99, id: "item001" },
  { name: "comfortable slippers", price: 50, id: "item002" }
]



// alert("Let's get to work! ")
// TODO: Build an array of strings that could be answers to magic 8 ball type questions.
var answers = [
  "Yes",
  "No",
  // "It Depends...",
  // "Signs point to no.",
  // "No way José",
  // "Ummmmm. Nerp.",
  // "Call your mom.",
  // "Of course!",
  // "Obvs.",
  // "Cheyah boi!",
  // "Certainly!",
  // "I guess..."
]

function handleClick () {
  // alert("AHHH! You clicked me!");
  console.log(event.target);
}

function answerQuestion () {
  event.preventDefault();

  var question = document.magic8.question.value;
  var rando = Math.floor(Math.random() * answers.length);
  var answer = answers[rando];

  var container = document.getElementById("fortune-container");
  container.innerHTML = "<p>" + answer + "</p>";
  
  console.log(["Oh, you asked...", question, "? ", "Well I think...", answer].join(" "))
}

function addAnswer () {
  event.preventDefault();

  var answerToAdd = document.addForm.answerToAdd.value;
  answers.push(answerToAdd);
  console.log("Added " + answerToAdd + " to answers.");
}
