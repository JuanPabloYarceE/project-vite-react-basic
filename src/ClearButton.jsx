import React from "react";

const StatusButton = ({ clear}) => {

  return (
    <button className='button-17' id='clearButton' onClick={clear}>
      Clear
    </button>
  );
};

export default StatusButton;
