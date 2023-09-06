import React from "react";
import PropTypes from "prop-types";

const Music = ({ music }) => {
  Music.propTypes = {
    music: PropTypes.object.isRequired,
  };

  return (
    <div className="music">
      <h4 className="music-title">
        <span>{music.title}</span>
      </h4>
      <p className="music-description">
        <img src={music.album.cover_small} alt={music.album.title} />
        <span className="rigth">{music.duration}</span>
        <a href={music.album.tracklist} className="" target="blank">{music.album.title}</a>
        <video src={music.preview}></video>
      </p>
    </div>
  );
};

export default Music;
