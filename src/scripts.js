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
        console.log(a);
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
          const startAt = 35;//prompt("Starts at: ");
          const until = 3;//prompt("until: ");
          const nPrimes = [];

          if(isNaN(startAt) || isNaN(until) ||  startAt < 0 || until < 0){
              console.log(startAt > until);
              console.log("Error");
              return;
          }

          console.log("OK");
    
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
        const n = parseInt(prompt(">: "));
        const a = Array.from({ length: 10 }, () => Math.floor(Math.random() * (15 + 1)));

        console.log(a, " before");
        for(let i = 0; i < n; i++){

          console.log("------for------");
          a.push(a[0]);
          a.shift();
        }

        return a;
    },
    addAllDigits : () => {
        const num = prompt('>: ');
        let sum = 0;
        for(let i = 0; i < num.length; i++){
            sum += parseInt(num[i]);                
        }
        console.log(sum);
        return sum;
    }, 

    primeNum100 : () => {
        const primeNumbers = [];
        let flag = true;
        let contador = 0;
        let i = 0;
        while(flag){
            if(scripts.isPrime(i)){
                primeNumbers.push(i);
                contador++;
            }
            if(contador==100){
                flag=false;
            }
            i++;
        }
        return primeNumbers;
    },

    multiplicationTables: () => {
        const tables = [];
        const amount = prompt(">: ");
        const rows = prompt(">: ");
      
        for (let i = 1; i <= amount; i++) {
          const actualRow = [];
          
          for (let j = 1; j <= rows; j++) {
            let x = i * j;
            actualRow.push(x);
          }
      
          // Agrega una fila a las tablas con un salto de línea al final
          tables.push(actualRow.join(", ") + "\n");
        }
      
        // Devuelve las tablas como un solo string con saltos de línea entre ellas
        return tables.join("");
      }
      
  };

  export default scripts;