import React ,{ useState}from 'react'
import Square from './Square'


const Board = () => {
  const [state, setState] =useState(Array(9).fill(null))
const [isXTurn, setIsXTurn] = useState(true)

const checkWinner= () => {
  const winnerLogic =[
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

for (let logic of winnerLogic) {
  const [a,b,c] =logic
  if(state[a] !== null && state[a] === state[b] && state[c]){
    return state[a]
  }
  return false

}}

const isWinner =checkWinner()

const  handClick = (index)=>{
  if (state[index] !== null) {
    return;
  }
  const copyState = [...state]
  copyState[index] = isXTurn ? "X":"0"
  setState(copyState)
  setIsXTurn(!isXTurn)
}

const handleReset = (state) =>{
  setState(Array(9).fill(null))
}

  return (
    <div className="container">
      {isWinner ? (
        <>{isWinner} won {"   "}
             <button onClick={handleReset}>Play Again
          </button></>
      ):(
      <>
      <h4> Player {isXTurn ? "X":"0"} Turn</h4>
        <div className="row">
        <Square onClick={()=> handClick(0)} value={state[0]}/>
        <Square onClick={()=> handClick(1)}  value={state[1]}/>
        <Square onClick={()=> handClick(2)} value={state[2]}/>
        </div>
        
        <div className="row">
        <Square onClick={()=> handClick(3)} value={state[3]}/>
        <Square onClick={()=> handClick(4)} value={state[4]}/>
        <Square onClick={()=> handClick(5)} value={state[5]}/>
        </div>
        <div className="row">
        <Square onClick={()=> handClick(6)} value={state[6]}/>
        <Square onClick={()=> handClick(7)} value={state[7]}/>
        <Square onClick={()=> handClick(8)} value={state[8]}/>
        </div>
        <button onClick={handleReset}>Refresh
          </button>
        </>)}
    </div>

  )
}

export default Board