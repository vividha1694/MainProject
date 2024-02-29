import React from 'react'
import { HiOutlineUser } from "react-icons/hi2";
import { FaRegCalendarCheck } from "react-icons/fa";
import { LuMessagesSquare } from "react-icons/lu";
import styles from "./Header.module.css"


const Header = () => {
  return (
    <div className={styles.meta}>
                <span>
                    <a href='https://janhavipanwar.com/author/janhavi/'>
                        <HiOutlineUser className={styles.icon}/>
                        <h4>Jnhv</h4>
                    </a>
                </span>
                <span>
                    <a href='https://janhavipanwar.com/author/janhavi/'>
                        <FaRegCalendarCheck className={styles.icon}/>
                        <h4>December 17, 2023</h4>
                    </a>
                </span>

                <span>
                    <a href='https://janhavipanwar.com/author/janhavi/'>
                        <LuMessagesSquare className={styles.icon}/>
                        <h4>December 17, 2023</h4>
                    </a>
                </span>


            </div>
  )
}

export default Header