import React from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer'
import AddList from './AddList';

const App = () => {
    return (
        <div>
            <Header />
            <AddList />
            <Content />
            <Footer />
        </div>
    )
}

export default App
