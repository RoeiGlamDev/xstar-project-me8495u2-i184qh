export interface Product {
    id: string; // Unique identifier for the product
    name: string; // Name of the product
    description: string; // Description of the product
    price: number; // Price of the product
    category: string; // Category of the product (e.g., skincare, makeup)
    imageUrl: string; // URL to the product image
    inStock: boolean; // Availability status of the product
}

/
 * Interface representing a collection of products for luxury FashionTV cosmetics.
 */
export interface ProductCollection {
    products: Product[]; // List of products available in the collection
    collectionName: string; // Name of the product collection
}

/
 * Interface representing a customer for luxury FashionTV cosmetics.
 */
export interface Customer {
    id: string; // Unique identifier for the customer
    firstName: string; // Customer's first name
    lastName: string; // Customer's last name
    email: string; // Customer's email address
    phoneNumber?: string; // Optional phone number for the customer
}

/
 * Interface representing an order for luxury FashionTV cosmetics.
 */
export interface Order {
    id: string; // Unique identifier for the order
    customer: Customer; // Customer who placed the order
    products: Product[]; // List of products in the order
    orderDate: Date; // Date when the order was placed
    totalAmount: number; // Total amount for the order
    status: 'pending' | 'shipped' | 'delivered' | 'canceled'; // Current status of the order
}

/
 * Interface for a luxury FashionTV cosmetics promotional event.
 */
export interface Promotion {
    id: string; // Unique identifier for the promotion
    title: string; // Title of the promotion
    description: string; // Description of what the promotion entails
    startDate: Date; // Start date of the promotion
    endDate: Date; // End date of the promotion
    discountPercentage?: number; // Optional discount percentage for the promotion
}

/
 * Interface representing a luxury FashionTV cosmetics brand profile.
 */
export interface BrandProfile {
    name: string; // Brand name
    tagline: string; // Tagline for the brand
    missionStatement: string; // Mission statement of luxury FashionTV cosmetics
    establishedYear: number; // Year the brand was established
}

/
 * Example brand profile for luxury FashionTV cosmetics.
 */
export const luxuryFashionTVCosmeticsProfile: BrandProfile = {
    name: "luxury FashionTV cosmetics",
    tagline: "Elevate Your Beauty",
    missionStatement: "To provide high-end cosmetics that enhance natural beauty and empower individuals.",
    establishedYear: 2023,
};