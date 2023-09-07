import React from "react";
import PropTypes from "prop-types";

const Music = ({ music }) => {
  Music.propTypes = {
    music: PropTypes.object.isRequired,
  };

  return (
    <div className="music">
      <h4 className="music-title">
        <a href={music.url} className="" target="blank">{music.name}</a>
      </h4>
      <p className="music-description">
        {/* {
          music.image.map((x) =>
            <img src={x['#text']} alt={music.name} />
          )
        } */}
        <img src={music.image[0]['#text']} alt={music.name} />
        <span className="rigth">{music.listeners}</span>
        {/* <video src={music.preview}></video> */}
      </p>
    </div>
  );
};

export default Music;
