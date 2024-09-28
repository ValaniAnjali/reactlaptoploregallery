import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Home';
import AboutUs from './AboutUs';
import Laptops from './Laptops';
import ContactUs from './ContactUs';
import Feedback from './Feedback';
import Purchase from './Purchase';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
     

    <div className='App'>
         <Routes>
           <Route path="/" element={<><Header/><Home /><Footer/></>} />
           <Route path="/aboutUs" element={<><Header/><AboutUs /><Footer/></>} />
           <Route path="/laptops" element={<><Header/><Laptops /><Footer/></>} />
           <Route path="/contactus" element={<><Header/><ContactUs /><Footer/></>} />
           <Route path="/feedback" element={<><Header/><Feedback /><Footer/></>} />
           <Route path="/purchase" element={<><Header/><Purchase /><Footer/></>} />


           
         </Routes>
    
    </div>
    </>
  );
}

export default App;
