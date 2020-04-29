function init() {

    let planet = document.getElementById("greenplanet");

    planet.setAttribute("class", "redtext");

    planet.innerHTML = "Red Alert: hit by phaser fire!";
};

window.onload = init;
