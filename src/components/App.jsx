import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './styles.scss';

const App = () => {
    return (
        <div>
        <img className="background"src="/images/bg-desktop-light.jpg" alt="background-light"/> 
            <div className="container" >
            <Header /> 
            <Content />
            <Footer />
            </div>
        </div>
    )
}

export default App
