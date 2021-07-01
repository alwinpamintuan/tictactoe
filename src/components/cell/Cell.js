import React, {useState, useContext} from 'react';
import {GameContext} from '../context/GameContext'
import './Cell.css'

function Cell({x, y}){
    const [ticked, setTicked] = useState(false)
    const {turn, setTurn, board, setBoard, count, setCount} = useContext(GameContext)

    const handleClick = (e) => {
        e.preventDefault()

        const newBoard = [...board]
        newBoard[x][y] =
            turn
            ? "O"
            : "X"
        
        setBoard(newBoard)
        setTicked(true)
        setTurn(!turn)
        setCount(count+1)
    }

    return(
        <div className={`cell ${turn? "O": "X"}`} onClick={handleClick} disabled={ticked}>
            {
                board[x][y] !== null
                ? board[x][y] === "O"
                    ? <svg className="O" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                    : <svg className="X" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
                : null
            }
        </div>
    )
}

export default Cell