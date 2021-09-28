import React from 'react';
import List from './List';
import Paragraph from './Paragraph';

const Content = () => {
    return (
        <main>
            <ul>
                <List />
                <button>x</button>
            </ul>
            <div>
                <Paragraph text={"5 items left"}/>
                <Paragraph text={"All"}/>
                <Paragraph text={"Active"}/>
                <Paragraph text={"Complete"}/>
                <Paragraph text={"Clear Completed"}/> 
            </div>
        </main>
    )
}

export default Content
