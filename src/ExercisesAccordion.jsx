import React, { useState } from "react";
import "./styles.css"; // Importa el archivo de estilos CSS
import AccordionItem from "./AccordionItem";
import scripts from "./scripts"; // Importa el objeto scripts desde el nuevo archivo

const ScriptRunner = () => {
  const [resultado, setResultado] = useState('');

  const ejecutarScript = (scriptName) => {
    try {
      const resultadoScript = scripts[scriptName]();
      //console.log(resultadoScript + " <---------");
      setResultado(JSON.stringify(resultadoScript, null, 2));
      //  console.log(resultado + "  RESULT");
    } catch (error) {
      setResultado(`Error al ejecutar el script: ${error.message}`);
    }
  };

  const renderAccordionItems = () => {
    const scriptNames = Object.keys(scripts);
    return scriptNames.map((scriptName) => (
      <AccordionItem key={scriptName} title={scriptName} ejecutarScript={ejecutarScript} />
    ));
  };

  const ExercisesAccordion = () => {
    return (
      <>
        <div className="accordionStyle">
          {/*  <AccordionItem title="reverseArray" ejecutarScript={ejecutarScript} />
        <AccordionItem title="highToLow" ejecutarScript={ejecutarScript} />
        <AccordionItem title="firstnPrimes" ejecutarScript={ejecutarScript}/>
        <AccordionItem title="rotateLeftN" ejecutarScript={ejecutarScript}/>
        <AccordionItem title="addAllDigits" ejecutarScript={ejecutarScript}/> */}
          {renderAccordionItems()}
        </div>
        <div className="contentStyle">
          <h1>Resultados</h1>
          <pre>{resultado}</pre>
        </div>
      </>
    );
  };

  return <ExercisesAccordion />;
};

export default ScriptRunner;


