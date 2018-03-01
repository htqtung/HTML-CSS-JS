// 09.more_array_task_2

var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O+", "AB+"];

function printPercentage() {
    var count = 0,
        txtBloodType = document.getElementById("txtBloodType").value,
        percentage = 0;
    
    //count the number of appearance of the bloodtype in the array
    for (var i = 0; i < bloodTypes.length; i++) {
        if (txtBloodType === bloodTypes[i]) {
            count++;
        }
    }
    
    //calculate the percentage
    percentage = (count / bloodTypes.length) * 100;
    
    //give answer to the pOutput
    document.getElementById("pOutput").innerHTML = txtBloodType + " " + percentage + " %";
    document.getElementById("txtBloodType").value = "";
}


// End