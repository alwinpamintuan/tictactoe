import React, { useContext } from 'react'
import { GameContext } from '../context/GameContext'
import Cell from '../cell/Cell'
import './Board.css'
import { useEffect } from 'react/cjs/react.development'

function Board({ winningLine }){
    const {board, reset, setBoard} = useContext(GameContext)
    
    const isArrayInArray = (arr, item) => {
        if(!arr) return false;

        var item_as_string = JSON.stringify(item);
      
        var contains = arr.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
    }

    useEffect(() => {
        setBoard(Array(3).fill(0).map(row => new Array(3).fill(null)))
    }, [reset, setBoard])
    
    return(
        <div className="board">
            {
                board.map((row, x) => {
                    return row.map((cell, y) => {
                        
                        if(isArrayInArray(winningLine, [x,y]))
                            return <Cell winner={true} key={3*x + y} x={x} y={y}>{cell}</Cell>    

                        return <Cell key={3*x + y} x={x} y={y}>{cell}</Cell>
                    })
                })
            }
        </div>
    )
}

export default Board