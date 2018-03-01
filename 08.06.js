// 08.06 JavasScript code

function showComparisonScores() {
    var txtVotes = document.getElementById("txtVotes").value,
        txtCandidates = document.getElementById("txtCandidates").value,
        votes = Number(txtVotes),
        candidates = Number(txtCandidates),
        pOutput = "";
    
    // For each candidate
    for(var i = 1; i <= candidates; i++) {
        // Calculate comparison score for the candidate
        pOutput += i + ". candidate: " + (votes * (1/i)).toFixed(0) + "</br>";
    }
    // Show scores
    document.getElementById("pOutput").innerHTML = pOutput;
}
