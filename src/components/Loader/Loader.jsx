import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadphones, faPlay, faSpinner } from '@fortawesome/fontawesome-free-solid';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center text-success fa-4x text-center m-4 p-4 card">
      <span>Loading... </span><FontAwesomeIcon icon={faSpinner} className="fa-spin"/>
    </div>
  );
};

export default Loader;
