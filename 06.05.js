// 06.05 JavasScript code

function calculateBMI() {
    
    //assign input value to variables
    var txtWeight = document.getElementById("txtWeight").value,
        weight = Number(txtWeight),
        txtHeight = document.getElementById("txtHeight").value,
        height = Number(txtHeight),
        bodyMassIndex, divAnswer;
    
    //calculate BMI
    bodyMassIndex = (weight/(height/100.0 * height/100.0)).toFixed(2);
    //assign answers to corresponding categories
    if(bodyMassIndex <= 15.99)
        divAnswer = " You are severely underweight, better eat a whole lot more before you become a skeleton!";
    //if BMI <= 18.4 -> less than normal weight
    else if(bodyMassIndex <= 18.49)
        divAnswer = " You are thin, gain some weight!";
    //if 18.5 <= BMI <= 24.9 --> normal
    else if(bodyMassIndex <= 24.99)
        divAnswer =  " Great job staying fit. Keep up the good work!)";
    //if BMI >= 25 <= 29.99 -> overweight
    else if(bodyMassIndex <= 29.99)
        divAnswer = " You are overweight, don't be lazy, hit the gym!";
    // if BMI <= 34.99
    else if(bodyMassIndex <= 34.99)
        divAnswer = " Obese Class I. Reduce sugar intake, increase work out.";
    // if BMI <= 34.99   
    else if(bodyMassIndex <= 39.99)
        divAnswer = " Obese Class II. Hit the gym! HIT THE GYM!!!";
    // else
    else
        divAnswer = " Obese Class III. Nothing is impossible, burn all those fat now!!";
    document.getElementById("divAnswer").innerHTML = ("Body Mass Index (BMI) = " + bodyMassIndex + "." + divAnswer);
    // clear the input box
    document.getElementById("txtWeight").value = "";
    document.getElementById("txtHeight").value = "";
}
