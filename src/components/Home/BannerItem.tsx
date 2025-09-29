import React from 'react'
import styles from './BannerItem.module.css'
interface BannerItemsProps{
    image:string,
    text:string
}
function BannerItem({image,text}:BannerItemsProps){
    return(
        <div className={styles.BannerContainer} >
            <span className={styles.image}>{image}</span>
            <span className={styles.text}>{text}</span>
        </div>

    )
}

export default BannerItem