let exit = true;
let correctAnswer = 1;
while(exit){
    let firstRandomNumber = parseInt(Math.random() * (100 - 1) + 1);
    let secondRandomNumber = parseInt(Math.random() * (100 - 1) + 1);
    let equalRandomNumber = firstRandomNumber + secondRandomNumber;
    if(equalRandomNumber == parseInt(prompt("answer the next operation\n"+firstRandomNumber+" + "+secondRandomNumber+"?"))){
        alert("That's right!\nCongratulations you did it in the attempt number "+correctAnswer+"\n"+firstRandomNumber+" + "+secondRandomNumber+" = "+equalRandomNumber);
        exit = false;
    }else{
        alert("Attempt number: "+correctAnswer+"\nNot correct try again :(");
        correctAnswer++;
    }
}