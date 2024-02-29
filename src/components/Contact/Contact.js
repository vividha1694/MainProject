import React from 'react'
import styles from "./Contact.module.css"
import Form from './Form'
import Card from './Card'
import Contact_details from "./Contact_details"
const Contact = () => {
  return (
    <div>
       <>
    <div className={styles.div}>
      <Form/>
      <Contact_details/>
    </div>

    <div>
      <Card/>

    </div>

    <div className={styles.link}>
       <ul className={styles.list}>
      <li>
        <a href=""><span>Privacy Policy</span></a>
      </li>
      <li>
        <a href=""><span>Terms and Conditions</span></a>
      </li>
      <li>
        <a href=""><span>Refund Policy</span></a>
      </li>
    </ul>
    </div>
    </>
    </div>
  )
}

export default Contact
