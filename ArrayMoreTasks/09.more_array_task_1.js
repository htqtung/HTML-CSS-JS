// 09.more_array_task_1.js JavasScript code
 
var aphorism = ["What comes around goes around.", "Actions speak louder than words.", "Early to bed, early to rise, makes a man healthy, wealthy and wise.", "Lightning never strikes twice in the same place.", "Winners never quit and quitters never win."];

var randomIndex = Math.floor(Math.random()* (aphorism.length));

document.getElementById("aphorism").innerHTML = aphorism[randomIndex];

// End