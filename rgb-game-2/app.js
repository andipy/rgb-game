// function that creates an array with three color channel codes, example: [125, 31, 254]
function rgbCode(){
    var rgbNumbers = [];
    for ( var i = 0; i < 3; i++ ) {
        var singleCode = Math.floor(Math.random()*256);
        rgbNumbers.push(singleCode);
    }
    return rgbNumbers;                
}

// function that generates an actual rgb code usable in the css class, example; rgb(125, 31, 255)
function generateColorClass(){
    var rgbNumbers = rgbCode();
    var color = "rgb(";

    for ( var i = 0; i < rgbNumbers.length; i++ ) {
        var oneCode = rgbNumbers[i];
        if ( i < 2 ) {
            color += oneCode + ", ";
        } else {
            color += oneCode;
        }                                        
    }
    color += ")"
    // console.log(color);
    return color;
}

// APP: pressing the button, the color of the three squares change
var player = document.getElementById("change");
var squares = document.querySelectorAll(".square");
var response = document.getElementById("response");
var coloredSquares = document.getElementsByClassName("colored");

player.addEventListener("click", function(){
    response.innerHTML = '';
    var allRGB = [];

    // console.log("Ecco i tre rgb che ho creato:"); 
    for ( var i = 0; i < squares.length; i++ ) {
        var rgb = generateColorClass();
        squares[i].innerHTML = '<div class="square shadow colored" style="width:100%; background-color:' + rgb + '"</div>';

        allRGB.push(rgb);                    
    }
    // console.log(allRGB);

    var actualRGB = document.getElementById("actualRGB");
    var randomRGBIndex = Math.floor(Math.random()*3);
    var randomRGB = allRGB[randomRGBIndex];                
    
    actualRGB.innerHTML = randomRGB;
    // console.log("Ecco l'RGB che ho incollato nell'HTML: " + randomRGB + ", il numero " + (randomRGBIndex + 1));
    // console.log("------------");
    
    

    for ( var i = 0; i < coloredSquares.length; i++ ) {
        coloredSquares[i].addEventListener("click", function(event){
            // console.log("mi hanno cliccato");
            var clicked = event.srcElement.style.backgroundColor;

            if ( clicked != randomRGB ) {
                response.innerHTML = "SBAGLIATO :( RIPROVA";
                // console.log(clicked);
                this.style.backgroundColor = "#c4c4c4";
                // this.parentElement.classList.add("hidden");
            } else {
                response.innerHTML = "GIUSTO! GIOCA DI NUOVO!";
                for ( var i = 0; i < coloredSquares.length; i++ ) {
                    coloredSquares[i].style.backgroundColor = randomRGB;
                    coloredSquares[i].parentElement.style.backgroundColor = randomRGB;
                }
            }
        });               
    }
});