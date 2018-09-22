//Before commiting, delete all "commented out CODE"

//2. Prompt the user once for an even number and save their answer to the variable user_input. Be sure to convert it to an integer.

//this is just trusting the user's input to be an even number. If we're prompting only once, there is no choice but to.
var user_input;
user_input = prompt("Input an even number. An even number is 2k, where k is any positive integer or 0.");
user_input = parseInt(user_input, 10);

//or, jut to let the user know, can throw alert and Not parseInt the input if the user puts in a non-even number.

//ok, I'm commiting and pushing this, since to answer following questions, I need to take a different approach (I need to delete, or at least modify a lot, this part) 
var user_Input;
user_Input = prompt("Input an even number. An even number is 2k, where k is any positive integer or 0.");
if ( parseInt(user_Input, 10)%2 == 0 ) {
    user_Input = parseInt(user_Input, 10);
    alert("Awesome, " + user_Input + " is an even number!");
} else {
    alert("Eh, " + user_Input + " is not an even number.");    
};





//3. Using a do...while loop, keep asking the user for an even number until they enter an even number. At this point, there should be only one prompt() call in your code.

//4. Prompt the user once for an odd number and save their answer to the variable user_input. Be sure to convert it to an integer.

//5. Using a while loop, keep asking the user for an odd number until they enter an odd number. At this point, there should be only two prompt() call in your code; one for the even, and one for the odd.

//6. Using a for loop, prompt the user 10 times to enter a fruit. Push each answer to a fruit array.

//7. Prompt the user to enter a fruit to find in the array. Using a for loop and break, find the index of the fruit they are searching for. If it's in the array, output to the console the index of where that fruit is. Otherwise output to the console that it is not in the array.

//8. Be sure to test your code before turning it in.

console.log("메롱", user_input);