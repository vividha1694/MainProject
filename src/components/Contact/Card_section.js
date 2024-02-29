import styles from "./Card_section.module.css"

const Card_section = ({icon,heading,para,button,link}) => {
  return (
    <>
    <div>
    <div className={styles.content}> 
        <div className={styles.icon}>
            <span>{icon}</span>
        </div>
        <div className={styles.title}>
            <h2>{heading}</h2>
            <p>{para}</p>

        </div>
        <div className={styles.btn}>
        <a className={styles.link} href={link}>{button}</a>
        </div>
        
            
        
    </div>
    </div>
    </>
    
  )
}

export default Card_section