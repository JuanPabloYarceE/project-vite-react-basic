// AccordionItem.js
import React from "react";
import "./styles.css";

const AccordionItem = ({ title, ejecutarScript }) => (
  <button className="buttonStyle" onClick={() => ejecutarScript(title)}>
    {title}
  </button>
);

export default AccordionItem;
