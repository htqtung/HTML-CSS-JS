// 06.08 JavasScript code
/*
var budget = 0.00, earning = 0.00;


function updateEarning(winBet) {
    'use strict';
    var pay = Number(winBet);
    earning += pay;
    document.getElementById("txtEarning").innerHTML = "Your overall earning: " + earning + "&#8364;";
}

function updateBudget(pocketMoney) {
    'use strict';
    var money = Number(pocketMoney);
    budget += money;
    document.getElementById("txtBudget").innerHTML = "You have total " + budget + "&#8364;";
}
*/
function play() {
    'use strict';
    // Read value from the input field
    var txtBet = document.getElementById("txtBet").value,
        bet = Number(txtBet),
        pay,
        earn,
        divAnswer,
    // Randomize dice pips between 1-6
        pips = Math.round((Math.random() * 5) + 1);
    // Calculate win base on pips
    if (pips === 1 || pips === 3 || pips === 5) {
        //pay = -bet;
        earn = -bet;
        divAnswer = "Pips was " + pips + " - you lost " + bet + "&#8364;";
    } else if (pips === 2 || pips === 4) {
        //pay = (bet * 1.25).toFixed(2);
        earn = (bet * 0.25).toFixed(2);
        divAnswer = "Pips was " + pips + " - you won " + earn + "&#8364; from " + bet + "&#8364; bet";
    } else {
        //pay = (bet * 1.5).toFixed(2);
        earn = (bet * 0.5).toFixed(2);
        divAnswer = "Pips was " + pips + " - you won " + earn + "&#8364; from " + bet + "&#8364; bet";
    }
    // Write the answer on the page, to the answer div, as content of the div
    document.getElementById("divAnswer").innerHTML = divAnswer;
    // Clear the content of input box
    document.getElementById("txtBet").value = "";
    // Update budget
    //updateEarning(earn);
    //updateBudget(pay);
}
