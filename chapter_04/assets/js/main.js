// Comparison Operator
let pass = 50, score = 90;
let hasPassed = score >= pass;
let elCase01 = document.getElementById('case_01');
elCase01.textContent = `Level Passed: ${hasPassed}`

// New Comparison Operator
let highScore1 = 75, highScore2 = 95;
let comparison = (pass + score) > (highScore1 + highScore2);
let elCase02 = document.getElementById('case_02');
elCase02.textContent = `New high Score: ${comparison}`

// For Loop
let scores = [24, 32, 17];
let msg = '';
for (let [key, score] of scores.entries()) {
    msg += `Round ${key + 1}: ${score} <br >`;
}

document.getElementById('case_03').innerHTML = msg;

// For Tabuada
let number = prompt('Digite o numero da tabuada que deseja?');
let i = 1;
let result = '';

while (i <= 10) {
    result += `${number} x ${i} = ${number * i} <br>`;
    i++;
}

let elCase04 = document.getElementById('case_04');
elCase04.innerHTML = result;