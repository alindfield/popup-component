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


    style = square === null ? {} : {left: (square.left + square.width + 15), top: (square.top - 7), "--borderColour": props.borderColour ? props.borderColour : "white"};

    const children = cloneElement(props.children, {onClick: openPopup, ref: ref});
    const content = cloneElement(props.content, {clicked: clicked});

    let popup = null;

    const backdrop = {backgroundColor: props.backdropColour !== undefined ? props.backdropColour : "transparent", opacity: props.backdropOpacity ? props.backdropOpacity : 1};

    if (open) {
        popup = (
            <div>
                <div className="linkwithpopupbackdrop" onClick={props.backclicked} style={backdrop}/>
                <div onClick={props.clicked} className="linkwithpopuppopup" style={style}>
                    {content}
                </div>
            </div>   
        );
    };

    window.onscroll = () => {
        if (!isLoading) {
            setLoaded(false);
        };        
    }; 

    window.onresize = () => {
        if (!isLoading) {
            setLoaded(false);
        };    
    };

    return (
        <div>
            {popup}
            {children}
        </div>
    );
};

export default LinkWithPopup;