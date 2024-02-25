// Counter.js
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import styles from './CounterUpPage.module.css';

const CounterData = ({ icon: Icon, end, text }) => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className={styles.border}>
        <h1 className={styles.counter}>
          <Icon />
          &nbsp;
          {counterOn && <CountUp start={0} end={end} duration={2} delay={0} />}+
        </h1>
        <p>{text}</p>
      </div>
    </ScrollTrigger>
  );
};

export default CounterData;
