import React from 'react';
import LinkWithPopup from '../linkwithpopup/linkwithpopup';
import Component from '../component/component';
import './content.css';

const Content = () => {
    const sub = <Component clicked={null} />;
    return (
        <div className="content">
            <div className="contentbutton">
                <LinkWithPopup content={sub}>
                    <button>Open</button>
                </LinkWithPopup>
            </div>
        </div>
    );
};

export default Content;
