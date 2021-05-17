var rgbSingleList = [];
var rgbTotalList = [];
var indexSing;
var indexTot;

for ( indexTot = 0 ; indexTot <= 2 ; indexTot++ ){
    for ( indexSing = 0 ; indexSing <= 2 ; indexSing++ ) {
        var rgb = Math.floor(Math.random() * 256);
        rgbSingleList.push(rgb);
    }
    rgbTotalList.push(rgbSingleList);
    rgbSingleList = [];    
}

var rgb0 = rgbTotalList[0];
var rgb1 = rgbTotalList[1];
var rgb2 = rgbTotalList[2];

var cells = document.getElementsByClassName("generic-square");
var playButton = document.getElementById("play-button");

function resetGame() {
    window.location.reload(false);
}

playButton.addEventListener("click" , function() {
    for ( var q = 0 ; q < cells.length ; q++ ) {
        cells[q].style.backgroundColor = "rgb" + "(" + rgbTotalList[q] + ")";
    }

    //displays on screen a rgb code in a random order
    var rgbSpan = document.getElementById("rgbSpan");
    function randomRGBIndex() {
        var temp = Math.floor(Math.random() * 3);
        var rgbX = rgbTotalList[temp];
        return rgbX;
    }
    rgbSpan.textContent = "rgb" + "(" + randomRGBIndex() + ")";

    // checks whether the player has clicked the right color
    for ( var z = 0 ; z < cells.length ; z++ ) {
        cells[z].addEventListener("click" , function() {
            if ( this.style.backgroundColor.replace(/\s/g, '') == rgbSpan.textContent ) {
                alert("GIUSTO :-)) CLICCA DI NUOVO PLAY");
                resetGame();
            } else {
                alert("SBAGLIATO :-(( RIPROVA");
            }
        });
    }
});