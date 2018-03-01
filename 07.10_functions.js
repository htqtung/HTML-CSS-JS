// 07.10_functions JavasScript code

// Define here the following functions: allCapsTitleTrimmed(originalText) and isSunday(dateText). 

//a function allCapsTitleTrimmed(originalText) for the Work title input field so that the function changes the title given to it to be ALL CAPS and removes any empty white space from the beginning or the end of the title. That event handler should be called when the onfocusout event occurs. The method should modify the title input field directly.

function allCapsTitleTrimmed(originalText) {
    originalText = originalText.trim();
    var alternateTitle = originalText.toUpperCase();
    return alternateTitle;
} 


//a function isSunday(dateText). This function gets the date text in the format "dd.MM.yyyy". The function should return Boolean value true if the date is for a Sunday, otherwise false. For example for the date text "05.04.2015" it would return true.
    //First split the given date text into day, month and year parts using the substr(startPosition, length) method.
    //Create a new Date object to a variable asDate

    //Date asDate = new Date();

   // Set day, month and year properties of asDate object with setDate(), setMonth() and setFullYear() method. (Observe! You’ll need to give month as one number smaller than how we write it => 0 = January, 1= February...)
    //After creating a valid date object in the asDate variable, you can get the day of the week with its getDay() method. Sunday is 0 .

function isSunday(dateText) {
    var txtDay = dateText.substr(0,2),
        day = Number(txtDay),
        txtMonth = dateText.substr(3,2),
        month = Number(txtMonth),
        txtYear = dateText.substr(6,4),
        year = Number(txtYear),
        asDate = new Date();
    asDate.setDate(day);
    asDate.setMonth(month-1);
    asDate.setFullYear(year);
    var date = asDate.getDay();
    if (date === 0)
        return true;
    else
        return false;
}







