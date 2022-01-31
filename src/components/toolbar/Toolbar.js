import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext'
import styles from './Toolbar.module.css'

function Toolbar(){
    const { setReset, reset } = useContext(GameContext)

    const resetBoard = () => {
        setReset(reset+1);
    }

    return(
        <div className={styles.container}>
            <button onClick={resetBoard}>Reset</button>
        </div>
    )
}

export default Toolbar