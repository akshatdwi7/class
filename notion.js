// Create a person object that contains three keys: name, age, and county.
// Use yourself as an example to set the values for name, age, and country

// Create a function, logData(), that uses the person object to create a
// string in the following format: 
// "Per is 35 years old and lives in Norway"

// Call the logData() function to verify that it works
let person ={
    name: "Akshat" ,
    age : 20,
    country: "India" ,
    
}
 function  logData(){
        console.log(person.name + "  is" + " "+person.age +"   " + "years old and lives in" +"  " +person.country)
     
       }
       logData()
       
       let dayOfMonth = 31
let weekday = "Friday" 

// If it is Friday the 13th, log out this spooky face: 😱
// Use the logical "AND operator" -> &&
if(dayOfMonth ===31 && weekday ==="Friday"){
    console.log("spookkky face !")
}



// Create a function that returns a random item from the array


let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getHand() {
    let randomIndex = Math.floor( Math.random() * 3)
    return hands[randomIndex]
}

console.log( getHand() )

