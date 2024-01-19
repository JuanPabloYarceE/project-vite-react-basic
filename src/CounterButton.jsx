import React from "react";

const CounterButton = ({ counter, count}) => {

  return (
    <button className='button-17' onClick={count}>
      {counter}
    </button>
  );
};

export default CounterButton;
