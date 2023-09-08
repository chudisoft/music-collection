import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import "./MusicList.css";
import Music from "./Music";
import { fetchMusicList } from "../../redux/musiclist/musiclistSlice";
import { Col, Row } from "react-bootstrap";
import { faSearch } from "@fortawesome/fontawesome-free-solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Loader from "../Loader/Loader";

function MusicList({ category }) {
  const dispatch = useDispatch();
  const [ pageNumber, setPageNumber ] = useState(0);
  const [ countPerPage, setCountPerPage ] = useState(15);
  const [ searchValue, setSearchValue ] = useState('');
  const [ filteredMusic, setFilteredMusic ] = useState([]);
  const loading = useSelector((state) => state.musiclist.loading);
  const error = useSelector((state) => state.musiclist.error);
  const musiclistAvailable = useSelector((state) => state.musiclist.musiclist);

  useEffect(() => {
    dispatch(fetchMusicList(category));
  }, []);

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
  const pageCount = () => {
    return Math.ceil(filteredMusic.length / countPerPage);
  };

  const changePage = ({ selected }) => {
    alert(selected);
    setPageNumber(selected);
  };

  if(loading === 'loading') 
    return (
        <Loader />
    );
  

  return (
    <div className="w-100 p-4">
      <div className="text-warning p-2 m-2">{error}</div>
      <div className="form-group col-12 float-end mb-2">
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
        previousLinkClassName={"btn btn-sm btn-primary"}
        nextLinkClassName={"btn btn-sm btn-primary"}
        activeClassName={"btn btn-sm btn-primary"}
        disabledClassName={"btn btn-sm disabled"}
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
