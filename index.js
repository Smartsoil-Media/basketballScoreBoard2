


let scoreEl = document.getElementById("home-score")
let guestScoreEl = document.getElementById("guest-score")
let resetEl = document.getElementById("rest-btn")

let homeScore = 0
let guestScore = 0

function add1() {
    scoreEl.textContent = homeScore += 1  
}

function add2() {
    scoreEl.textContent = homeScore += 2
}

function add3() {
    scoreEl.textContent = homeScore +=3
}

function addOne() {
    guestScoreEl.textContent = guestScore += 1  
}

function addTwo() {
    guestScoreEl.textContent = guestScore += 2
}

function addThree() {
    guestScoreEl.textContent = guestScore +=3
}


function reset(){
    scoreEl.innerHTML = 0
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = 0 
}
