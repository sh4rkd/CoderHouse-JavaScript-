function buyGames(){
    let gamePrices = 0;
    let exit = true;

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
            alert("Total of your games: "+gamePrices.toFixed(2));
            exit = false;
        }else{
            alert("Error please select 1 to 3");
        }
    }    
}

document.onload = buyGames();
