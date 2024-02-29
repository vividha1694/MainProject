import React from 'react'
import { PiBookOpenText } from "react-icons/pi";
import { LuUsers2 } from "react-icons/lu";
import styles from "./Card.module.css"
import Card_section from './Card_section';
const Card = () => {

    const cardData=[{
        icon:<PiBookOpenText/>,
        heading:"Knowledge Base",
        para:"My good sir plastered cuppa barney cobblers mush argy bargy ruddy.",
        button:"Visit Documentation",
        link:"https://wp.hixstudio.net/eduker/about/"
    },
{
       icon:<LuUsers2/>,
        heading:"Online Support",
        para:"My good sir plastered cuppa barney cobblers mush argy bargy ruddy.",
        button:"Sent A Ticket",
        link:"https://wp.hixstudio.net/eduker/about/"
}];
  return (
    
        <div className={styles.flex}>
        {cardData.map((item)=>(
            < Card_section
            key={item.index}
            icon={item.icon}
            heading={item.heading}
            para={item.para}
            link={item.link}
            
            button={item.button}/>))}|
            </div>
    
  )
}

export default Card