// import React, { useContext } from "react";
import { useSelector } from "react-redux";
// import { CategoriesContext } from "../../context/categories.context";
import { selectCategoriesMap } from "../../store/categories/category.selector";
import CategoryPreview from "../../components/category-preview/CategoryPreview";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);

    // const { categoriesMap } = useContext(CategoriesContext);
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
