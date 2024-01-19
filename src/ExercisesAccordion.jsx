import React, { useState } from "react";
import "./styles.css"; 
import AccordionItem from "./AccordionItem";
import scripts from "./scripts"; 
import StatusButton from "./StatusButton";
import ClearButton from './ClearButton';
import CounterButton from "./CounterButton";

const ScriptRunner = () => {
  const [resultado, setResultado] = useState('');
  const [isOn, setOn] = useState(true);
  const [counter, setCounter] = useState(0);

  const ejecutarScript = (scriptName) => {
    if (!isOn) return; 
    try {
      const resultadoScript = scripts[scriptName]();
      //console.log(resultadoScript + " <---------");
      setResultado(JSON.stringify(resultadoScript, null, 2));
      //  console.log(resultado + "  RESULT");
    } catch (error) {
      setResultado(`Error al ejecutar el script: ${error.message}`);
    }
  };

  const handleClick = () => {
    setOn(!isOn);
    if (isOn) {
      setResultado(''); // Limpiar la pizarra cuando se apaga
    }
  }

  const clear = () => {
    setResultado('');
  }

  const count = () => {
    setCounter(counter+1);
  }

  const renderAccordionItems = () => {
    const scriptNames = Object.keys(scripts);
    console.log(scriptNames, "<--------------");
    return scriptNames.map((scriptName) => (
      <AccordionItem
        key={scriptName}
        title={scriptName}
        ejecutarScript={ejecutarScript} />
    ));
  };

  const ExercisesAccordion = () => {
    return (
      <>
        <div className="accordionStyle">
          {renderAccordionItems()}
        </div>
        <div className="contentStyle">
          <h1>Resultados</h1>
          <pre>{resultado}</pre>
        </div>
        <ClearButton clear={clear}/> 
        <StatusButton isOn={isOn} handleClick={handleClick} /> 
        <CounterButton counter={counter} count={count} />
      </>
    );
  };

  return <ExercisesAccordion />;
};

export default ScriptRunner;


