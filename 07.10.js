// 07.10 JavasScript code

// Complete the code of the function calculate.
function calculate() {
		
    // Calculate length of the work as minutes.
	var txtStartTime = document.getElementById("txtStartTime").value,
        txtEndTime = document.getElementById("txtEndTime").value,
        txtDate = document.getElementById("txtDate").value,
        txtDescription = document.getElementById("txtDescription").value,
        startHour = Number(txtStartTime.substr(0,2)),
        startMin = Number(txtStartTime.substr(3,2)),
        endHour = Number(txtEndTime.substr(0,2)),
        endMin = Number(txtEndTime.substr(3,2)),
        lengthOfWork,
        repairPrice;
    var txtBilling;
    lengthOfWork = (endHour - startHour - 1) * 60 + endMin + (60 - startMin);
    // If it is not Sunday, then
    //     Call isSunday() function from 07.10_functions.js file
    //     Calculate and show price of the repair work during the workdays,
    // otherwise			
    //     Calculate and show price of the repair work on Sundays
    if(isSunday(txtDate)) {
        repairPrice = (lengthOfWork * (72/60)).toFixed(2);
        txtBilling = "The hourly price is 72.00 euros during the Sundays";
    }
    else {
        repairPrice = (lengthOfWork * (48/60)).toFixed(2);
        txtBilling = "The hourly price is 48.00 euros during the workdays"
    }
	document.getElementById("divOutput").innerHTML = "Length of the work was " + lengthOfWork + " minutes.</br>" + txtBilling + "</br>The price of this repair work is " + repairPrice + " euros.";		
}

// Complete the code of the function modifyTitle.
function modifyTitle() {
		
    // Read value of title from the input field
    var txtTitle = document.getElementById("txtTitle").value;


    // Call allCapsTitleTrimmed() function from 07.10_functions.js file
    var modifiedTitle = allCapsTitleTrimmed(txtTitle);
    document.getElementById("txtTitle").value = modifiedTitle;
		
}