import { createContext, useState, useEffect, Children } from "react";
import PRODUCTS from "../shop-data.json";

// Create a Context for the user
export const ProductsContext = createContext({
    products: [],
});

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState(PRODUCTS);
    const value = { products };
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    );
};
