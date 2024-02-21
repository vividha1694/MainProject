import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { RiContactsLine } from "react-icons/ri";
import "./Head.css";

const Head = () => {
  return (
    <>
      <div className="head">
        <div className="link">
          <ul>
            
            <li > <MdOutlineEmail />panwarjanhavi@gmail.com</li>
            
            <li><CiLocationOn /> Panipat</li>
          </ul>
        </div>

        <div className="button">
          <RiContactsLine />
          <button className="btn">Login</button>
          <button className="btn2">Buy Courses</button>
        </div>
      </div>
    </>
  );
};

export default Head;
