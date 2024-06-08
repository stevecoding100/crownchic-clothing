import React from "react";
import CategoryItem from "../category-item/CategoryItem";
import "./mainpage.styles.scss";

const MainPage = ({ categories }) => {
    return (
        <div className="categories-container">
            {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))}
        </div>
    );
};

export default MainPage;
