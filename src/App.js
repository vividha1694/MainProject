import React from 'react';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer';
import Background_img from './components/Home/Background_img';
import CounterUpPage from './components/Home/Counter/CounterUpPage';
import Course_find from './components/Header/Course_find/Course_find';


const App = () => {
  return (

    <div>
      <Header/>
      <Background_img/>
      <Home/>
      <CounterUpPage/>
      <Course_find/>
      <Footer/>
      

     

      
    </div>

  )
}

export default App