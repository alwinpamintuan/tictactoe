import React, {useContext, useEffect, useState} from 'react'
import Board from '../components/board/Board'
import {GameContext} from '../components/context/GameContext'

const MAX_COUNT = 9
const BOARD_SIZE = 3

function TicTacToe(){
    const {board, count} = useContext(GameContext)
    const [winner, setWinner] = useState()

    const isWon = (path) => {
        const win = [
                JSON.stringify(new Array(BOARD_SIZE).fill('X')),
                JSON.stringify(new Array(BOARD_SIZE).fill('O'))
            ]
        path = JSON.stringify(path)

        for(let i=0; i<win.length; i++)
            if(path === win[i]){
                setWinner(win[i][2])
                return true
            }
        
        return false
    }

    const zip = (arr, ...arrs) => {
        return arr.map((val, i) => arrs.reduce((a, arr) => [...a, arr[i]], [val]));
    }

    const GameOver = () => {
        const cells = document.querySelectorAll('.cell')
        
        for(let i=0; i<cells.length; i++) cells[i].setAttribute("disabled", "true")
    }

    useEffect(() => {
        const checkWinner = () => {
            if(count === MAX_COUNT) setWinner(null)

            const cols = zip(...board)
    
            // Check row/cols
            for(let i=0; i<BOARD_SIZE; i++){
                const row = board[i]
                const col = cols[i]
    
                if(isWon(row) || isWon(col)) return true
            } 
    
            // Check diagonals
            const diagonal = [board[0][0], board[1][1], board[2][2]]
            const antidiagonal = [board[0][2], board[1][1], board[2][0]]
    
            if(isWon(diagonal) || isWon(antidiagonal)) return true
    
            return false
        }

        checkWinner()
    }, [board, count])

    useEffect(() => {
        if(winner !== undefined){
            winner? alert(`${winner} won!`) : alert("Draw")
            GameOver()
        }
    }, [winner])

    return(
        <Board/>
    )
}

export default TicTacToe