import { css } from 'styled-components';

/
 * Utility functions for luxury FashionTV cosmetics application
 * This file includes functions to manage class names and formatters
 * tailored specifically for our high-end fashion cosmetics brand.
 */

export type Color = 'pink' | 'white';

/
 * Interface representing the style properties of luxury FashionTV cosmetics
 */
export interface StyleProperties {
    primaryColor: Color;
    secondaryColor: Color;
}

/
 * The luxury FashionTV cosmetics brand style properties
 */
export const luxuryFashionTVCosmeticsStyles: StyleProperties = {
    primaryColor: 'pink',
    secondaryColor: 'white',
};

/
 * Function to combine class names for styled components.
 * This is useful for creating elegant and luxurious UI elements.
 * 
 * @param classes - list of class names to combine
 * @returns A single string of combined class names
 */
export const cn = (...classes: string[]): string => {
    return classes.filter(Boolean).join(' ');
};

/
 * Formatter for currency values, specifically tailored for luxury FashionTV cosmetics.
 * This will handle the display of prices in a polished and sophisticated manner.
 * 
 * @param price - The numeric price value to format
 * @returns A formatted currency string
 */
export const formatCurrency = (price: number): string => {
    return €${price.toFixed(2)};
};

/
 * Formatter for product descriptions, ensuring they reflect the luxury nature of our brand.
 * 
 * @param description - The description to format
 * @returns A formatted description string
 */
export const formatDescription = (description: string): string => {
    return description.charAt(0).toUpperCase() + description.slice(1);
};

/
 * Styles for luxury FashionTV cosmetics' buttons, ensuring they align with the brand's luxury image.
 * 
 * @returns Styled components for buttons
 */
export const buttonStyles = css
    background-color: ${luxuryFashionTVCosmeticsStyles.primaryColor};
    color: ${luxuryFashionTVCosmeticsStyles.secondaryColor};
    border: none;
    padding: 10px 20px;
    font-family: 'Garamond', serif;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${luxuryFashionTVCosmeticsStyles.secondaryColor};
        color: ${luxuryFashionTVCosmeticsStyles.primaryColor};
    }
;

/
 * Exporting the utility functions and styles for use in luxury FashionTV cosmetics application
 */
export { cn, formatCurrency, formatDescription, buttonStyles };