export const BRAND_NAME = "luxury FashionTV cosmetics";

export const COLORS = {
  PRIMARY: "#FFC0CB", // Pink
  SECONDARY: "#FFFFFF", // White
};

export const CONFIG = {
  SITE_TITLE: ${BRAND_NAME} - Elevate Your Beauty,
  TAGLINE: "Where luxury meets beauty and sophistication.",
  SOCIAL_MEDIA: {
    INSTAGRAM: "https://www.instagram.com/luxuryfashiontvcosmetics",
    FACEBOOK: "https://www.facebook.com/luxuryfashiontvcosmetics",
    TWITTER: "https://twitter.com/luxuryfashiontvcosmetics",
  },
};

/
 * Interface representing a product in the luxury FashionTV cosmetics line.
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string; // e.g., "lipstick", "foundation", "skincare"
  isFeatured: boolean; // Indicates if the product is featured on the homepage
}

/
 * Interface representing the configuration for luxury FashionTV cosmetics application.
 */
export interface AppConfig {
  brandName: string;
  colors: typeof COLORS;
  siteTitle: string;
  tagline: string;
  socialMedia: {
    instagram: string;
    facebook: string;
    twitter: string;
  };
}

/
 * Business logic function to get featured products.
 * @param products - Array of products available in the cosmetics line.
 * @returns Array of featured products for display.
 */
export const getFeaturedProducts = (products: Product[]): Product[] => {
  return products.filter(product => product.isFeatured);
};

export default {
  BRAND_NAME,
  COLORS,
  CONFIG,
};