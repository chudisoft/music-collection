import React from "react";
import PropTypes from "prop-types";

const Category = ({ category }) => {
  Category.propTypes = {
    category: PropTypes.object.isRequired,
  };

  return (
    <div className="category">
      <a href={`/Music/${category.title}`}>
        <img src={`../Categories/${category.img}.jpg`} />
        <h4 className="text-center">
          <span className="text-light">{category.title}</span>
        </h4>
      </a>
    </div>
  );
};

export default Category;
