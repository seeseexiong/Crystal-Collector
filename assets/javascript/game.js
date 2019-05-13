$(document).ready(function() {
    //set the gobla variable = counter to keep track of the play score
    let yourCounter = 0;
    let wins = 0;
    let losses = 0;

    // COMPUTER PICK RANDOM NUBMER -------------------------------------------------------------
    //automatically generate a random number from 19 - 120 each time when page is refreshed
    let x = 19;
    let y = 120;
    let randomNumber = null;

    // RANDOM VALUES FOR CRYSTALS---------------------------------------------------------------
    //crystalValue will store 4 random numbers selected from the options
    let crystalValue = [];
    //4 images stored in an array
    let imagesOfCrystal = ['assets/images/crystal1.png', 'assets/images/crystal2.png', 'assets/images/crystal3.png', 'assets/images/crystal4.png'];



    
    //FUNCTIONS -------------------------------------------------------------------------------
    function emptyImages() {
        $('#crystals-div').empty();
    };

    function playGame() {
        crystalValue = [];
        // COMPUTER GENERATE A NUMBER ---------------------------
        randomNumber = Math.floor(Math.random() * ((y-x)+1) + x);
        //after randomNumber is generated, it is print on DOM
        $("#targetNumber").text(randomNumber);
    
        //EACH CRYSTALS GET A RANDOMIZE VALUE --------------------------------
        for ( let  i = 0; i < 4; i++) {
            //Create 4 random numbers between 1-12 to be assign to 4 crystals
            let options = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
            let random = options[Math.floor(Math.random() * options.length)];
            crystalValue.push(random);
        };  

        //CREATE 4 IMAGES ON DOM -------------------------------------------------------------------
        // loop through imagesOfCrystal and create img tag for becasue they did not exist on DOM yet
        for ( let i = 0; i < imagesOfCrystal.length; i++ ) {
            //create img tag
            let crystalImg = $('<img>');

            //use addClass method to assign class the img tags
            crystalImg.addClass('crystalClass');
        
            //use attribute method to assign 
                //image file and crystalValue
            crystalImg.attr({
                src: imagesOfCrystal[i], 
                value: crystalValue[i]
            });
        
            //display the images on the html #crystals-div
            $('#crystals-div').append(crystalImg);
        };

        //ADD UP YOUR COUNTERS (valuse of the clicked crystals) --------------
        //when the crystalClass class is clicked .........
        $('.crystalClass').on('click', function(){
            //the value of it's attribute ...
            var clickedValue = ($(this).attr('value'));
            //turns into an interger ...
            clickedValue = parseInt(clickedValue);
            //this value gets add up into the global veriable yourCounter
            yourCounter += clickedValue;
    
            $("#totalScore").text(" " + yourCounter);
    
            if (yourCounter===randomNumber) {
                alert ("You Win!!!!");
                wins += 1;
                $("#win-text").text(wins);
                emptyImages();
                //load a new round
                playGame();
            }
            else if (yourCounter>=randomNumber){
                alert("You Lose!!!");
                losses += 1;
                $("#losses-text").text(losses);
                emptyImages();
                //load a new round
                playGame();
            };
        });

        //when a new round starts, your counter is 0
        yourCounter = 0;
        $("#totalScore").text(" " + yourCounter);
    };

 

    //MAIN PROCESS STARTS HERE -----------------------------------------------------------------------------
    playGame();
    
});

