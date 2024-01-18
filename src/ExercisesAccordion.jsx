import React, { useState } from "react";
import "./styles.css"; // Importa el archivo de estilos CSS

const ScriptRunner = () => {
  const [resultado, setResultado] = useState('');

  const scripts = {
    reverseArray: () => {
        const a = [1, 2, 35, 3, 55, 6, 324, 23, 5];
        return a.map((_, index) => a[a.length - index - 1]);
      },
    
      highToLow: () => {
        const a = [];
        let temp;
        let swap = false;
        let rangeRandom;;
              
        for(let i = 0; i < 10; i++){
            rangeRandom = Math.round(Math.random() * (10 - (-10)) -10);
            a.push(rangeRandom);
        }
    
        for (let i = 0; i < a.length; i++) {
          for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] < a[j + 1]) {
              temp = a[j];
              a[j] = a[j + 1];
              a[j + 1] = temp;
              swap = true;
            }
          }
          if (swap === false) {
            break;
          }
        }
        return a;
      }, 
    
      isPrime : (n) => {
          if (n == 2){
              return true;
          }
          else if(n<2 || n%2==0) {
              return false;
          }
    
          for(let i = 3; i < n/2; i++){
              if(n%i==0){
                  return false;
              }
          }
          return true;
      },
    
      firstnPrimes: () => {
          const startAt = prompt("Starts at: ");
          const until = prompt("until: ");
          const nPrimes = [];
    
          if(isNaN(startAt) || isNaN(until) || startAt > until || startAt < 0 || until < 0){
              console.log("Error");
              return;
          }
    
          let contador = 0;
          let i = startAt;
    
          while(contador < until){
              if(scripts.isPrime(i)){
                  nPrimes.push(i);
            //      console.log(nPrimes);
                  contador++;
              }
              i++;
          }
          console.log(nPrimes);
          return nPrimes;
      },

      rotateLeftN : () => {
        const l = [];
        const n = prompt(">: ");
        const a = Array.from({ length: 10 }, () => Math.floor(Math.random() * (15 + 1)));
        l.push(a);

        for(let i = 0; i < n; i++){
            a.push(a[i]);
            a.shift();
        }
        l.push(a);
        return l;
    }
  };

  const ejecutarScript = (scriptName) => {
    try {
      const resultadoScript = scripts[scriptName]();
      console.log(resultadoScript + " <---------");
      setResultado(JSON.stringify(resultadoScript, null, 2));
      console.log(resultado + "  RESULT");
    } catch (error) {
      setResultado(`Error al ejecutar el script: ${error.message}`);
    }
  };
  const AccordionItem = ({ title }) => {
    return (
      <button
        className="buttonStyle" // Aplica la clase de estilo al botón
        onClick={() => ejecutarScript(title)}
      >
        {title}
      </button>
    );
  };

  const ExercisesAccordion = () => {
    return (
      <>
        <div className="accordionStyle"> {/* Aplica la clase de estilo al acordeón */}
        <AccordionItem title="reverseArray" />
        <AccordionItem title="highToLow" />
        <AccordionItem title="firstnPrimes" />
        <AccordionItem title="rotateLeftN" />


          {/* Agrega más botones para ejecutar otros scripts */}
        </div>
        <div className="contentStyle"> {/* Aplica la clase de estilo al contenido */}
          <h1>Resultados</h1>
          <p>{resultado}</p>
        </div>
      </>
    );
  };

  return <ExercisesAccordion />;
};

export default ScriptRunner;


