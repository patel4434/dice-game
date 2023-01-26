var number1 =Math.floor((Math.random()*6)+1);

var rimage1="dice"+number1+".png";
var simage1="images/"+rimage1;


document.querySelectorAll("img")[0].setAttribute("src",simage1);



var number2 =Math.floor((Math.random()*6)+1);

var rimage2="dice"+number2+".png";
var simage2="images/"+rimage2;


document.querySelectorAll("img")[1].setAttribute("src",simage2);

if (number1>number2) {
    document.querySelector("h1").innerHTML="player 1 win"
    
}

else if (number1<number2) {
    document.querySelector("h1").innerHTML="player 2 win"
    
}

else if (number1=number2) {
    document.querySelector("h1").innerHTML="draw"
    
}