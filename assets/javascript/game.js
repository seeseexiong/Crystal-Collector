$(document).ready(function() {
    //set the gobla variable = counter to keep track of the play score
    var counter = 0;
    var wins = 0;
    var losses = 0;
    //automatically generate a random number from 19 - 120 each time when page is refreshed
    var x = 19;
    var y = 120;
    var randomNumber = Math.floor(Math.random() * ((y-x)+1) + x);
    
    //after randomNumber is generated, it is print on DOM
    $("#targetNumber").text(randomNumber);

    //create an array of values to be assign to four crystals
    var numberOptions = [10, 5, 3, 1];
        for ( var i = 0; i<numberOptions.length; i++){
           var imageCrystal = $("<img>");
           imageCrystal.addClass("crystal-image");
           imageCrystal.attr("src", "assets/images/crystal3.png");
           imageCrystal.attr("value", numberOptions[i]);
           $("#crystals-div").append(imageCrystal);
        };
        

    //create an on click handler - when the crystal is clicked, it's value gets add up
    $(".crystal-image").on("click", function(){
        var crystalValue = ($(this).attr("value"));
        crystalValue = parseInt(crystalValue);
        counter += crystalValue;

            $("#totalScore").text(" " + counter);
            if (counter===randomNumber) {
                alert ("You Win!!!!");
                wins += 1;
                $("#win-text").text(wins);
            }
            else if (counter>=randomNumber){
                alert("You Lose!!!");
                losses += 1;
                $("#losses-text").text(losses);
            };
    });
});

