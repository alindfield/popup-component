import React, {cloneElement, useState, useRef, useEffect} from 'react';
import './linkwithpopup.css';

const LinkWithPopup = props => {

    const [ open , setOpen ] = useState(false);
    const [ square, setSquare ] = useState(null);
    const [ isLoaded, setLoaded ] = useState(false);
    const [ isLoading , setLoading ] = useState(false);
    
    const ref = useRef();
   
    const openPopup = () => {
        setOpen(true);
    };

    const clicked = () => {
        setOpen(false);
    };

    let style = {};

    useEffect(() => {
        if (!isLoaded && !isLoading) {
            setLoading(true);
            setSquare(ref.current ? ref.current.getBoundingClientRect() : null);
            setLoaded(true); 
        }
    } , [isLoaded, isLoading]);

    useEffect(() => {
        if(isLoaded && isLoading) {
            setLoading(false);
        }
    } , [isLoaded, isLoading]);

    
    style = square === null ? {} : {left: (square.x + square.width + 15), top: (square.y - 7)};

    const children = cloneElement(props.children, {onClick: openPopup, ref: ref});
    const content = cloneElement(props.content, {clicked: clicked});

    let popup = null;

    if (open) {
        popup = (
            <div>
                <div className="linkwithpopupbackdrop" onClick={props.backclicked} />
                <div onClick={props.clicked} className="linkwithpopuppopup" style={style}>
                    {content}
                </div>
            </div>   
        );
    };

    window.onscroll = function () {
        if (!isLoading) {
            setLoaded(false);
        };        
    } 

    return (
        <div>
            {popup}
            {children}
        </div>
    );
};

export default LinkWithPopup;