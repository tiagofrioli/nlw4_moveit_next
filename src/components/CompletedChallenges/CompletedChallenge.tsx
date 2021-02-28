import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengeContext';
import styles from './CompletedChallenge.module.css';

export function CompletedChallenge(){

    const {challengesCompleted} = useContext(ChallengesContext)
    return (

        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}