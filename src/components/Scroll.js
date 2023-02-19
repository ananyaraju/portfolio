import React, { useState, useEffect } from 'react'
import { FaArrowUp, FaArrowCircleDown } from "react-icons/fa"
import './Scroll.css'

const Scroll = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goToTop = () => {
        window.scrollTo({top:0, left:0, behavior:"smooth"})
    }

    const listenToScroll = () => {
        let h = 200;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        if (winScroll > h) {
            setIsVisible(true);
        }
        else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll",listenToScroll);
    }, []);

    return (
        <div className="scroll-body">
            { isVisible ? (
                <div className="top-btn" onClick={goToTop}>
                    <FaArrowUp className="top-btn-icon"/>
                </div>
            ) : (
                <div className="scroll-btn">
                    SCROLL
                    <FaArrowCircleDown className="down-btn-icon"/>
                </div>
            )}
        </div>
    )

}

export default Scroll;
