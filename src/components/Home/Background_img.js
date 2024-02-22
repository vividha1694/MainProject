import React, { useState, useEffect } from 'react';
import styles from "./Background_img.module.css";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import image1 from "../../assets/DSC_3367-scaled-e1706228773535.jpeg";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import image2 from "../../assets/Janhavii-Award.jpeg";

const Background_img = () => {
  
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [intervalId, setIntervalId] = useState(null);
  
    const imagesWithText = [
      {
        image: image1,
        discount: 'GET 20% OFF ON FAST ENROLL',
        para: 'Learn with the first ever accent trainer in India',
        check1: 'We offer comprehensive Accents, IELTS, English Language classes and more.',
      },
      {
        image: image2,
        discount: 'GET 30% OFF ON FAST ENROLL',
        para: "Get the best of the Wonder Girl of India's skills",
        check1: 'Live and recorded courses.',
        check2: 'Skilled and experienced coaches.',
      }
    ];
  
    useEffect(() => {
      const id = setInterval(() => {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesWithText.length);
      }, 3000); // Change image every 3 seconds
      setIntervalId(id);
  
      return () => clearInterval(id);
    }, []);
  
    const handleArrowClick = (direction) => {
      clearInterval(intervalId); // Stop the interval
      if (direction === 'prev') {
        setCurrentImageIndex(prevIndex => (prevIndex - 1 + imagesWithText.length) % imagesWithText.length);
      } else {
        setCurrentImageIndex(prevIndex => (prevIndex + 1) % imagesWithText.length);
      }
    };
  
    return (
      <>
        <div className={styles.background} style={{ backgroundImage: `linear-gradient(
        0deg,
        #0c0c0d 0.03%,
        rgba(12, 12, 13, 0) 72.59%,
        rgba(12, 12, 13, 0.2) 99.96%
      ), url(${imagesWithText[currentImageIndex].image})` }}>
           <button className={styles.arrow_left} onClick={() => handleArrowClick('prev')}><IoArrowBackCircleOutline className={styles.arrow_logo}/></button>
          <div className={styles.position}>
         
            <p className={styles.discount}>
              <BsFillPatchCheckFill /> {imagesWithText[currentImageIndex].discount}
            </p>
            <p className={styles.para}>{imagesWithText[currentImageIndex].para}</p>
            <div className={styles.button}>
              <form>
                <FiSearch className={styles.logo}/>
                <input  type="text" name="Course Search" placeholder="Course title here"></input>
                <button className={styles.btn}>Search</button>
              </form>
            </div>
            {imagesWithText[currentImageIndex].check1 && <p className={styles.check}> <FaCheckCircle className={styles.check_logo}/> {imagesWithText[currentImageIndex].check1}</p>}
            {imagesWithText[currentImageIndex].check2 && <p className={styles.check}> <FaCheckCircle className={styles.check_logo}/> {imagesWithText[currentImageIndex].check2}</p>}
            
          
        
        
          </div>
          <button className={styles.arrow_right} onClick={() => handleArrowClick('next')}><IoArrowForwardCircleOutline  className={styles.arrow_logo}/></button>
        </div>
        
      </>
    );
  }
  

export default Background_img