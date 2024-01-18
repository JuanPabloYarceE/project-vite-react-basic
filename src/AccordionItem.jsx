// AccordionItem.js

import React from "react";
import "./styles.css"; // Importa el archivo de estilos CSS específico para AccordionItem

const AccordionItem = ({ title, onButtonClick }) => {
  return (
    <button
      className="buttonStyle"
      onClick={() => onButtonClick(title)}
    >
      {title}
    </button>
  );
};

export default AccordionItem;
