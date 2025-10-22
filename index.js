let homeScoreEl = document.getElementById("home-score")
let homeScore = 0


let homeScoreBtnOne = document.getElementById("home-score-btn-1")

function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}  


let homeScoreBtnTwo = document.getElementById("home-score-btn-2")

function increaseHomeScoreTwo() {
    homeScore += 2 
    homeScoreEl.textContent = homeScore 
}


let homeScoreBtnThree = document.getElementById("home-score-btn-3")

function increaseHomeScoreThree() {
    homeScore += 3 
    homeScoreEl.textContent = homeScore 
}



let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0


let guestScoreBtnOne = document.getElementById("guest-score-btn-1")

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}


let guestScoreBtnTwo = document.getElementById("guest-score-btn-2")

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}


let guestScoreBtnThree = document.getElementById("guest-score-btn-3")

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

