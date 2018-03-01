// 09.array_warm_up_2.js JavasScript code
// Initially, this program shows the given digit (0-9) as a Finnish word.
// Modify the program so that it asks the user to enter a month number (1-12).
// When the user clicks the button the program should show the month name in English. 

function getValue(elementId) {
    var valueAsText = document.getElementById(elementId).value;
    return Number(valueAsText);
}

function showFinnishWord() {
    var wordArray = ["nolla", "yksi", "kaksi", "kolme", "neljä", "viisi", 
                     "kuusi", "seitsemän", "kahdeksan", "yhdeksän"];
    
    var digitText = document.getElementById("txtDigit").value;
    var digit = Number(digitText);
    
    if (digit >= 0 && digit <= 9) {
        outputText = wordArray[digit];
    } else {
        outputText = "Please enter a valid digit (0-9)!"
    }
        
    document.getElementById("pOutput").innerHTML = outputText;
}

function showFinnishMonth() {
    var month = getValue("txtMonth");
    var monthArray = ["tammikuu", "helmikuu", "maaliskuu", "huhtikuu", "toukokuu", "kesäkuu", "heinäkuu", "elokuu", "syyskuu", "lokakuu", "marraskuu", "joulukuu"];
    var pOutput = "";
    if(month >= 1 && month <= 12) {
        pOutput = monthArray[month-1];
    } else {
        pOutput = "Please enter a valid month!";
    }
    document.getElementById("pOutput").innerHTML = pOutput;
}

// End