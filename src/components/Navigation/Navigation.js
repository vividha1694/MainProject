import React from "react";
import { LuSearch } from "react-icons/lu";
import styles from "./Navigation.module.css";
const Navigation = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.nav}>
        <div className={styles.nav}>
          <ul>
            <li>
              <img
                src="https://janhavipanwar.com/wp-content/uploads/2023/12/cropped-Logo-Janhavi-Panwar.png"
                alt="logo"
              />
            </li>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <form>
            <div className={styles.form}>
              <input className={styles.input} type="text" name="Search" placeholder="Search"></input>
              <button className={styles.btn}><LuSearch className={styles.logo} /></button>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
