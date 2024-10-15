const { JSDOM } = require("jsdom");

// Create a virtual DOM with apple-shelf and orange-shelf elements
const dom = new JSDOM(`<!DOCTYPE html><div id="apple-shelf"></div><div id="orange-shelf"></div>`);
const document = dom.window.document;

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"];
let appleShelf = document.getElementById("apple-shelf");
let orangeShelf = document.getElementById("orange-shelf");

// Function to organize fruit
function organizeFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎";
        } else {
            orangeShelf.textContent += "🍊";
        }
    }
}

organizeFruit();

// Display the result
console.log("Apple Shelf:", appleShelf.textContent); // Output: 🍎🍎🍎
console.log("Orange Shelf:", orangeShelf.textContent); // Output: 🍊🍊
