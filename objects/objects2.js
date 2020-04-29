function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
}

var taxi = {
    make: 'Webville Motors',
    model: 'Taxi',
    year: 1995,
    color: 'yellow',
    passengers: 4,
    convertible: false,
    mileage: 281341
};