// 09.more_array_task_3.js JavasScript code

var memberName = [], memberAge = [];

function insertData() {
    var txtName = document.getElementById("txtName").value,
        txtAge = document.getElementById("txtAge").value,
        age = Number(txtAge);
    txtName = txtName.trim();
    txtAge = txtAge.trim();
    if (txtName === "" || isNaN(txtAge) || age < 0 || age > 120) {
        alert("Please enter a valid data!");
        document.getElementById("txtAge").value = "";
        document.getElementById("txtName").value = "";
        return;
    }
    
    memberName.push(txtName);
    memberAge.push(age);
    
    document.getElementById("divCounter").innerHTML = memberName.length + " members";
    document.getElementById("txtAge").value = "";
    document.getElementById("txtName").value = "";
}

function showMinor() {
    var outputText = "";
    for (var i = 0; i < memberAge.length; i++) {
        if (memberAge[i] < 18) {
            outputText += memberName[i] + ", " + memberAge[i] + " years<br/>";
        }
    }
    
    document.getElementById("divOutput").innerHTML = outputText;
}

function showAdult() {
    var outputText = "";
    for (var i = 0; i < memberAge.length; i++) {
        if (memberAge[i] > 17) {
            outputText += memberName[i] + ", " + memberAge[i] + " years<br/>";
        }
    }
    
    document.getElementById("divOutput").innerHTML = outputText;
}

function showOldest() {
    var max = 0;
    for(var i = 0; i < memberAge.length; i++) {
        if(memberAge[i] > max) {
            max = memberAge[i];
        }
    }
    
    var outputText = "";
    for (var i = 0; i < memberAge.length; i++) {
        if(memberAge[i] === max) {
            outputText += memberName[i] + ", " + memberAge[i] + " years<br/>";
        }
    }
    document.getElementById("divOutput").innerHTML = outputText;
}

function showYoungest() {
    var min = 120;
    for(var i = 0; i < memberAge.length; i++) {
        if(memberAge[i] < min) {
            min = memberAge[i];
        }
    }
    
    var outputText = "";
    for (var i = 0; i < memberAge.length; i++) {
        if(memberAge[i] === min) {
            outputText += memberName[i] + ", " + memberAge[i] + " years<br/>";
        }
    }
    document.getElementById("divOutput").innerHTML = outputText;
}
// End