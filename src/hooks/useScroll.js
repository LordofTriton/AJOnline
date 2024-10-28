import React, { useRef, useState, useEffect } from "react";

export const useScroll = (toggle, pageControl) => {
    const scrollRef = useRef(null); // Reference to the scrollable element
    const [lastScrollTop, setLastScrollTop] = useState(0); // State to track last scroll position

    // Define actions for scroll directions and boundaries
    const handleScrollUp = () => {
        console.log('Scrolling up!');
        // Call your function for scrolling up
    };

    const handleScrollDown = () => {
        console.log('Scrolling down!');
        // Call your function for scrolling down
    };

    const handleScrollEnd = () => {
        console.log('Reached the bottom');
        pageControl(toggle + 1);
        // Call your function when reaching the end
    };

    const handleScrollTop = () => {
        console.log('Reached the top');
        pageControl(toggle - 1);
        // Call your function when reaching the top
    };

    useEffect(() => {
        const element = scrollRef.current;

        const handleScroll = () => {
            const scrollTop = element.scrollTop;
            const maxScrollTop = element.scrollHeight - element.clientHeight;

            // Detect scroll direction
            if (scrollTop > lastScrollTop) {
                handleScrollDown();
            } else if (scrollTop < lastScrollTop) {
                handleScrollUp();
            }

            // Detect if scroll reaches the top or bottom boundaries
            if (scrollTop === 0) {
                handleScrollTop();
            } else if (scrollTop >= maxScrollTop) {
                handleScrollEnd();
            }

            // Update last scroll position
            setLastScrollTop(scrollTop);
        };

        element.addEventListener('scroll', handleScroll);

        // Cleanup event listener on unmount
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return {
        scrollRef
    }
}