
import React from 'react'
import styles from './Footer.module.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
//import {Link} from 'react-router-dom';

const Footer = () => {
  return (
    <>
    <div>
    <div className={`${styles.container} ${styles.flex}`}>
    {/* first div */}
    <div className={styles.basis}>
    <div>
    <a href=""><img className={styles.logo} src="https://janhavipanwar.com/wp-content/uploads/2023/12/cropped-Logo-Janhavi-Panwar.png" alt="" /></a>
    </div>

      <div>
      <p className={styles.para}>The courses will be lead by Janhavi Panwar,widely recognized as Wonder Girl of India. Janhavi hold a certification as an IDP IELTS trainer.</p>
      </div>
      
      <div>
      <h4 className={styles.heading}>Follow Us</h4>
      <ul className='list icon'>
        <li><a href=""><FaFacebookF/></a></li>
        <li><a href=""><FaTwitter/></a></li>
        <li><a href=""><FaLinkedinIn/></a></li>
      </ul>
      </div>
    </div>

    {/* second div */}
    <div className={styles.basis}>
      <h3 className={styles.heading}>Explore</h3>
      <div>
        <ul className={styles.list}>
          <li><a href="">Courses</a></li>
          <li><a href="">Blog</a></li>
          <li><a href="">About</a></li>
          <li><a href="">Contact</a></li>
        </ul>
      </div>
    </div>

    {/* third div */}
    <div className={styles.basis}>
    <h3 className={styles.heading}>Links</h3>
      <div>
        <ul className={styles.list}>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Refund Policy</a></li>
          <li><a href="">Cancellation Policy</a></li>
          <li><a href="">Terms and Conditions</a></li>
        </ul>
      </div>


    {/* fourth div */}
    <div className={styles.basis}>
    <h3>Signup for our Newsletter</h3>
    <div>
      <p className={styles.para}>Recieve weekly newsletter with educational materials,popular books and much more!</p>

      <form action="">
      <div className={styles.footer}>
      <input className={styles.input} type="text" placeholder='Email'></input>
      <button className={styles.button}>Subscribe</button>
      </div>
       </form>
     </div>
     </div>


      {/* last div */}
    <div className={styles.last_div}>
      <p  className={styles.para} style={{textAlign:'center'}}>Copyright © 2024 JanhaviPanwar. All Rights Reserved</p>
    </div>
    </div>
    </div>
    </div>
  
    </>
  )
}


 export default Footer;

