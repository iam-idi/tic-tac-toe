const squares = document.querySelectorAll('.squares');
const notify = document.querySelector('#notification');
const restartBtn = document.querySelector('#restartBtn');

// const winConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ] 

// let options = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = 'X';
// let running = false;

// initializeGame();


// function initializeGame(){
//     squares.forEach(square => square.addEventListener("click", cellClicked));
//     restartBtn.addEventListener("click", restartGame);
//     notify.textContent = `${currentPlayer}'s turn`;
//     running = true;
// }

// function cellClicked(){
//     const cellIndex = this.getAttribute("cellIndex");
//     if(options[cellIndex] != "" || !running){
//         return;
//     }

//     updateCell(this, cellIndex);
//     checkWinner();
// }

// function updateCell(cell, index){
//     options[index] = currentPlayer;
//     cell.textContent = currentPlayer;
// }

// function changePlayer(){
//     currentPlayer = (currentPlayer == 'X') ? 'O' : "X";
//     notify.textContent = `${currentPlayer}'s turn`;
// }

// function checkWinner(){
//     let roundWon = false;

//     for(let i = 0; i < winConditions.length; i++){
//         const condition = winConditions[i];
//         const squareA = options[condition[0]];
//         const squareB = options[condition[1]];
//         const squareC = options[condition[2]];

//         if(squareA == "" || squareB == "" || squareC == ""){
//             continue;
//         }
//         if(squareA == squareB && squareB == squareC){
//             roundWon = true;
//             break;
//         }
//     }

//     if(roundWon){
//         notify.textContent = `${currentPlayer} wins!`;
//         running = false;
//     } 
//     else if(!options.includes("")){
//         notify.textContent = `Draw!`;
//         running = false;
//     }
//     else{
//         changePlayer();
//     }
// }

// function restartGame(){
//     currentPlayer = "X";
//     options = ["", "", "", "", "", "", "", "", ""];
//     notify.textContent = `${currentPlayer}'s turn`;
//     squares.forEach(square => square.textContent = "");
//     running = true;

// }


// ###############################################################################

const square1 = squares[0]; const square2 = squares[1]; const square3 = squares[2];

const square4 = squares[3]; const square5 = squares[4]; const square6 = squares[5];

const square7 = squares[6]; const square8 = squares[7]; const square9 = squares[8];


function addXO1(){
    if(notify.innerText === "X's turn" && square1.innerText !== 'o'){
        square1.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square1.innerText !== 'x'){
        square1.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO2(){
    if(notify.innerText === "X's turn" && square2.innerText !== 'o'){
        square2.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square2.innerText !== 'x'){
        square2.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO3(){
    if(notify.innerText === "X's turn" && square3.innerText !== 'o'){
        square3.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square3.innerText !== 'x'){
        square3.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO4(){
    if(notify.innerText === "X's turn" && square4.innerText !== 'o'){
        square4.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square4.innerText !== 'x'){
        square4.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO5(){
    if(notify.innerText === "X's turn" && square5.innerText !== 'o'){
        square5.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square5.innerText !== 'x'){
        square5.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO6(){
    if(notify.innerText === "X's turn" && square6.innerText !== 'o'){
        square6.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square6.innerText !== 'x'){
        square6.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO7(){
    if(notify.innerText === "X's turn" && square7.innerText !== 'o'){
        square7.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square7.innerText !== 'x'){
        square7.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO8(){
    if(notify.innerText === "X's turn" && square8.innerText !== 'o'){
        square8.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square8.innerText !== 'x'){
        square8.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function addXO9(){
    if(notify.innerText === "X's turn" && square9.innerText !== 'o'){
        square9.innerText = 'x';
        notify.innerText = "O's turn";
    } else if (notify.innerText === "O's turn" && square9.innerText !== 'x'){
        square9.innerText = 'o'
        notify.innerText = "X's turn";
    }

    checkWinner();
}

function checkWinner(){
    if(square1.innerText === 'x' && square2.innerText === 'x' && square3.innerText === 'x'){
        notify.textContent = 'x win';
    } else if(square4.innerText === 'x' && square5.innerText === 'x' && square6.innerText === 'x'){
        notify.textContent = 'x win';
    } else if (square7.innerText === 'x' && square8.innerText === 'x' && square9.innerText === 'x'){
        notify.textContent = 'x win';
    } else if (square1.innerText === 'x' && square4.innerText === 'x' && square7.innerText === 'x'){
        notify.textContent = 'x win';
    } else if (square2.innerText === 'x' && square5.innerText === 'x' && square8.innerText === 'x') {
        notify.textContent = 'x win';
    } else if (square3.innerText === 'x' && square6.innerText === 'x' && square9.innerText === 'x'){
        notify.textContent = 'x win';
    } else if (square1.innerText === 'x' && square5.innerText === 'x' && square9.innerText === 'x'){
        notify.textContent = 'x win';
    } else if ( square3.innerText === 'x' && square5.innerText === 'x' && square7.innerText === 'x'){
        notify.textContent = 'x win';
    } 
    
    else if(square1.innerText === 'o' && square2.innerText === 'o' && square3.innerText === 'o'){
        notify.textContent = 'o win';
    } else if(square4.innerText === 'o' && square5.innerText === 'o' && square6.innerText === 'o'){
        notify.textContent = 'o win';
    } else if (square7.innerText === 'o' && square8.innerText === 'o' && square9.innerText === 'o'){
        notify.textContent = 'o win';
    } else if (square1.innerText === 'o' && square4.innerText === 'o' && square7.innerText === 'o'){
        notify.textContent = 'o win';
    } else if (square2.innerText === 'o' && square5.innerText === 'o' && square8.innerText === 'o') {
        notify.textContent = 'o win';
    } else if (square3.innerText === 'o' && square6.innerText === 'o' && square9.innerText === 'o'){
        notify.textContent = 'o win';
    } else if (square1.innerText === 'o' && square5.innerText === 'o' && square9.innerText === 'o'){
        notify.textContent = 'o win';
    } else if ( square3.innerText === 'o' && square5.innerText === 'o' && square7.innerText === 'o'){
        notify.textContent = 'o win';
    }
    
    setTimeout(function drawCheck(){
        if(notify.textContent !== 'x wins' || notify.textContent !== 'o wins'){
        
            if(square1.textContent != "" && 
                square2.textContent != "" && 
                square3.textContent != "" && 
                square4.textContent != "" && 
                square5.textContent != "" && 
                square6.textContent != "" && 
                square7.textContent != "" && 
                square8.textContent != "" && 
                square9.textContent != ""){
                notify.textContent = 'Draw!';
            }}
    }, 500);
    
}

function restartGame(){
    squares.forEach(square => square.textContent = "");
    notify.textContent = "X's turn";
}

restartBtn.addEventListener('click', restartGame);