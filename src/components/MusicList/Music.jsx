import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faPlay } from '@fortawesome/fontawesome-free-solid';

const Music = ({ music }) => {
  Music.propTypes = {
    music: PropTypes.object.isRequired,
  };

  return (
    <div className="music">
      <h6 className="music-title">
        <a href={music.url} className="" target="blank">{music.name}</a>
        <span className="float-end text-light">
          <FontAwesomeIcon icon={faHeadphones} /> {Number(music.listeners).toLocaleString()}
        </span>
      </h6>
    </div>
  );
};

export default Music;
