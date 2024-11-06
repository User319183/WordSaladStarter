let userName = prompt("What is your name?");
let userAge = prompt("How old are you?");
let myStory = `Hello, ${userName}, How are you doing today? How does it feel to be ${userAge} years old?`;

// Validation
if (userName === null || userName === "") {
	userName = "User";
}

if (userAge === null || userAge === "" || isNaN(userAge)) {
	userAge = 0;
}

// Output
console.log(userName);
console.log(userAge);
console.log(myStory);

// Display the story
document.getElementById("story").innerHTML = myStory;