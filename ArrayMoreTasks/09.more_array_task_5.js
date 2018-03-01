// 09.more_array_task_2

var bloodTypes = ["A+", "O-", "AB+", "O+", "AB+", "AB+", "O-", "AB+", "O+", "AB+"];

function listPercentage() {
    var sortedBloodTypes = bloodTypes.sort();
    var outputText = "",
        counter = 1,
        compareIndex = 0;
    
    for (var i = 1; i < sortedBloodTypes.length; i++) {
        if (sortedBloodTypes[i] === sortedBloodTypes[compareIndex]) {
            counter++;
        }
        else {
            outputText += (counter / sortedBloodTypes.length) * 100 + "%: " + sortedBloodTypes[compareIndex] + "<br/>";
            compareIndex = i;
            counter = 1;
        }
        if (i === sortedBloodTypes.length -1) {
            outputText += (counter / sortedBloodTypes.length) * 100 + "%: " + sortedBloodTypes[compareIndex] + "<br/>";
        }
    }
    
    document.getElementById("pOutput").innerHTML = outputText;
}

listPercentage();


// End