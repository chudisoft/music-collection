import React from "react";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  Category.propTypes = {
    category: PropTypes.object.isRequired,
  };

  return (
    <div className="category">
      <a href={`/Music-List/${category.title}`}>
        <img src={`../Categories/${category.class}.jpg`} />
        <h4 className="category-name">
          <span>{category.title}</span>
        </h4>
      </a>
    </div>
  );
};

export default Category;
