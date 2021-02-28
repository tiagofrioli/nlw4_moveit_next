import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengeContext';
import styles from './Profile.module.css';

export function Profile(){

    const {level} =useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/tiagofrioli.png" alt="foto" />
            <div>
                <strong>Tiago Frioli</strong>
                <p>
                    <img src="icons/level.svg" alt="icone" />    
                    Level {level}
                </p>
            </div>
        </div>
    )
}