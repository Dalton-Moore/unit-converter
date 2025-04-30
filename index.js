/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


// variables for the input and output elements
let inputEl = document.getElementById("input-el");
let convertBtn = document.getElementById("convert-btn");
let lengthEl = document.getElementById("length-el");
let volumeEl = document.getElementById("volume-el");
let massEl = document.getElementById("mass-el");




// variables for the conversion factors
const meterToFeet = 3.281;
const literToGallon = 0.264;
const kilogramToPound = 2.204;
const feetToMeter = 1 / meterToFeet;
const gallonToLiter = 1 / literToGallon;
const poundToKilogram = 1 / kilogramToPound;

// event listener for the button click event
convertBtn.addEventListener("click", function() {
    let baseValue = parseFloat(inputEl.value); // convert the input value to a float number

    // if statement that takes the DOM and returns a string message if the input is not a number
    if (isNaN(baseValue)) {
        lengthEl.textContent = "Please enter a valid number.";
        volumeEl.textContent = "Please enter a valid number.";  
        massEl.textContent = "Please enter a valid number.";
        return;
    }

    // DOM elements to display them via template strings and ${} passing in the baseValue and multiplying it by the variables for calculcations and using .toFixed method converts numbers to string and rounded it up (3) 
    lengthEl.textContent = `
    ${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | 
    ${baseValue} feet = ${(baseValue * feetToMeter).toFixed(3)} meters`;

    volumeEl.textContent = `
    ${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | 
    ${baseValue} gallons = ${(baseValue * gallonToLiter).toFixed(3)} liters`;

    massEl.textContent = `
    ${baseValue} kilograms = ${(baseValue * kilogramToPound).toFixed(3)} pounds |
    ${baseValue} pounds = ${(baseValue * poundToKilogram).toFixed(3)} kilograms`;

    inputEl.value = ""; // clear the input field after conversion
});


// event lister for the input field to trigger the conversion when the Enter key is pressed
inputEl.addEventListener("keypress", function(event) {
    if (event.key === "Enter") { // check if the Enter key is pressed
        convertBtn.click(); // trigger the click event of the convert button
    }
});

// addevent listener for the inputel varito max numbers you can enter is 0-3
inputEl.addEventListener("input-el", function() {
    if (inputEl.value.length > 3) { // check if the input length is greater than 3
        inputEl.value = inputEl.value.slice(0, 3); // slice the input value to keep only the first 3 characters
    }
});
