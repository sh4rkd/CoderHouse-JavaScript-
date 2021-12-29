let user = "pepe";
let password = "pepe";

function buyGames(name){
    let gamePrices = 0;
    let exit = true;
    alert("Hi! "+name+" Welcome to the Game Store.")

    while(exit){
        let categoriesSelected = parseInt(prompt("Select your option:\n1 - Horror Games \n2 - Adventure Games\n3 - Exit"));
        let gameSelected;
        if(categoriesSelected==1){
            gameSelected = parseInt(prompt("Welcome to Horror Section, what game do you want?\n1 - Project Zomboid\n2 - Phasmophobia\n3 - Dead By Daylight\n4 - The Forest"));
            if(gameSelected==1){
                gamePrices+= 9.99;
            }else if(gameSelected==2){
                gamePrices+= 14.99;
            }else if(gameSelected==3){
                gamePrices+= 19.99;
            }else if(gameSelected==4){
                gamePrices+= 4.99;
            }else{
                alert("Error please type a number 1 to 4");
            }
        }else if(categoriesSelected == 2){
            gameSelected = parseInt(prompt("Welcome to Adventure Section, what game do you want?\n1 - Red Dead Redemption 2\n2 - Sea of Thieves\n3 - Forza Horizon 5\n4 - Grand Theft Auto V"));
            if(gameSelected==1){
                gamePrices+= 19.99;
            }else if(gameSelected==2){
                gamePrices+= 29.99;
            }else if(gameSelected==3){
                gamePrices+= 9.99;
            }else if(gameSelected==4){
                gamePrices+= 49.99;
            }else{
                alert("Error please type a number 1 to 4");
            }
        }else if(categoriesSelected == 3){
            return gamePrices;
            exit = false;
        }else{
            alert("Error please select 1 to 3");
        }
    }    
}

function addIva(price){
    return parseFloat(price+(price*.16)).toFixed(2);
}

function addDiscount(price,discount){
    return price-(price*parseFloat(discount));
}

function userExist(username,userpassword){
    if(user == username && password == userpassword){
        return false;
    }else{
        alert("This user don't exist please continue to register:");
        registerUser();
    }    
}

function registerUser(){
let correctName = true;
    while(correctName){
        let userName = prompt("Please type your username:");
        if(parseInt(prompt("Your user name is: "+userName+"?\n1 - Yes\n2 - No"))==1){
            user = userName;
            password = prompt("Please type your password:");
            correctName = userExist(user,password);
        } 
    }
}

function correctDiscount(discount){
    if(discount == "coder"){
        return .50;
    }else{
        return 0;
    }
}

window.onload = userExist(prompt("Username?"),prompt("Password?"));
window.onload = alert("The total is: "+addIva(addDiscount(buyGames(user),correctDiscount(prompt("Type a discount code!")))));