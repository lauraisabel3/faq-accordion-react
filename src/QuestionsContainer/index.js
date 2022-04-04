import React from 'react'
import styles from './syles.module.css'
import Questions from '../Questions'




const QuestionsContainer = () => {

    const accordionData = [
        {
            tittle: 'How many team members can I invite?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            tittle: 'What is the maximum file upload size?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            tittle: 'How do I reset my password?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            tittle: 'Can I cancel my subscription?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
        {
            tittle: 'Do you provide additional support?',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
    
    return(
        <div className={styles.questionsContainer}>
            <h1>FAQ</h1>
            <section>
                {accordionData.map(({tittle, content}) => (
                    <Questions
                    tittle={tittle}
                    content={content}
                    key={tittle}/>
                ))}
            </section>
        </div>
    )
}

export default QuestionsContainer