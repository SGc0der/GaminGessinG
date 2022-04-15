player1Name = localStorage.getItem("player1Name");
console.log(player1Name);
player2Name = localStorage.getItem("player2Name");
console.log(player2Name);
player1Score = 0;
player2Score = 0;
document.getElementById("player1Name").innerHTML=player1Name+" : ";
document.getElementById("player2Name").innerHTML=player2Name+" : ";
document.getElementById("player1Score").innerHTML=player1Score;
document.getElementById("player2Score").innerHTML=player2Score;
document.getElementById("playerQuestion").innerHTML="Question Turn: "+player1Name;
document.getElementById("playerAnswer").innerHTML="Answer Turn: "+player2Name;
function send(){
    getWord=document.getElementById("input1").innerHTML;
    word=getWord.toLowerCase();
    console.log(word);
    charAt1=word.charAt(1);
    console.log(charAt1);
    halfLength=Math.floor(word.length/2);
    charAt2=word.charAt(halfLength);
    console.log(charAt2);
    last=word.length-1;
    charAt3=word.charAt(last);
    console.log(charAt3);
    replace1=word.replace(charAt1,"_");
    replace2=replace1.replace(charAt2,"_");
    replace3=replace2.replace(charAt3,"_");
    console.log(replace3);
    qWord="<h4 id='wordDisplay'>Question. "+replace3+"</h4>";
    inputBox="<br>Answer: <input id='ans' type='text'>";
    checkBtn="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row=qWord+inputBox+checkBtn;
    document.getElementById("output").innerHTML=row;
}
qTurn="player1"
aTurn="player2"
function check(){
    getAns=document.getElementById("ans").innerHTML;
    ans=getAns.toLowerCase();
    console.log("Ans- "+ans);
    if(ans==word){
        if(aTurn=="player1"){
        player1Score=player1Score+1;
        document.getElementById("player1Score").innerHTML=player1Score
        }
        if(aTurn=="player2"){
            player2Score=player2Score+1;
            document.getElementById("player2Score").innerHTML=player1Score
            }
    }
    if(qTurn=="player1"){
        qTurn="player2";
        aTurn="player1";
    }
    if(qTurn=="player2"){
        qTurn="player1";
        aTurn="player2";
    }
    if(aTurn=="player2"){
        qTurn="player2";
        aTurn="player1";
    }
    if(aTurn=="player1"){
        qTurn="player1";
        aTurn="player2";
    }
    document.getElementById("output").innerHTML="";
}