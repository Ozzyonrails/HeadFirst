let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;

let guess;
let hits = 0;
let guesses = 0;

let isSunk = false;

let exit;

while (isSunk == false) {
    guess = prompt("Введите число от 0 до 6");

    if (guess > 6 || guess < 0) {
        alert("Введите число от 0 до 6");
    } else if (guess == null) {
        exit = confirm("Вы точно хотите прекратить игру?");

        if (exit) {

            alert("Нам очень жаль, что вы не хотите играть..");
            break;
        }
    } else {
        guesses++;
        if (guess == location1 || guess == location2 || guess == location3) {
            hits++;
            if (hits == 1) {
                alert("Вам просто повезло");
            } else if (hits == 2) {
                alert("Я начианаю сомневаться, что это просто везение!");
            } else if (hits == 3) {
                isSunk = true;
                alert("Корабль потоплен! Поздравляем!");
            }
        } else {
            alert("Ха-ха, ты промахнулся!");
        }
    }

}

let stats = "Ты потопил мой корабль за " + guesses + " попыток! Значт ваша точность стрельбы была равна " + (3 / guesses);
alert(stats);