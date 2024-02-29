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
//import Brand from './components/About/Brand';
//import TestimonialsCard from './components/About/TestimonialsCard';
//import TestimonialsCardDetails from './components/About/TestimonialsCardDetails';
//import About from './components/About/About';
//import DiscoverResearch from './components/About/DiscoverResearch';
//import TopInstructor from './components/About/TopInstructor';
//import CourseCardDetails from './components/Courses/CourseCardDetails';
//import GrayBackground from './components/GrayBackground/GrayBackground';
//import VideoCard from './components/Home/VideoCard';
//import Footer from './components/Footer/Footer';
//import Home from './components/Home/Home';
//import CourseCard from './components/Home/CourseCard';
//import CourseCardDetails from './components/Home/CourseCardDetails';


const App = () => {
  return (

    <div>
     {/* <Brand/> */}
    {/* <TestimonialsCardDetails/> */}
    {/* <TopInstructor/> */}
    {/* <DiscoverResearch/> */}
    {/* <About/> */}
    {/* <CourseCardDetails/> */}
     {/* <GrayBackground/> */}
    {/* <CourseCardDetails/> */}
      {/* <VideoCard/> */}
    {/* <Home/> */}
     {/* <Footer/> */}

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



