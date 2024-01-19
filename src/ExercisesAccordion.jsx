import React, { useState } from "react";
import "./styles.css"; // Importa el archivo de estilos CSS
import AccordionItem from "./AccordionItem";
import scripts from "./scripts"; // Importa el objeto scripts desde el nuevo archivo

const ScriptRunner = () => {
  const [resultado, setResultado] = useState('');
  const [isOn, setOn] = useState(true);
  const [counter, setCounter] = useState(0);

  const textButton = isOn
  ? 'Encendido'
  : 'Apagado'

  const buttonClassName = isOn
    ? 'button-17 isOn'
    : 'button-17'

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

  const testClick = () => {
    setCounter(counter+1);
  }

  const renderAccordionItems = () => {
    const scriptNames = Object.keys(scripts);
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
        <button className='button-17' id='clearButton' onClick={clear}>Clear</button>
        <button className={buttonClassName} id='statusButton' onClick={handleClick}>{textButton}</button>
        <button className="button-17" onClick={testClick}>{counter} </button>
      </>
    );
  };

  return <ExercisesAccordion />;
};

export default ScriptRunner;


