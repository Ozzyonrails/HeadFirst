let chevy = {
    make: 'Chevy',
    model: 'Bel Air',
    year: 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage: 1021
};

let fiat = {
    make: 'Fiat',
    model: '500',
    year: '1957',
    color: 'Medium Blue',
    passengers: '2',
    convertible: false,
    mileage: 88000
};

let miles = fiat.mileage;
if (miles < 2000) {
    buyIt();
}

fiat.mileage = 10000;
fiat.needsWashing = true;

if (fiat.year < 1965) {
    classic = true;
}
for (let i = 0; i < fiat.passengers; i++) {
    addPersonToCar();
}