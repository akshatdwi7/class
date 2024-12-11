

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
