import React, { useState } from 'react';

function CalculadoraReact() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operacion, setOperacion] = useState('suma');
  const [resultado, setResultado] = useState(null);

  const manejarCalculo = () => {
    const numero1 = parseFloat(num1);
    const numero2 = parseFloat(num2);

    if (isNaN(numero1) || isNaN(numero2)) {
      setResultado('Por favor, ingrese números validos.');
      return;
    }

    let res;
    switch (operacion) {
      case 'suma':
        res = numero1 + numero2;
        break;
      case 'resta':
        res = numero1 - numero2;
        break;
      case 'multiplicacion':
        res = numero1 * numero2;
        break;
      case 'division':
        if (numero2 === 0) {
          res = 'Error: No se puede dividir por cero.';
        } else {
          res = numero1 / numero2;
        }
        break;
      default:
        return;
    }
    setResultado(res);
  };

  const esBotonDeshabilitado = operacion === 'division' && (num1 === '0' || num2 === '0');

  return (
    <div>
      <h1>Ejercicio 5</h1>
      
      <input
        type="number"
        value={num1}
        onChange={e => setNum1(e.target.value)}
        placeholder="Primer número"
      />

      <input
        type="number"
        value={num2}
        onChange={e => setNum2(e.target.value)}
        placeholder="Segundo número"
      />

      <select value={operacion} onChange={e => setOperacion(e.target.value)}>
        <option value="suma">Suma</option>
        <option value="resta">Resta</option>
        <option value="multiplicacion">Multiplicación</option>
        <option value="division">División</option>
      </select>

      <button
        onClick={manejarCalculo}
        disabled={esBotonDeshabilitado}
      >
        Calcular
      </button>

      {resultado !== null && <h2>Resultado: {resultado}</h2>}
    </div>
  );
}

export default CalculadoraReact;