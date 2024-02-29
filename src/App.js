import React from 'react';
import Header from './components/Header/Header';
//import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Background_img from './components/Home/Background_img';
import CategoryCardDetails from './components/Home/CategoryCardDetails';
import CourseCardDetails from './components/Home/CourseCardDetails';
//import CounterUpPage from './components/Home/Counter/CounterUpPage';
//import Course_find from './components/Header/Course_find/Course_find';
import CounterUpPage from './components/Home/Counter/CounterUpPage';
import Course_find from './components/Header/Course_find/Course_find';
import Playstore from './components/Home/PlayStore/Playstore';
import Contact from './components/Contact/Contact';
import Blog from './components/Blog/Blog';


const App = () => {
  return (

    <div>
      {/* <Header/>*/}
      <Background_img/>
      <CategoryCardDetails/>
      {/* <CounterUpPage/> */}
      <CourseCardDetails/>
      {/* <Course_find/> */}
      <Footer/>
      <Course_find/>

      <Playstore/>
      <Footer/>

      {/* <Contact/> */}
      <Blog/>
    </div>

  )
}

export default App