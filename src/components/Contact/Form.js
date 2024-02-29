import React from "react";
import styles from "./Form.module.css";

const Form = () => {
  return (
    <div className={styles.container}>
    <div className={styles.form}>
      <div>
        <h2 className={styles.h2}>Get in touch</h2>
        <p className={styles.para}>
          Have a question or just want to say hi? We'd to hear from you
        </p>
      </div>

      <div>
        <form>
          <div clssName={styles.form}>
            <div className={styles.input}>
              <input type="text" placeholder="Your Name"></input>
              <input   type="text" placeholder="Your Email"></input>
            </div>
            <div>
              <input  type="text"></input>
            </div>

           
            <div>
              <textarea
                cols="40"
                rows="10"
                className={styles.textarea}
                aria-invalid="false"
                placeholder="Enter Your Message"
                name="m-message"
              ></textarea>
            </div>

          </div>
        </form>
        <div >
                <button className={styles.btn} type="submit">Send Your Message</button>
            </div>
      </div>
    </div>
    </div>
  );
};

export default Form;
