//Just declaring a var, not yet assigning a particular value. i.e."let user_input be nothing".
var user_input;

do {
    user_input = prompt("Enter an even number. An even number is 2k, where k is any integer.");
    user_input = parseInt(user_input, 10);
} while ( user_input % 2 != 0 );
 

while (user_input % 2 == 0) {
    user_input = prompt("Enter an odd number. An odd number is 2k+1, where k is any integer.");
    user_input = parseInt(user_input, 10);
}


var fruits = [];
var fruit_input;

for (let i = 0 ; i < 10 ; i++){
    fruit_input = prompt("Enter a fruit name. You will be asked to do this " + (9-i) + " more times after this input.");
    fruits.push(fruit_input);    
};

var to_find = prompt("Search for a fruit name.");
// == small case, upper case must match !
for (var fruit_i = 0; fruit_i <fruits.length; fruit_i++){
    if (fruits[fruit_i] == to_find){
        break;
    }
};

if (fruit_i == fruits.length){
    console.log("'" + to_find + "' is not found in the fruits array.")
} else {
    console.log("'" + to_find + "' is found at index " + fruit_i + " in the fruits array.");
};