"use client"

import styles from "./ArticleCard.module.css"
import Link from "next/link"

const ArticleCard = ({ title, description, date, imgSrc, imageAlt, id, data }) => {
    return(
        <div className={styles.articleCard}>
            <div className = {styles.articleCardImage}>  
                <img src={imgSrc} alt={imageAlt}></img>
                </div>
            <div className={styles.articleCardContent}>
            <h2>{(title)}</h2>
            <p>{(date)}</p>
            <p>{(description)}</p>
            <p><Link href={`article/${id}`}>Read More </Link></p>
            </div>    
        </div>
    )
}

export default ArticleCard;