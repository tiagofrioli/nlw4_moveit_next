import { useContext } from 'react';
import { ChallengeContext } from '../../context/ChallengeContext';
import styles from './CompletedChallenge.module.css';

export function CompletedChallenge(){

    const {challengesCompleted} = useContext(ChallengeContext)
    return (

        <div className={styles.completedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}