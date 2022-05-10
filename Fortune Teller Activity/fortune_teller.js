// TODO: Create a variable called "fortune" and assign a number between 0 - 10.
// YOUR CODE GOES HERE


// TODO: Create a fortune teller game using conditional statements and comparison operators.
// Conditions
// 1. If fortune is greater than or equal to 0 and less than or equal to 3, then you have a low fortune.
// 2. If fortune is greater than 3 and less than or equal to 7, then you have an average fortune.
// 3. If fortune is greater than 7 and less than or equal to 10, then you have a good fortune.
// 4. If the fortune is out of range, then the fortune can't be read correctly.

// YOUR CODE GOES HERE
var luck = 11
if (luck <= 10 && luck >= 0) {
    if (luck <= 3) {
        console.log("Unlucky")
    } else if (luck >= 7) {
        console.log("Very Lucky")
    } else {
        console.log("Not really lucky but not unlucky either")
    }
} else {
    console.log("YOU LIAR!")
}