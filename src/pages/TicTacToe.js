import React, { useContext, useEffect, useState } from 'react'
import Board from '../components/board/Board'
import Header from '../components/header/Header'
import { GameContext } from '../components/context/GameContext'
import { zip } from '../components/helpers'

const MAX_COUNT = 9
const BOARD_SIZE = 3

function TicTacToe(){
    const {board, count} = useContext(GameContext)
    const [winner, setWinner] = useState()
    const [winningLine, setWinningLine] = useState()

    const isWon = (path) => {
        const win = [JSON.stringify(new Array(BOARD_SIZE).fill('X')), JSON.stringify(new Array(BOARD_SIZE).fill('O'))]
        path = JSON.stringify(path)

        for(let i=0; i<win.length; i++)
            if(path === win[i]){
                setWinner(win[i][2])
                return true
            }
        
        return false
    }

    const GameOver = () => {
        const cells = document.querySelectorAll('.cell')

        for(let i=0; i<cells.length; i++) cells[i].setAttribute("disabled", "true")
    }

    // Do this effect on board change to check if game has a winner
    useEffect(() => {
        const checkWinner = () => {
            if(count === MAX_COUNT) setWinner(null)

            const cols = zip(...board)
    
            // Check row/cols
            for(let i=0; i<BOARD_SIZE; i++){
                const row = board[i]
                const col = cols[i]
    
                if(isWon(row))
                    setWinningLine([[i, 0], [i, 1], [i, 2]]);
                else if(isWon(col))
                    setWinningLine([[0, i], [1, i], [2, i]]);
            } 
    
            // Check diagonals
            const diagonal = [board[0][0], board[1][1], board[2][2]]
            const antidiagonal = [board[0][2], board[1][1], board[2][0]]
    
            if(isWon(diagonal))
                setWinningLine([[0,0], [1,1], [2,2]]);
            else if(isWon(antidiagonal))
                setWinningLine([[0,2], [1,1], [2,0]]);
    
            return false
        }

        checkWinner()
    }, [board, count])

    // Do this effect if a winner is found or if draw
    useEffect(() => {
        if(winner !== undefined){
            winner? alert(`${winner} won!`) : alert("Draw")
            GameOver()
        }
    }, [winner])

    return(
        <div>
            <Header/>
            <Board winningLine={winningLine}/>
        </div>
    )
}

export default TicTacToe