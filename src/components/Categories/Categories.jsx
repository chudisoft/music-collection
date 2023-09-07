import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { useSelector } from 'react-redux';
import './Category.css';
import { Col, Row } from 'react-bootstrap';

function Categories() {
  const categorysAvailable = useSelector((state) => state.categories.categories);

  return (
    <div className='w-100 p-4'>
      <div className='categorys'>
        <h2>Music Categories</h2>
      </div>
      <Row className='categorys'>
        {
          categorysAvailable.map((b) => 
            <Col sm={'6'}>
              <Category 
                category={b}
                key={b.name}
              />
            </Col>
          )
        }
      </Row>
    </div>
  )
}

Categories.propTypes = {}

export default Categories
