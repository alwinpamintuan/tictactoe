import React, { useContext } from 'react';
import { GameContext } from '../context/GameContext'
import styles from './Header.module.css'

function Header(){
    const { turn } = useContext(GameContext);

    return(
        <div className={styles.container}>
            <h1>Tic Tac Toe</h1>

            <div className={styles.gamebar}>
                <h3 className={styles.fade}>{turn? "◯" : "🗙"} TURN</h3>
            </div>
        </div>
    )
}

export default Header;