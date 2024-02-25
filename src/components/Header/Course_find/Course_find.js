import React from 'react'
import styles from "./Course_find.module.css"
import { BsLightningChargeFill } from "react-icons/bs";

const Course_find = () => {
  return (
    <div className={styles.container}>
      <div className={styles.border}>
        <BsLightningChargeFill className={`${styles.icon} `}/>

      </div>
      <div className={styles.para}>
        <p>Let Us Help</p>
        <h4>Finding Your Right Courses</h4>
      </div>
      <div className={styles.link}>
        <a href=''>Get Started</a>
      </div>
    </div> 
  )
}

export default Course_find