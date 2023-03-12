const form = document.querySelector("#guessNumber-form");


let guessButton = document.getElementById("myBtn");
myBtn.addEventListener('click', (event)=>{
event.preventDefault();
//const number = document.getElementById("number").value;
const user_input = form.elements.number.value;

const random_number =  generateRandom();
console.log(random_number);
//const random_number =  generateRandom();
console.log(random_number);
const result =  user_input;
console.log("Your entered : " + result);
console.log("computer random is: " + random_number);
 if (result == random_number) {
    document.getElementById("message").innerHTML = "Your Won";
    document.getElementById("result").innerHTML = "Your entered:" + user_input + " Computer random is: " + random_number;
    form.elements.number.value = "";


 } else {
    document.getElementById("message").innerHTML = "Your lost, Please try again.";
    document.getElementById("result").innerHTML = "Your entered: " + user_input + " Computer random is: " + random_number;
    form.elements.number.value = "";
 }
//console.log(value);
});
function generateRandom(min = 0, max = 100) {

    // find diff
    let difference = max - min;

    // generate random number 
    let rand = Math.random();

    // multiply with difference 
    rand = Math.floor( rand * difference);

    // add with min value 
    rand = rand + min;

    return rand;
}

//console.log(generateRandom());


