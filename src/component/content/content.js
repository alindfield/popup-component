import React from 'react';
import LinkWithPopup from '../linkwithpopup/linkwithpopup';
import Component from '../component/component';
import './content.css';

const Content = () => {
    const sub = <Component clicked={null} />;
    //rgba(0,0,0,.7)
    return (
        <div className="content">
            <div className="contentbutton">
                <LinkWithPopup content={sub} borderColour="yellow" backdropColourX="black" backdropOpacityX="0.7">
                    <button>Open</button>
                </LinkWithPopup>
            </div>
        </div>
    );
};

export default Content;
