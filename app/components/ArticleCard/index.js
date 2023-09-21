"use client"

import styles from "./ArticleCard.module.css"

const ArticleCard = ({ title, description, date, imgSrc, imageAlt }) => {
    return(
        <div className={styles.articleCard}>
            <div className = {styles.articleCardImage}>  
                <img src={imgSrc} alt={imageAlt}></img>
                </div>
            <div className={styles.articleCardContent}>
            <h2>{(title)}</h2>
            <p>{(date)}</p>
            <p>{(description)}</p>
            </div>    
        </div>
    )
}

export default ArticleCard;