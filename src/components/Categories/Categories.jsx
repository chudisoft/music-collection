import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { useSelector } from 'react-redux';
import './Category.css';

function Categories() {
  const categorysAvailable = useSelector((state) => state.categories.categories);

  return (
    <div className='w-100 p-4'>
      <div className='categorys'>
        <h2>Music Categories</h2>
      </div>
      <div className='categorys'>
        {
          categorysAvailable.map((b) => 
            <Category 
              category={b}
              key={b.name}
            />
          )
        }
      </div>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
