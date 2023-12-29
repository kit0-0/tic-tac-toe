# Tic Tac Toe Game

This is a simple implementation of the classic Tic Tac Toe game using React. The game consists of a 3x3 grid where two players take turns to place their marks ('X' or 'O') in an attempt to get three in a row horizontally, vertically, or diagonally. The game declares a winner when such a sequence is achieved or ends in a draw when the grid is filled with no winner.

## Components

### 1. `Board` Component

The main component that represents the game board.

#### State

- `squares`: An array representing the state of each square in the grid.
- `isXTurn`: A boolean indicating whether it's currently X's turn.

#### Functions

- `winnerLogic`: An array containing all the possible winning combinations (rows, columns, and diagonals).
- `checkWinner`: A function to check if there is a winner based on the current state of the board.
- `handleSquareClick`: A function to handle a click on a square. It updates the board state and switches turns.
- `handleReset`: A function to reset the board to its initial state.

#### JSX Structure

- If there is a winner, display the winner and a "Play Again" button.
- If there is no winner, display the current player's turn and the game board.
  - The game board is divided into rows and squares, and each square is a `Square` component.
- A "Refresh" button is provided to reset the board.

### 2. `Square` Component

A simple functional component representing a square in the Tic Tac Toe grid.

#### Props

- `value`: The value ('X', 'O', or `null`) of the square.
- `onClick`: A function to be called when the square is clicked.

## Usage

1. Clone the repository or create a new React app.
2. Copy and paste the `Board` and `Square` components into your React application.
3. Ensure that the necessary dependencies are installed (`react` and `react-dom`).
4. Use the `Board` component in your main application file or component.
5. Run your React application.

Now, you should have a functional Tic Tac Toe game ready to be played!
