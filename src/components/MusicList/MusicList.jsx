import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./MusicList.css";
import Music from "./Music";
import { fetchMusicList } from "../../redux/musiclist/musiclistSlice";
import { Col, Row } from "react-bootstrap";
import { faBackward, faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../Loader/Loader";

function MusicList({ category }) {
  const dispatch = useDispatch();
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ pageCount, setPageCount ] = useState(0);
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredMusic, setFilteredMusic ] = useState([]);
  const countPerPage = 20;
  const loading = useSelector((state) => state.musiclist.loading);
  const error = useSelector((state) => state.musiclist.error);
  const musiclistAvailable = useSelector((state) => state.musiclist.musiclist);

  useEffect(() => {
    dispatch(fetchMusicList(category));
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

  const pagesVisited = () => {
    return pageNumber * countPerPage;
  };

  const changePage = ({ selected }) => {
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
    <div className="w-100 p-4">
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
              <FontAwesomeIcon icon={faSearch} />
            </span>
            <a href="../" className="btn btn-sm btn-secondary">
              Go Back
              <FontAwesomeIcon icon={faBackward} className="ms-2"/>
            </a>
          </div>
        </div>
      </div>
      <Row className="gap-2 justify-content-center">
        {Object.keys(filteredMusic)
          .slice(pagesVisited(), pagesVisited() + countPerPage)
          .map((g) => (
            <Col
              sm={"6"}
              md={"4"}
              className="bg-dark text-light p-2 shadow card"
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
