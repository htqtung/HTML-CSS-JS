// 08.08 JavasScript code
function estimateWinRate(bet, round) {
    var winCounter = 0,
        winMoney = 0;
    var pips;
    // Make a loop which is executed as many times as was set through the input field. 
    for(var i = 1; i <= round; i++) {
    // Let win counter cumulating during every round of the loop. 
        
    
        // Randomize pips between 1-6 calling Math.round( (Math.random( ) * 5) + 1 );
        switch(pips = Math.round( (Math.random( ) * 5) + 1 )) {

        // If the randomized pips is 1, 3 or 5, then no pay
            case 1, 3, 5:
                winMoney = 0;
                break;
            // Otherwise if the pips 2 and 4 return the set coins back 125% (=multiplied by 1.25)
            case 2, 4:
                winMoney = bet * 1.25;
                break;
            // Otherwise the pips 6 returns the inserted bet 150%	
            case 6:
                winMoney = bet * 1.5;
                break;
        }
        winCounter += winMoney;
    }
    return winCounter;
}
function calculateProfit() {
    // Read value of rounds from the input field
    var txtRounds = document.getElementById("txtRounds").value,
        rounds = Number(txtRounds),
        winMoney,
        betAmount = 1,
        betSum = betAmount * rounds,
        profit,
        pOutput;
    //calculate the winCounter
    winMoney = estimateWinRate(betAmount, rounds);
    
    //Calculate the profit (euros) by subtracting the win counter (euros) from the bets (euros)
    profit = betSum - winMoney;
    
    // Write the answer to the web page
    pOutput = "Bets were altogether " + betSum + "&#8364;</br>Wins were " + winMoney + "&#8364;</br>Profit was " + profit + "&#8364;";
    document.getElementById("pOutput").innerHTML = pOutput;

}
