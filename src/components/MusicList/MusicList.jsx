import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./MusicList.css";
import Music from "./Music";
import { fetchMusicList } from "../../redux/musiclist/musiclistSlice";
import { Col, Row } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";

function MusicList() {
  const { category } = useParams();
  const dispatch = useDispatch();
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ pageCount, setPageCount ] = useState(0);
  const [ sequence, setSequence ] = useState([]);
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredMusic, setFilteredMusic ] = useState([]);
  const loading = useSelector((state) => state.musiclist.loading);
  const error = useSelector((state) => state.musiclist.error);
  const musiclistAvailable = useSelector((state) => state.musiclist.musiclist);
  let count = 0;
  const countPerPage = 20;

  useEffect(() => {
    document.title = "Music Collections";
    dispatch(fetchMusicList(category));
    setSequence(generateSequence(countPerPage));
  }, []);

  useEffect(() => {
    setPageCount(Math.ceil(Object.keys(filteredMusic).length / countPerPage));
  }, [filteredMusic]);

  useEffect(() => {
    // Filter objects by keys matching searchValue
    if(searchValue === '') {
      setFilteredMusic(musiclistAvailable);
    } else {
      // Filter the original data object by keys (case-insensitive)
      const filteredData = Object.keys(musiclistAvailable).reduce((result, key) => {
        if (key.toLowerCase().includes(searchValue.toLowerCase())) {
          result[key] = musiclistAvailable[key];
        }
        return result;
      }, {});
      setFilteredMusic(filteredData);
    }
  }, [searchValue, musiclistAvailable, pageNumber]);

  function generateSequence(length) {
    const sequence = [];
    let currentNumber = 2;
  
    for (let i = 0; i < length; i++) {
      sequence.push(currentNumber);
      if (i % 2 === 0) {
        // If the index is even (0, 2, 4, ...), increment by 1.
        currentNumber++;
      } else {
        // If the index is odd (1, 3, 5, ...), increment by 4.
        currentNumber += 3;
      }
    }
  
    return sequence;
  }
  
  const getStyle = () => {
    count += 1;
    return sequence.includes(count) ? 'c-dim' : '';
  };

  const pagesVisited = () => {
    return pageNumber * countPerPage;
  };

  const changePage = ({ selected }) => {
    count = 0;
    setPageNumber(selected);
  };

  if(loading === 'loading') 
    return (
      <Loader />
    );
  

  if(loading === 'failed') 
    return (
      <div
        className="text-warning d-flex justify-content-center text-center m-4 p-4 card"
      >
        {error}
      </div>
    );
  

  return (
    <div>
      <div className="col-12 mb-2 d-flex justify-content-center">
        <div className="form-group">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search by artist, genre, release"
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
              <i className='fa fa-search'
                title='Toggle Search'
              >
              </i>
            </span>
            <a href="../" className="btn btn-sm btn-secondary">
              Go Back
              <i className='fa fa-backward ms-2'
              >
              </i>
            </a>
          </div>
        </div>
      </div>
      <Row className="categorys">
        {Object.keys(filteredMusic)
          .slice(pagesVisited(), pagesVisited() + countPerPage)
          .map((g) => (
            <Col
              sm={"6"}
              md={"4"}
              className={`category-container ${getStyle()} text-light p-2 shadow card`}
              key={g}
            >
              <div className="artist-header">
                <h5>{g}</h5>
              </div>
              <div className="gap-2 music-group">
                {filteredMusic[g].map((m) => (
                  <Music music={m} key={m.name} />
                ))}
              </div>
            </Col>
          ))}
      </Row>
      <hr />
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLinkClassName={"btn-prev"}
        nextLinkClassName={"btn-next"}
        activeClassName={"btn-active"}
        disabledClassName={"disabled"}
        breakLabel="..."
        breakClassName="break-me"
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        containerClassName="pagination"
      />
    </div>
  );
}

MusicList.propTypes = {};

export default MusicList;
