//rgb game scripts start here
//___________________________

//definition of the functions needed
function randomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomNumber() {
    return Math.floor(Math.random() * 256);
}
function generateRGB() {
    return "rgb(" + randomNumber() + "," + randomNumber() + "," + randomNumber() + ")";
}

function resetGame(array) {
    for ( var z = 0 ; z < array.length ; z++ ) {
        array[z].style.background = "";
    }

}

//definition of the variables
var cells = document.getElementsByClassName("generic-square");
var playButton = document.getElementById("play-button");
var rgbDisplay = document.getElementById("rgb-span");
var scoreDisplay = document.getElementById("score");
var score = 0;
var rgbArray = [];

//generates an entire rgb code and pushes it to the rgb code array
function generateRgbArray(num) {
    for ( var i = 0 ; i < num ; i++ ) {
        var rgb = generateRGB();
        rgbArray.push(rgb);
    }
}

generateRgbArray(3);

//listens to the click on the play button e assigns an rgb code from the array to every color cell; also replaces the span with a random rgb code

playButton.addEventListener("click" , function() {
    for ( var j = 0 ; j < rgbArray.length ; j++ ) {
        cells[j].style.background = rgbArray[j];
    }
    rgbDisplay.textContent = rgbArray[randomIndex(rgbArray)];
});

//listens to the click on every color cell and checks if the color of the clicked one matches the one written in the user screen
for ( var n = 0 ; n < cells.length ; n++ ) {
    cells[n].addEventListener("click" , function() {
        if ( this.style.background.replace(/\s/g, '') == rgbDisplay.textContent ) {
            alert("Bravo!");
            score++;
            scoreDisplay.textContent = score;
            resetGame(cells);
        } else {
            alert("Errore");
            resetGame(cells);
        }
    });
}

