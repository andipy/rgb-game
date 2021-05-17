var colorNum = 3;
var colorsArray = [];
var winningColor;
var cells = document.querySelectorAll(".generic-square");
var play = document.querySelector("#play-button");
var rgbDisplay = document.querySelector("#rgb-span");

function randomRGB() {
    return Math.floor(Math.random() * 256);
}

function generateRGB() {
    for ( var i = 0 ; i < colorNum ; i++ ) {
        var rgb = "rgb(" + randomRGB() + ", " + randomRGB() + ", " + randomRGB() + ")";
        colorsArray.push(rgb);
    }
    return colorsArray;
}

function winColor(array) {
    var colorIndex = Math.floor(Math.random() * colorNum);
    return array[colorIndex];
}

function assignColors(array) {
    for ( var i = 0 ; i < array.length ; i++ ) {
        array[i].style.backgroundColor = colorsArray[i];
    }
}

function check(array) {
    for ( var i = 0 ; i < array.length ; i++ ) {
        array[i].addEventListener("click" , function() {
            if ( this.style.backgroundColor == winningColor ) {
                alert("Bravo");
            } else {
                alert("Wrong");
            }
        })
    }
}

function rgbSpan() {
    rgbDisplay.textContent = winningColor;
}

function reset() {
    for ( var i = 0 ; i < cells.length ; i++ ) {
        cells[i].style.backgroundColor = "";
    }
}

play.addEventListener("click" , function() {
    reset();
    generateRGB();
    assignColors(cells);
    winningColor = winColor(colorsArray);
    rgbSpan();
    check(cells);
})
