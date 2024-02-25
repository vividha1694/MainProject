// CounterUpPage.js
import React from "react";
import ScrollTrigger from "react-scroll-trigger";
import { TbWorldSearch } from "react-icons/tb";
import { BsPcDisplayHorizontal } from "react-icons/bs";
import { LuUsers2 } from "react-icons/lu";
import { MdMenuBook } from "react-icons/md";
import styles from './CounterUpPage.module.css';

import CounterData from "./CounterData";

const CounterUpPage = () => {
  return (
    <ScrollTrigger>
      <div className={styles.container}>
        <CounterData icon={TbWorldSearch} end={5} text="Years of language Education experience" />
        <CounterData icon={BsPcDisplayHorizontal} end={9} text="Innovative Foreign Online Courses" />
        <CounterData icon={LuUsers2} end={5} text="Qualified Teachers and language experts" />
        <CounterData icon={MdMenuBook} end={11000} text="Learners Enrolled" />
      </div>
    </ScrollTrigger>
  );
};

export default CounterUpPage;
