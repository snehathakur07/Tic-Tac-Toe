const winningConditions = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 5, 9],
    [3, 5, 7],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9]
]
let board = ['', '', '', '', '', '', '', '', '']

function BoardisFilled() {
    return !board.includes('')
}

let gameActive = true;
let player1 = "X";
let player2 = "O";
let currentPlayer = player1;

var p1,p2;
function askNames(){
    p1=prompt("Enter Player 1's name");
    p2=prompt("Enter Player 2's name");
    document.querySelector(".X").innerHTML=p1+"'s Turn";
    document.querySelector(".O").innerHTML=p2+"'s Turn";
}
askNames();
function turn(currentPlayer){
    if (gameActive) {
        if(currentPlayer===player1) {
            document.querySelector(`.${player1}`).classList.remove("invisible", "opacity-0");
            document.querySelector(`.${player1}`).classList.add("opacity-100");

            if(!document.querySelector(`.${player2}`).classList.contains("invisible", "opacity-0")) {
                document.querySelector(`.${player2}`).classList.add("invisible", "opacity-0");
                document.querySelector(`.${player2}`).classList.remove("opacity-100");
            }
        }
        else {
            document.querySelector(`.${player2}`).classList.remove("invisible", "opacity-0");
            document.querySelector(`.${player2}`).classList.add("opacity-100");
            if(!document.querySelector(`.${player1}`).classList.contains("invisible", "opacity-0")) {
                document.querySelector(`.${player1}`).classList.add("invisible", "opacity-0");
                document.querySelector(`.${player1}`).classList.remove("opacity-100");
            }
        }
    }
}
turn(currentPlayer);

function main(tile) {
    let tileText = currentPlayer;
    let tileId = tile.id;
    if (board[tileId - 1] === '') {
        document.querySelector(`[id="${tileId}"] span`).innerHTML = tileText;
        if(tileText==="X") document.querySelector(`[id="${tileId}"] span`).classList.add("cross")
    }
    else return;
    board[tileId - 1] = currentPlayer
    
    let win = checkWinner();
    if (win) {
        // console.log(currentPlayer + "wins");
        showWinner(currentPlayer);
        gameActive = false;
        return;
    }
    if(BoardisFilled()){
        showTie();
        gameActive=false;
        reset();
        return;
    }
    if (currentPlayer === player1) currentPlayer = player2;
    else currentPlayer = player1;
    turn(currentPlayer);
    if (BoardisFilled()) gameActive = false;
}

function showTie(){
    alert("Its a Tie! Reset for Rematch")
}

function checkWinner() {
    for (let i = 0; i < winningConditions.length; i++) {
        let [a, b, c] = winningConditions[i];
        if (board[a - 1] === board[b - 1] && board[b - 1] === board[c - 1] && board[a-1]!='') return true;
    }
    return false;
}

function showWinner(currentPlayer){
    let text=document.querySelector(`.${currentPlayer}`).innerHTML
    if(currentPlayer===player1)
        document.querySelector(`.${currentPlayer}`).innerHTML=p1+"<br>👑Wins👑"
    if(currentPlayer===player2)
        document.querySelector(`.${currentPlayer}`).innerHTML=p2+"<br>👑Wins👑"
    document.querySelector(`.${currentPlayer}`).classList.remove("text-5xl")
    document.querySelector(`.${currentPlayer}`).classList.add("text-7xl")
}

function reset(){
    board = ['', '', '', '', '', '', '', '', '']
    
}

let tiles = Array.from(document.querySelectorAll(".tile"));

tiles.forEach(tile => {
    tile.addEventListener("click", () => {
        if (gameActive) {
            main(tile);
        }
    })
});

document.querySelector("button").addEventListener("click",()=>{
    reset();
    document.querySelectorAll("span").forEach((tile)=>{
        tile.innerHTML="";
    });
    
    document.querySelectorAll("span").forEach((tile)=>{
        tile.classList.remove("cross")
    });
    
    document.querySelector(".X").classList.remove("text-7xl")
    document.querySelector(".X").classList.add("text-5xl")
    document.querySelector(".O").classList.remove("text-7xl")
    document.querySelector(".O").classList.add("text-5xl")
    
    document.querySelector(".X").innerHTML=p1;
    document.querySelector(".O").innerHTML=p2;


    gameActive=true;
    currentPlayer=player1;
    turn(currentPlayer);
    askNames()

})

