let model = {
    boardSize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,

    ships:  [{
        locations: [0, 0, 0],
        hits: ['', '', '']
    },{
        locations: [0, 0, 0],
        hits: ['', '', '']
    },{
        locations: [0, 0, 0],
        hits: ['', '', '']
    }],

    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i]; // ship[location]!!! Запомни уже, дурень!
            //       СЦЕПЛЕНИЕ    V       V
            let index = ship.locations.indexOf(guess); // Вместо цикла for??

            if (index >= 0) {
                ship.hits[index] = 'hit'; // Выдаст индекс (0-1-2-т. д.) и присвоит hit!
                view.displayHit(guess);
                view.displayMessage('ПОПАЛ!');

                if (this.ifSunk(ship)) {
                    view.displayMessage('Ты потопил мой корабль!');
                    this.shipsSunk++;
                }
                return true;
            } else if (ship.hits[index] === "hit") {
                view.displayMessage("Oops, you already hit that location!");
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage('Ха! Ты промахнулся!');
        return false;
    },

    ifSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== 'hit') {
                return false;
            }
        }
        return true;
    },

    generateShipLocation: function () {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("Ships array: " + this.ships);
    },

    generateShip: function () {
        let direction = Math.floor(Math.random() * 2);
        let row, col;

        if (direction === 1) {
            row = Math.floor(Math.random() * this.boardSize);
            col = Math.floor(Math.random() * (this.boardSize - this.shipLength));
        } else {
            row = Math.floor(Math.random() * (this.boardSize - this.shipLength));
            col = Math.floor(Math.random() * this.boardSize);
        }

        let newShipLocations = [];

        for (let i = 0; i < this.shipLength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + '' + (col + i));
            } else {
                newShipLocations.push((row + i) + '' + col);
            }
        }
        return newShipLocations;
    },
    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = model.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

let view = {
    displayMessage: function (msg) {
        let messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class','miss');
    }
};
// location - это введённые пользавателем данные (НОМЕРА ЯЧЕЙКИ)

let controller = {
    guesses: 0,

    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);

            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage('Ты потопил все мои корабли! С ' + this.guesses + ' попыток. Поздравляю!');
            }
        }
    }
};

function parseGuess(guess) {

    let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    if (guess === null || guess.length !== 2) {
        alert ('Ой, пожалуйста введите букву и цифру ячейки корабля.');
    } else {
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);

        if (isNaN(row) || isNaN(column)) {
            alert('Ой, это не корабль.');
        } else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) {
            alert('Упс, это не корабль!')
        } else {
            return row + column;
        }
    }
    return null;
}

function handleFireButton() {
    let guessInput = document.getElementById('guessInput');
    let guess = guessInput.value.toUpperCase();

    controller.processGuess(guess);

    guessInput.value = '';
}

function handleKeyPress(e) {
    let fireButton = document.getElementById('fireButton');


    if(e.key === "Enter") {
        fireButton.click();
        return false;
    }
} // ПОЧЕМУ ЭТОТ БЛ***ИЙ ENTER НЕ РАБОТАЕТ?!

window.onload = init;

function init() {
    let fireButton = document.getElementById('fireButton');
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById('guessInput');
    guessInput.onkeypress = handleKeyPress;

    model.generateShipLocation();
}