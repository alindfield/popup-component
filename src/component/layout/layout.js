import React from 'react';
import Content from '../content/content';
import './layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <div className="layoutheader">
                <h1>The header</h1>
            </div>
            <div className="layoutcontent">
                <Content />
            </div>
            <div className="layoutoverflow">
            </div>  
        </div>
    );
};

export default Layout;