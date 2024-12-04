
var guessnumber=document.getElementById("guessnumber")
var para=document.getElementById("para")
var score=document.getElementById("score")
var randomnumber=Math.floor(Math.random()*10)+1
var Totalscore=10

function check(){
    var enterednumber=guessnumber.value
    if(randomnumber==enterednumber){
        
        console.log("Right")
        para.textContent="Right"
        alert("You Won")
    }
    else if(enterednumber>0){
        Totalscore=Totalscore-1
        score.textContent="score: "+Totalscore
        console.log("wrong")
        para.textContent="Wrong"
    }
    else {
        score.textContent="score: "+Totalscore
        alert("You Lose")

    }

}