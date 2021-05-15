var randomnumber1=Math.floor(Math.random()*6)+1;

var randomDiceImage= "dice" + randomnumber1 +".png";

var randomsourceimage="images/"+randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src",randomsourceimage);
var randomnumber2=Math.floor(Math.random()*6)+1;

var randomDiceImage2= "dice" + randomnumber2 +".png";

var randomsourceimage2="images/"+randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomsourceimage2);

if(randomnumber1>randomnumber2)
  document.querySelector("h1").innerHTML="Player1 Wins!!";
  else if (randomnumber2>randomnumber1)
    document.querySelector("h1").innerHTML="Player2 Wins!!";
    else
        document.querySelector("h1").innerHTML="Oops, Its a Draww!!";
