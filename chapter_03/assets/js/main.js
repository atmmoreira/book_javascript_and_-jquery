// Example of how declare a function

let msg = 'Sign up to receive our newsletter for 10% off!';

const updateMsg = () => {
    let elMsg = document.getElementById('msg');
    elMsg.textContent = msg;
}

updateMsg();

// Example of how can declare an object
const hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    gym: true,
    roomTypes: ['twin', 'double', 'suite'],
    checkAvailability: () => {
        return hotel.rooms - hotel.booked;
    }
}

let roomsLeft = document.getElementById('rooms');
roomsLeft.textContent = `O Hotel ${hotel.name} tem ${hotel.checkAvailability()} quartos vagos.`;

// Example of how can declare an object with constructors
function HotelWithConstructor(name, rooms, booked) {
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = () => {
        return rooms - booked;
    }
}

const quayHotel = new HotelWithConstructor('Quay with Constructor', 20, 5);

let roomsLeft2 = document.getElementById('rooms2');
let details = `${quayHotel.name} tem ${quayHotel.checkAvailability()} quartos`
roomsLeft2.textContent = `${details}`;

// Object Model Browser
let msg2 = `
    <h2>Browser Window</h2>
    <p>Width: ${window.innerWidth}</p>
    <p>Height: ${window.innerHeight}</p>
    <p>History: ${window.history.length}</p>
    <h2>Screen</h2>
    <p>Width: ${window.screen.width}</p>
    <p>Height: ${window.screen.height}</p>
    <h2>Current Page</h2>
    <p>${window.location}</p>
`
let elMsg2 = document.getElementById('elMsg2');
elMsg2.innerHTML = msg2;

// Example of Functions and Methods and Objects
(() => {
    const Hotel = {
        name: 'Anderson Hotel',
        priceRoom: 234,
        discount: 15,
        offerPrice: () => Hotel.priceRoom * ((100 - Hotel.discount) / 100)
    }

    const offerExpires = () => {
        let weekFromToday, day, date, month, year, dayNames, monthNames, today = new Date();

        weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        dayNames = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
        monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

        day = dayNames[weekFromToday.getDay()];
        date = weekFromToday.getDate();
        month = monthNames[weekFromToday.getMonth()];
        year = weekFromToday.getFullYear();

        return ` Oferta expira: ${day}, dia ${date} de ${month} de ${year}. `
    }

    let elHotel = document.querySelector('#hotel');
    elHotel.innerHTML = `
        <p>
            Nome: ${Hotel.name} <br />
            Preço: R$${Hotel.priceRoom} <br />
            Preço c/ Disconto: R$${Hotel.offerPrice()} <br />
            ${offerExpires()}
        </p>
    `


})()