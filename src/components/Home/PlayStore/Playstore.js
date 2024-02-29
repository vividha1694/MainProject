
import styles from './Playstore.module.css'

function Playstore() {
  return (
    <div className={styles.container}>
      <div>
        <img className={styles.img1} src="https://janhavipanwar.com/wp-content/themes/eduker/assets/img/app/app-shape-1.png" alt='img1'/>
        <img className={styles.img2} src="https://janhavipanwar.com/wp-content/themes/eduker/assets/img/app/app-shape-2.png" alt="img2"/>

      </div>
      <div className={styles.heading}>
        <h2>Start learning By Downloading Apps</h2>
      </div>
      <div className={styles.play}>
       
        <a href=''>
          <span >
            <img className={styles.logo} src="	https://janhavipanwar.com/wp-content/themes/eduker/assets/img/app/google-play.png" alt='playstore'/>
          </span>
          <h4>Google Play</h4>
        </a>
        </div>
        
        <div className={styles.play2}>
       
        <a href=''>
          <span >
            <img  className={styles.logo} src= "	https://janhavipanwar.com/wp-content/themes/eduker/assets/img/app/apple.png" alt='apple'/>
          </span>
          <h4>Apple Store</h4>
        </a>
        </div>
      </div>
   
  );
}

export default Playstore;
