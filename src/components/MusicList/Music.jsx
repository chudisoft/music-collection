import React from "react";
import PropTypes from "prop-types";

const Music = ({ music }) => {
  Music.propTypes = {
    music: PropTypes.object.isRequired,
  };

  return (
    <div className="music">
      <h6 className="music-title">
        <a href={music.url} className="" target="blank">{music.name}</a>
        <span className="float-end text-light">
          <i className="fa fa-headphones"></i> {Number(music.listeners).toLocaleString()}
        </span>
      </h6>
    </div>
  );
};

export default Music;
