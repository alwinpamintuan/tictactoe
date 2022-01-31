import React, {useContext, useEffect} from 'react'
import {GameContext} from '../context/GameContext'
import Cell from '../cell/Cell'
import './Board.css'

function Board({ winningLine }){
    const {board} = useContext(GameContext)
    
    const isArrayInArray = (arr, item) => {
        if(!arr) return false;

        var item_as_string = JSON.stringify(item);
      
        var contains = arr.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
    }
    
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