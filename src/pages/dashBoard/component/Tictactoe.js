import React,{useState} from "react";
import '../../dashBoard/style/Tictactoe.css'

function Tictactoe(){
   function playerOnePosition(i){
    let cell = document.getElementById(i)
    cell.innerHTML = "X"
   }

   function playerTwoPosition(i){
    let cell = document.getElementById(i)
    cell.innerHTML = "O"
   }
   
   function checkForPlayerPosiion(i){
    const check = document.getElementById(i)
        if(check.innerHTML==null){alert("Pick a cell to play....")}
        else if(check.innerHTML=="X"||check.innerHTML=="O"){alert("cell taken, pick another cell....") 
        return true}
        return false;
    }

   function checkWinning(){
    if (document.getElementById("1").innerHTML==="X" && document.getElementById("2").innerHTML==="X" && 
    document.getElementById("3").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("1").innerHTML==="O" && document.getElementById("2").innerHTML==="O" && 
    document.getElementById("3").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("4").innerHTML==="X" && document.getElementById("5").innerHTML==="X" && 
    document.getElementById("6").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("4").innerHTML==="O" && document.getElementById("5").innerHTML==="O" && 
    document.getElementById("6").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("7").innerHTML==="X" && document.getElementById("8").innerHTML==="X" && 
    document.getElementById("9").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("7").innerHTML==="O" && document.getElementById("8").innerHTML==="O" && 
    document.getElementById("9").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("1").innerHTML==="X" && document.getElementById("4").innerHTML==="X" && 
    document.getElementById("7").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("1").innerHTML==="O" && document.getElementById("4").innerHTML==="O" && 
    document.getElementById("7").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("2").innerHTML==="X" && document.getElementById("5").innerHTML==="X" && 
    document.getElementById("8").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("2").innerHTML==="O" && document.getElementById("5").innerHTML==="O" && 
    document.getElementById("8").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("3").innerHTML==="X" && document.getElementById("6").innerHTML==="X" && 
    document.getElementById("9").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("3").innerHTML==="O" && document.getElementById("6").innerHTML==="O" && 
    document.getElementById("9").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}  
    else if (document.getElementById("1").innerHTML==="X" && document.getElementById("5").innerHTML==="X" && 
    document.getElementById("9").innerHTML==="X")
        {alert("PlayerOneWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
    else if (document.getElementById("1").innerHTML==="O" && document.getElementById("5").innerHTML==="O" && 
    document.getElementById("9").innerHTML==="O")
        {alert("PlayerTwoWon")
        document.getElementById("playerOne").disabled=true
        document.getElementById("playerTwo").disabled=true}
   } 
  
  function playerOnePlay(event){
    if(event.target.id==="playerOne"){
      let title = document.getElementById('number').value
      if(!checkForPlayerPosiion(title)){
        playerOnePosition(title)
      }
      checkWinning()
    }
  }

  function playerTwoPlay(event){
    if(event.target.id==="playerTwo"){
      let title = document.getElementById('number2').value
      if(!checkForPlayerPosiion(title)){
        playerTwoPosition(title)
      }
      checkWinning()
    }
  }

  function restartGame(event){
    if(event.target.id==="restart"){
      alert("game has ended, click on play to start...")
      document.getElementById("playerOne").disabled=true
      document.getElementById("playerTwo").disabled=true
    }
  }

  function playGame(event){
    if(event.target.id==="play"){
      alert("Welcome back, enjoy ur game...")
      document.getElementById("playerOne").disabled=false
      document.getElementById("playerTwo").disabled=false
    }
  }

  return(
    <React.Fragment>
      <button id="play" onClick={playGame}>PLAY</button>
    <div class="board">
      <div class="grid-item" id="1"></div>
      <div class="grid-item" id="2"></div>
      <div class="grid-item" id="3"></div>
      <div class="grid-item" id="4"></div>
      <div class="grid-item" id="5"></div>
      <div class="grid-item" id="6"></div>
      <div class="grid-item" id="7"></div>
      <div class="grid-item" id="8"></div>
      <div class="grid-item" id="9"></div>
    </div>
    <button id="restart" onClick={restartGame}>RESTART</button> <br/>
    <div> <br/>
      <label htmlFor="fPlay">
    Player One(X): <input type="number" name="firstPlayer" id="number" placeholder="enter a cell to play"/>
    <button id="playerOne" onClick={playerOnePlay} >CLICK</button>
    </label><br/><br/>

    <label>
    Player Two(O): <input type="number" name="secondPlayer" id="number2" placeholder="enter a cell to play"/>
    <button id="playerTwo" onClick={playerTwoPlay} >CLICK</button>
      </label>
    </div>
    </React.Fragment>
  )
}

export default Tictactoe;