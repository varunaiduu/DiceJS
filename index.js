var randomNumber1 =Math.floor((Math.random()*6)+1);
var randomImage= "dice" + randomNumber1+".png";
var randomSource="images/"+randomImage;

document.querySelectorAll("img")[0].setAttribute("src",randomSource);

var randomNumber2 =Math.floor((Math.random()*6)+1);
var Randomsource2="images/dice"+randomNumber2+".png"
document.querySelectorAll("img")[1].setAttribute("src",Randomsource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="PLAYER 1 WINS"
}
else if(randomNumber2> randomNumber1){
    document.querySelector("h1").innerHTML="PLAYER 2 WINS"
}
else{
    document.querySelector("h1").innerHTML="DRAW"

    
}