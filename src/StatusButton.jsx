import React from "react";

const StatusButton = ({ isOn, handleClick }) => {

  const buttonClassName = isOn
    ? 'button-17 isOn'
    : 'button-17';

  const textButton = isOn
    ? 'Encendido'
    : 'Apagado'


  return (
    <button className={buttonClassName} id='statusButton' onClick={handleClick}>
      {textButton}
    </button>
  );
};

export default StatusButton;
