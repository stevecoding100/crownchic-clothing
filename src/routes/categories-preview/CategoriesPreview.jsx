import React, { useContext } from "react";
import { CategoriesContext } from "../../context/categories.context";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);
    return (
        <>
            {Object.keys(categoriesMap).map((key) => {
                const products = categoriesMap[key];
                return (
                    <CategoryPreview
                        key={key}
                        title={key}
                        products={products}
                    />
                );
            })}
        </>
    );
};
export default CategoriesPreview;
