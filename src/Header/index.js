import React from "react"
import Image from 'next/image'
import imageHeader from '../assets/image-header.jpg'
import styles from './styles.module.css'


const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.headerImage}>
                <Image
                width={280}
                height={218}
                src={imageHeader}
                alt='Imagen del header' />
            </div>
        </div>
    )
}
export default Header