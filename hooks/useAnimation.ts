import { useEffect, useState } from 'react';

/
 * Custom hook for handling animations in the luxury FashionTV cosmetics website.
 * This hook provides smooth entry animations for components, enhancing the user experience
 * and reflecting the luxury brand's elegance.
 * 
 * @param {boolean} isVisible - Determines if the element is visible or not
 * @returns {object} - Animation state and effects for the component
 */
export interface AnimationProps {
    fadeIn: boolean;
    slideIn: boolean;
}

export const useAnimation = (isVisible: boolean): AnimationProps => {
    const [fadeIn, setFadeIn] = useState(false);
    const [slideIn, setSlideIn] = useState(false);

    useEffect(() => {
        if (isVisible) {
            // Trigger fade in animation
            setFadeIn(true);
            // Trigger slide in animation after fade in
            const slideTimeout = setTimeout(() => {
                setSlideIn(true);
            }, 300); // Delay for fade in

            return () => clearTimeout(slideTimeout);
        } else {
            // Reset animations when not visible
            setFadeIn(false);
            setSlideIn(false);
        }
    }, [isVisible]);

    return { fadeIn, slideIn };
};

/
 * Function to apply luxury-themed CSS classes for animations.
 * @param {boolean} fadeIn - Indicates if the fade-in animation should be applied
 * @param {boolean} slideIn - Indicates if the slide-in animation should be applied
 * @returns {string} - The combined CSS class names for animations
 */
export const getAnimationClasses = (fadeIn: boolean, slideIn: boolean): string => {
    const baseClasses = 'transition';
    const fadeClasses = fadeIn ? 'fade-in' : 'fade-out';
    const slideClasses = slideIn ? 'slide-in' : 'slide-out';

    return ${baseClasses} ${fadeClasses} ${slideClasses};
}; 

/
 * Example usage of the useAnimation hook in a component.
 * This demonstrates how to integrate animations for luxury FashionTV cosmetics.
 * 
 * @returns {JSX.Element} - The animated component
 */
const AnimatedComponent = (): JSX.Element => {
    const [isVisible, setIsVisible] = useState(false);
    const { fadeIn, slideIn } = useAnimation(isVisible);

    // Example to toggle visibility
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <button onClick={toggleVisibility}>Toggle Animation</button>
            <div className={getAnimationClasses(fadeIn, slideIn)}>
                {/ Content for luxury FashionTV cosmetics goes here /}
                <h1 style={{ color: 'pink' }}>Welcome to luxury FashionTV cosmetics</h1>
                <p style={{ color: 'white' }}>Experience the elegance of high-end beauty products.</p>
            </div>
        </div>
    );
};

export default AnimatedComponent;