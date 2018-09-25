window.onload=function(){

//each cyrstal randomly generate a number 1-12
//each cyrstal holds a number throughout that round

$("#cyrstal_1").on("click", function(){
    document.getElementById("scoreTracker-Text").innerHTML = Math.floor(Math.random()*12);

    //for(var i; i = scoreTracker===randomNumber; i++)
});

$("#cyrstal_2").on("click", function(){
    document.getElementById("scoreTracker-Text").innerHTML = Math.floor(Math.random()*12);
});

$("#cyrstal_3").on("click", function(){
    document.getElementById("scoreTracker-Text").innerHTML = Math.floor(Math.random()*12);
});

$("#cyrstal_4").on("click", function(){
    document.getElementById("scoreTracker-Text").innerHTML = Math.floor(Math.random()*12);
});

//on click, each cyrstal will add the numbers and output the sum to #scoreTracker-Text
//if the sum in the #scoreTracker-Text is bigger than the randomNumber-Text then you lose
//If the sum in the #scoreTracker-Text is equal to the randomNumber-Text than you win










}
