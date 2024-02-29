import React from 'react'
import styles from './Blog_section.module.css'
import Header from './Header'


const Blog_Section = ({imageUrl,link,linkheading,para}) => {
  return (
    <article className={styles.box_shadow}>
       
        <div lassName={styles.img}>
            <a href={link}> <img   src={imageUrl} /> </a>
        </div>
        <Header/>
        <div className={styles.content}>
            
            <h3 className={styles.title}>
                <a href={link}>{linkheading}</a>
            </h3>

            <div className={styles.text}>
                <p>{para}</p>
            </div>

            <div className={styles.button}>
                <a href={link} className={styles.btn}>Read More</a>
            </div>
    
</div>
    </article>
    
  )
}

export default Blog_Section
