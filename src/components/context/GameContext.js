import React, {useState} from 'react'

const GameContext = React.createContext({
    turn: false,
    board: Array(3).fill(0).map(row => new Array(3).fill(null)),
    count: 0,
    setTurn: () => {},
    setBoard: () => {},
    setCount: () => {}
});

function GameContextProvider({children}){
    const [turn, setTurn] = useState(false)
    const [board, setBoard] = useState(Array(3).fill(0).map(row => new Array(3).fill(null)))
    const [count, setCount] = useState(0)
    
    const contextvalue = {turn, setTurn, board, setBoard, count, setCount}

    return(
        <GameContext.Provider value={contextvalue}>
            {children}
        </GameContext.Provider>
    )
}

export {GameContext, GameContextProvider}