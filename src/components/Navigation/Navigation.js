import React from "react";
import { LuSearch } from "react-icons/lu";
import  "./Navigation.css";
const App = () => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav">
          <img
            src="https://janhavipanwar.com/wp-content/uploads/2023/12/cropped-Logo-Janhavi-Panwar.png"
            alt="logo"
          />

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Courses</li>
            <li>Blog</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <form>
            <div className="form"><input type="text" name="Search" placeholder="Search"  ></input>
            <LuSearch className="logo"/>
            </div>
            
          </form>
        </div>
      </nav>
    </div>
  );
};

export default App;
