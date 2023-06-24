let homeScore = document.getElementById('home-score')

function homeOne() {
    let score = parseInt(homeScore.textContent);
    score += 1;
    homeScore.textContent = score;
}

function homeThree() {
    let score = parseInt(homeScore.textContent); 
    score += 3;
    homeScore.textContent = score;
}

// Away team
let awayScore = document.getElementById('away-score')

function awayOne() {
    let score = parseInt(awayScore.textContent);
    score += 1;
    awayScore.textContent = score;
}

function awayThree() {
    let score = parseInt(awayScore.textContent);
    score += 3; 
    awayScore.textContent = score; 
}

function reset() {
    awayScore.textContent = 0;
    homeScore.textContent = 0;
}
