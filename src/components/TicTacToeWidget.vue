<template>
    <div>
      <h2>Tic Tac Toe Widget</h2>
      <div class="game-container">
        <div class="board">
          <div
            v-for="(cell, index) in board"
            :key="index"
            class="cell"
            @click="makeMove(index)"
          >
            {{ cell }}
          </div>
        </div>
        <button @click="resetBoard">Reset</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        board: Array(9).fill(null),
        currentPlayer: 'X',
        winner: null,
        gameOver: false,
      };
    },
    methods: {
      makeMove(index) {
        if (!this.gameOver && this.board[index] === null) {
          this.board.splice(index, 1, this.currentPlayer);
          this.checkWinner();
          this.switchPlayer();
        }
      },
      switchPlayer() {
        this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
      },
      checkWinner() {
        const winningCombinations = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
  
        for (let combination of winningCombinations) {
          const [a, b, c] = combination;
          if (
            this.board[a] &&
            this.board[a] === this.board[b] &&
            this.board[a] === this.board[c]
          ) {
            this.winner = this.board[a];
            this.gameOver = true;
            return;
          }
        }
  
        if (this.board.every((cell) => cell !== null)) {
          this.gameOver = true;
        }
      },
      resetBoard() {
        this.board = Array(9).fill(null);
        this.currentPlayer = 'X';
        this.winner = null;
        this.gameOver = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .game-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .board {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    width: 300px;
  }
  
  .cell {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    background-color: lightgray;
    cursor: pointer;
    height: 100px;
  }
  
  button {
    margin-top: 16px;
  }
  </style>
  