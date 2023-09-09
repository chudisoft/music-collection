import React, { useRef } from "react";

const Loader = () => {
  return (
    <div className="d-flex justify-content-center text-success fa-4x text-center m-4 p-4 card">
      <span>Loading... </span><i className="fa fa-spin fa-spinner"></i>
    </div>
  );
};

export default Loader;
