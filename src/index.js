import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Footer from './components/Footer';
// import Post from './pages/Post';

function Main(){
    return(
        <BrowserRouter>
          <Nav/>
            <Routes>

                <Route path='/' Component={Home}/>

                <Route path='/about-us' Component={About}/>

                {/* <Route path='/post' Component={Post}/> */}

                <Route path='/contact-us' Component={Contact}/>

            </Routes>

            <Footer/>
        </BrowserRouter>
    
    )
}

export default Main;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Main/>
);


