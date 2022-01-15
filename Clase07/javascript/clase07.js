function gameNumbers(){
    document.getElementById('firstNumber').placeholder = parseInt(Math.random() * (100 - 1) + 1);   
    document.getElementById('secondNumber').placeholder = parseInt(Math.random() * (100 - 1) + 1);
    document.getElementById('thirdNumber').placeholder = 0;
    document.getElementById('thirdNumber').value = '';
    return parseInt(document.getElementById('firstNumber').placeholder) + parseInt(document.getElementById('secondNumber').placeholder);
}

let equalRandomNumber = gameNumbers();

        document.getElementById('btnResult').addEventListener('click',() =>{
            if(equalRandomNumber == parseInt(document.getElementById('thirdNumber').value)){
                alert("Correcto :D");
                equalRandomNumber = gameNumbers();
            }else{
                alert("incorrecto :(");
                equalRandomNumber = gameNumbers();
            }
        });        






