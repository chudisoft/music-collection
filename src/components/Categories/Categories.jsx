import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Category from './Category';
import { useSelector } from 'react-redux';
import './Category.css';
import { Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSearch, faToolbox } from '@fortawesome/fontawesome-free-solid';

function Categories() {
  const categorysAvailable = useSelector((state) => state.categories.categories);
  const [ filteredCategory, setFilteredCategory ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');
  const [ showSearch, setShowSearch ] = useState(true);

  useEffect(() => {
    // Filter objects by keys matching searchValue
    if(searchValue === '') {
      setFilteredCategory(categorysAvailable);
    } else {
      // Filter the original data object by keys (case-insensitive)
      const filteredData = categorysAvailable.filter((key) => 
        key.title.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCategory(filteredData);
    }
  }, [searchValue]);


  return (
    <div className=''>
      <div className='categories-header'>
        <p className='mb-0'>Select music category to view its music collections</p>
        <p className='mb-0'>
          <FontAwesomeIcon
            icon={faCog}
            className='btn text-light'
            title='Toggle Search'
            onClick={() => setShowSearch(!showSearch)}
          />
        </p>
      </div>
      {showSearch && (<div className="search-container">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by category"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  // Cancel the default action, if needed
                  e.preventDefault();
                  // Trigger the button element with a click
                  setSearchValue(e.target.value);
                }
              }}
            />
            <span
              className="input-group-text btn btn-primary"
              onClick={(e) => {
                setSearchValue(searchValue);
              }}
            >
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
        </div>
      </div>)}
      <Row className='categorys'>
        {
          filteredCategory.map((b) => 
            <div
              className='category-container text-light p-2 shadow card col-sm-6 col-md-4'
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
