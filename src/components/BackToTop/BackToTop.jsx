import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import './backtotop.css';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled up to given distance
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top scroll coordinate to 0
    // Make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => {
            window.removeEventListener("scroll", toggleVisibility);
        };
    }, []);

    return (
        <>
            {isVisible && 
                <div 
                    onClick={scrollToTop}
                    className="back-to-top"
                >
                    <IoIosArrowUp className="back-to-top__icon" />
                    <span className="back-to-top__text">Top</span>
                </div>
            }
        </>
    );
};

export default BackToTop; 