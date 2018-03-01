// 06.09 JavasScript code

function tellInfractionFine() {
    // Assign input values to variables
    var txtDrivingSpeed = document.getElementById("txtDrivingSpeed").value,
        txtSpeedLimit = document.getElementById("txtSpeedLimit").value,
        drivingSpeed = Number(txtDrivingSpeed),
        speedLimit = Number(txtSpeedLimit),
        excessSpeed = drivingSpeed - speedLimit,
        divAnswer,
        infractionFine;
    
    if (isNaN(txtDrivingSpeed) || isNaN(txtSpeedLimit)) {
        divAnswer = "Please enter values as number";
    }
    else if (excessSpeed <= 0) {
        divAnswer = "No speeding, no fine.";
    }
    else if (excessSpeed > 20) {
        divAnswer = "Income-based unit fine.";
    }
    else if (speedLimit <= 60 && speedLimit >= 10) {
        if (excessSpeed <= 15) {
            divAnswer = "Infraction fine is 85&#8364;";
        } else {
            divAnswer = "Infraction fine is 115&#8364;";
        }
    }
    else if (speedLimit <= 120 && speedLimit >= 70) {
        if (excessSpeed <= 15) {
            divAnswer = "Infraction fine is 70&#8364;";
        } else {
            divAnswer = "Infraction fine is 100&#8364;";
        }
    }
    else
        divAnswer = "Invalid speed limit";
    document.getElementById("divAnswer").innerHTML = divAnswer;
    // Clear input box
    document.getElementById("txtDrivingSpeed").value = "";
    document.getElementById("txtSpeedLimit").value = "";
}