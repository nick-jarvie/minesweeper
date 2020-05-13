document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
var board = {
  cells: [
    {
      row: 0,
      col: 0,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 0,
      col: 1,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 0,
      col: 2,
      isMine: randomMine(),
      hidden: true,
    },
    {
      row: 0,
      col: 3,
      isMine: randomMine(),
      hidden: true,
    },  
    {
      row: 1,
      col: 0,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 1,
      col: 1,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 1,
      col: 2,
      isMine: randomMine(),
      hidden: true,
    },
    {
      row: 1,
      col: 3,
      isMine: randomMine(),
      hidden: true,
    },  
    {
      row: 2,
      col: 0,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 2,
      col: 1,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 2,
      col: 2,
      isMine: randomMine(),
      hidden: true,
    },
    {
      row: 2,
      col: 3,
      isMine: randomMine(),
      hidden: true,
    },
    {
      row: 3,
      col: 0,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 3,
      col: 1,
      isMine: randomMine(),
      hidden: true,
    }, 
    {
      row: 3,
      col: 2,
      isMine: randomMine(),
      hidden: true,
    },
    {
      row: 3,
      col: 3,
      isMine: randomMine(),
      hidden: true,
    }
  ]
}

function startGame () {
  // Don't remove this function call: it makes the game work!
  for (var i = 0; i < board.cells.length; i++) {
      
      var cell = board.cells[i]
      
      cell.surroundingMines = countSurroundingMines(cell)
  }

  lib.initBoard()
}

document.onclick = checkForWin
window.oncontextmenu = checkForWin

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  // if i find a mine that is not marked, you have not won

  var isTheWinner = true

  for (var i = 0; i < board.cells.length; i++) {
      var cell = board.cells[i]
      if (cell.isMine && !cell.isMarked)
        isTheWinner = false
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)

    if (isTheWinner) {
        lib.displayMessage('You win!')
    }
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  
  var count = 0

  var surrounding = lib.getSurroundingCells(cell.row, cell.col)

  for (var i = 0; i < surrounding.length; i++) {
      var cell = surrounding[i]

      if (cell.isMine) {
      count++
    }
  }

  return count
}

// create function to randomise mines
// each cell.isMine has a 25% chance of being a mine

function randomMine() {
  if (Math.random() < 0.25) {
    return true
  } else {
    return false
  }
}

// create button to refresh page/board

function refreshPage(){
    window.location.reload();
} 




/*

document.getElementById("myBtn").addEventListener("click", refreshPage);

const buttonElement = document.getElementById('refresh-button');

buttonElement.onclick = window.location.reload

document.getElementById('refresh-button').addEventListener('click', refreshPage)

function refreshPage(){
  window.location.reload();
}

*/