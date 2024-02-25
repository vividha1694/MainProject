import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Background_img from './components/Home/Background_img';
<<<<<<< HEAD
import CategoryCardDetails from './components/Home/CategoryCardDetails';
import CourseCardDetails from './components/Home/CourseCardDetails';

=======
import CounterUpPage from './components/Home/Counter/CounterUpPage';
import Course_find from './components/Header/Course_find/Course_find';
>>>>>>> 53be2a57016e4db29921da59bb4d89e0a1f951dc


const App = () => {
  return (

    <div>
      <Header/>
      <Background_img/>
<<<<<<< HEAD
      <CategoryCardDetails/>
      <CourseCardDetails/>
      <Footer/>
=======
      <Home/>
      <CounterUpPage/>
      <Course_find/>
      <Footer/>
      

     

      
>>>>>>> 53be2a57016e4db29921da59bb4d89e0a1f951dc
    </div>

  )
}

export default App