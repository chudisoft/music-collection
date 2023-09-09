import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { useSelector } from 'react-redux';
import './Category.css';
import { Col, Row } from 'react-bootstrap';

function Categories() {
  const categorysAvailable = useSelector((state) => state.categories.categories);

  return (
    <div className=''>
      <div hidden className='categorys text-light bg-secondary p-2 m-0 mb-2'>
        <p>Select music category to view its music collections</p>
      </div>
      <Row className='categorys gap-2'>
        {
          categorysAvailable.map((b) => 
            <div
              className='bg-dark text-light p-2 shadow card col-sm-6 col-md-4'
              key={b.description}>
              <Category 
                category={b}
                key={b.name}
              />
            </div>
          )
        }
      </Row>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
