const numeroUser = parseInt(prompt("Ingrese un numero"));
let x = 1

function comprobacion() {
  return numeroUser > 1 && numeroUser < 20;
}

const multiplicacion = (numero = 1) => {
  if (comprobacion()) {
    if (numeroUser >= numero) {
      console.log(numero + " X " + numeroUser + " = " + (numero * numeroUser))
      return multiplicacion(numero + 1)
    }
  } else {
    console.log("Número fuera de rango");
  }
};

const factorial = (x = 1) => {
    if (x > 1) {
      return x * factorial(x - 1)
    } else {
      return x;
    }
}

multiplicacion(1);
for (let i = 1; i <= numeroUser; i++) {
  if (comprobacion()){
    console.log("Factorial de " + i + " es: " + factorial(i));
  }
}