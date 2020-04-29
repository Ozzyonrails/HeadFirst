let flavors = ['vanilla', 'butterscotch', 'lavander', 'chocolate', 'cookie dough'];
var flavorOfTheDay = flavors[2];

flavors[3] = 'vanilla chocolate chip';

var numFlovers = flavors.length;

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];


function printAndGetHighScores(scores) {

    let highScore = 0;
    let output;

    for (let i = 0; i < scores.length; i++) {

        output = "Bubble solution #" + i + " score: " + scores[i];

        console.log(output);

        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

let highScore = printAndGetHighScores(scores);


function getBestResults (scores, highScore) {
    let bestSolutions = [];

    for (let i = 0; i < scores.length; i++) {
        if (scores[i] === highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

let bestSolution = getBestResults(scores, highScore);

console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore);
console.log('Solution with the highest score: ' + bestSolution);

