import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import './MusicList.css';
import Music from './Music';
import { fetchMusicList } from '../../redux/musiclist/musiclistSlice';

function MusicList({ category }) {  
  const error = useSelector((state) => state.musiclist.error);
  const musiclistAvailable = useSelector((state) => state.musiclist.musiclist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMusicList(category));
  }, []);

  return (
    <div className='w-100 p-4'>
      <div>{error}</div>
      <div className='musiclist'>
        <h1>Music List</h1>
      </div>
      <div className='musiclist'>
        {
          // musiclistAvailable.map((g) => 
          //   <div className='artist'>
          //     <div className="artist-header">
          //       <h3>{Object.keys(musiclistAvailable)[musiclistAvailable.indexOf(g)]}</h3>
          //     </div>
          //     <div className="artist-content">
          //       {
          //         {...g}.map((m) => 
          //           <Music 
          //             music={m}
          //             key={m.musiclist_id}
          //           />
          //         )
          //       }
          //     </div>
          //   </div>
          // )
        }
      </div>
    </div>
  )
}

MusicList.propTypes = {}

export default MusicList
