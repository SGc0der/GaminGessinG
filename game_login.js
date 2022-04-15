function addUser(){
    player1Name=document.getElementById("input1").value ;
    player2Name=document.getElementById("input2").value ;
    localStorage.setItem("player1Name",player1Name);
    localStorage.setItem("player2Name",player2Name);
    window.location="game_page.html";
}