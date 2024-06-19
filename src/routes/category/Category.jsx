import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../context/categories.context";

import { CategoryContainer, Title } from "./category.styles";

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);

    return (
        <>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products &&
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
            </CategoryContainer>
        </>
    );
};

export default Category;
