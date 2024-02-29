import React from 'react'
import styles from "./Contact_details.module.css"
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io";
const Contact_details = () => {
  return (
    <div className={styles.content}>
        <div className={styles.context}>
            <div className={styles.shadow}>
            <div className={styles.contactinfo}>
               <FaLocationDot className={styles.icon}></FaLocationDot>
               <div>
               <h4>Head Office</h4>
               <p>Panipat, Haryana 132103</p>
               </div>
            </div>
            <div className={styles.contactinfo}>
               <MdOutlineMail className={styles.icon}></MdOutlineMail>
               <div>
               <h4>Email us directly</h4>
               <p>panwarjanhavi@gmail.com</p>
               </div>
            </div>
            <div className={styles.contactinfo}>
               <MdOutlinePhoneEnabled className={styles.icon}></MdOutlinePhoneEnabled>
               <div>
               <h4>Phone</h4>
               <p>+91 81680 84765</p>
               </div>
            </div>
            <div className={styles.contactinfo}>
            <div>
               <h4>Follow Us</h4>
               <ul className={styles.list}>
                <li>
                <a target="_blank" rel="noopener" href="https://facebook.com/" class="elementor-repeater-item-9860ff4">
               <IoLogoFacebook/>
                </a>
                </li>
                <li>
                <a target="_blank" rel="noopener" href="https://facebook.com/" class="elementor-repeater-item-9860ff4">
               <IoLogoLinkedin/>
                </a>
                </li>
                <li>
                <a target="_blank" rel="noopener" href="https://facebook.com/" class="elementor-repeater-item-9860ff4">
               <IoLogoTwitter/>
                </a>
                </li>
               </ul>

            </div>
            </div>
            </div>


        </div>

    </div>
  )
}

export default Contact_details