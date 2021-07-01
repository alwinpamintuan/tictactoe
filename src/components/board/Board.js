import React, {useContext} from 'react'
import {GameContext} from '../context/GameContext'
import Cell from '../cell/Cell'
import './Board.css'

function Board(){
    const {board} = useContext(GameContext)

    return(
        <div className="board">
            {
                board.map((row, x) => {
                    return row.map((cell, y) => {
                        return <Cell key={3*x + y} x={x} y={y}>{cell}</Cell>
                    })
                })
            }
        </div>
    )
}

export default Board