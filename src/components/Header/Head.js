import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import styles from "./Head.module.css";

const Head = () => {
  return (
    <>
      <div className={styles.head}>
        <div className={styles.link}>
          <ul>
            
            <li > <MdOutlineEmail />panwarjanhavi@gmail.com</li>
            
            <li><CiLocationOn /> Panipat</li>
          </ul>
        </div>

        <div className={styles.button}>
          <RiContactsLine />
          <button className={styles.btn}>Login</button>
          <button className={styles.btn2}>Buy Courses</button>
        </div>
      </div>
    </>
  );
};

export default Head;
