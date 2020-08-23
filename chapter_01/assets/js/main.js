let today = new Date();
let hourNow = today.getHours();
let greetings;

if (hourNow > 18) {
    greetings = 'Bom Noite';
} else if (hourNow > 12) {
    greetings = 'Bom Tarde';
} else if (hourNow > 0) {
    greetings = 'Bom Dia';
} else {
    greetings = 'Bem vindo';
}

let showGreetings = document.querySelector('.greetings');
showGreetings.innerHTML = `<h1>${greetings}</h1>`