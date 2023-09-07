import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './MusicList.css';
import Music from './Music';
import { fetchMusicList } from '../../redux/musiclist/musiclistSlice';
import { Col, Row } from 'react-bootstrap';

function MusicList({ category }) {  
  const error = useSelector((state) => state.musiclist.error);
  const musiclistAvailable = useSelector((state) => state.musiclist.musiclist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicList('Jazz'));
  }, []);

  return (
    <div className='w-100 p-4'>
      <div>{error}</div>
      <div className='musiclist'>
        <h1>Music List</h1>
      </div>
      <Row>
        {
          Object.keys(musiclistAvailable).map((g) => 
            <Col sm={'4'}>
              <div className="artist-header">
                <h3>{g}</h3>
              </div>
              <Row>
                {
                  musiclistAvailable[g].map((m) => 
                    <Music 
                      music={m}
                      key={m.musiclist_id}
                    />
                  )
                }
            </Row>
              </Col>
          )
        }
      </Row>
    </div>
  )
}

MusicList.propTypes = {}

export default MusicList
