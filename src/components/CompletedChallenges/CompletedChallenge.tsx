import { useContext } from 'react';
import { ChallengesContext } from '../../context/ChallengeContext';
import styles from './CompletedChallenge.module.css';

export default function CompletedChallenges(){
    const { ChallengesCompleted } = useContext(ChallengesContext);

    return(
        <div className={styles.completedChallengesContainer}>
           <span>Desafios completos</span> 
            <span>{ ChallengesCompleted }</span>
        </div>
    );
}