// 06.07 JavasScript code

function showStudyGrant() {
    // assign input value to variables
    var txtAge = document.getElementById("txtAge").value,
        withParents = document.getElementById("txtWithParents").value,
        age = Number(txtAge),
        studyGrant,
        divAnswer;
    // error checking
    if (isNaN(age)) {
        divAnswer = "Please enter your age as an integer!";
    }
    else if(withParents !== "n" && withParents !== "y") {
        divAnswer = "Please enter your living status as y (with parents) or n (independent).";
    }
    // calculate study grant
    else if (age >= 20) {
        if(withParents == "n") {
            studyGrant = (335.20).toFixed(2);
            divAnswer = "The study grant is " + studyGrant + "&#8364;";
        } else {
            studyGrant = 136.70.toFixed(2);
            divAnswer = "The study grant is " + studyGrant + "&#8364;";
        }
    }
    else
        divAnswer = "Ask Kela";
    // set answer to the div Answer
    document.getElementById("divAnswer").innerHTML = divAnswer;
    // clear input boxes
    document.getElementById("txtAge").value = "";
    document.getElementById("txtWithParents").value = "";
}
