import styles from './Profile.module.css';

export function Profile(){

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/tiagofrioli.png" alt="foto" />
            <div>
                <strong>Tiago Frioli</strong>
                <p>
                    <img src="icons/level.svg" alt="icone" />    
                    Level 1
                </p>
            </div>
        </div>
    )
}