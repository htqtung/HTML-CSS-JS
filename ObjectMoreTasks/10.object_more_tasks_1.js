// 10.object_more_tasks_1.js JavasScript code
// Initially, this program shows the name and population of a country.<br />
// Modify the program so that it shows also the name of the country in Finnish.<br />
// NB! Add a new property to the object constructor for this purpose.<br /><br />

function Country(countryName,countryFinnishName, countryPopulation) {
    this.name = countryName;
    this.finnishname = countryFinnishName;
    this.population = countryPopulation;   
}

var myCountry = new Country("Finland", "Suomi", 5501043);

var outputText = myCountry.name + ", " + myCountry.finnishname + ", population is " + myCountry.population;

document.getElementById("pOutput").innerHTML = outputText;

// End
