import React from 'react'
import {BiCaretDown} from 'react-icons/bi'
import {BiCaretUp} from 'react-icons/bi'
import styles from './styles.module.css'

const Questions = ({tittle, content}) => {
    const [isActive, setIsActive] = React.useState(false);
    return(
        <div className={styles.questions}>
            {isActive ? 
                <h3
                className={styles.bold}
                onClick={() => setIsActive(!isActive)}>
                {tittle}
                <BiCaretUp
                className={styles.questionsArrow} />
                </h3> :
                <h3
                className={styles.light}
                onClick={() => setIsActive(!isActive)}>
                {tittle}
                <BiCaretDown
                className={styles.questionsArrow} />
                </h3>
            }
            {isActive && <p className={styles.accordionContent}>{content}</p>}
        </div>
    )
}

export default Questions