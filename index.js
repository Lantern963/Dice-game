var randomNumber1 = Math.random() * 6;
randomNumber1 = Math.ceil(randomNumber1);

var RN1 = "images/dice"+randomNumber1+".png";
var randomNumber2 = Math.random() * 6;
randomNumber2 = Math.ceil(randomNumber2);

var RN2 = "images/dice"+randomNumber2+".png";

document.querySelector(".img1").setAttribute("src",RN1);
document.querySelector(".img2").setAttribute("src",RN2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="Player 1 wins";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerHTML="Tie";
}
else{
  document.querySelector("h1").innerHTML="Player 2 wins";
}
