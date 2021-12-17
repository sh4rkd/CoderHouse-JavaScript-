let userName = prompt("What's your name?");
let userAge = prompt("How old are you?");
let userAnswer = prompt("Have you already had your birthday in 2021?\ntype 'y' for yes and 'n' for no");
let userBirthYear = (2021-(parseInt(userAge)));

if(userAnswer === "y" && userName !== ""){
    console.log("Hey "+userName+" you were born in "+userBirthYear);
}else if(userAnswer === "n" && userName !== ""){    
    console.log("Hey "+userName+" you were born in "+parseInt(userBirthYear-1));
}else if(!userName != ""){
    console.log("Please type a name")
}else{    
    console.log("Error type 'y' or 'n'");
}
