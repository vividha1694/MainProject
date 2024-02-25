import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Background_img from './components/Home/Background_img';
import CategoryCardDetails from './components/Home/CategoryCardDetails';
import CourseCardDetails from './components/Home/CourseCardDetails';



const App = () => {
  return (

    <div>
      <Header/>
      <Background_img/>
      <CategoryCardDetails/>
      <CourseCardDetails/>
      <Footer/>
    </div>

  )
}

export default App