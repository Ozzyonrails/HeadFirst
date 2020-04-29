let scoops = 5;
while (scoops > 0) {
    if (scoops >= 5) {
        alert("Eat faster, the ice cream is going to melt!");
    } else if (scoops == 3) {
        alert("Ice cream is running low!");
    } else if (scoops == 2) {
        alert("Friend, please do not eat so fast...");
    } else if (scoops == 1) {
        alert("Mmm... I'm was just wanna help white for you..");
    } else {
        alert("You are was can give me one scoop... I'm said");
    }
    document.write("Another scoop!<br>");
    scoops--;

}
document.write("Life without ice cream isn't the same");
