import React from 'react'
import Header from '../Header'
import QuestionsContainer from '../QuestionsContainer'
import styles from './styles.module.css'


const ContainerDesktop = () => {
    return(
        <div className={styles.containerDesktop}>
            <Header />
            <QuestionsContainer />
        </div>
    )
}

export default ContainerDesktop