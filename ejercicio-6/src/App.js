import React, { useState } from 'react';

function CalculadoraIMC() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState(null);

  const calcularImc = (e) => {
    e.preventDefault();

    const p= parseFloat(peso);
    const h= parseFloat(altura);

    if (isNaN(p) || isNaN(h) || p <= 0 || h <= 0) {
      setResultado({
        mensaje: 'Por favor, ingrese valores válidos para peso y altura.'
      });
      return;
    }

    const imc = p / ((h / 100) ** 2);
    let infoResultado;

    if (imc<18.5){
      infoResultado= { valor: imc, mensaje: 'bajo' };
    } else if (imc >= 18.5 && imc <= 24.9) {
      infoResultado= { valor:imc, mensaje: 'normal' };
    } else if (imc >= 25 && imc <= 29.9) {
      infoResultado= { valor:imc, mensaje: 'sobrepeso' };
    } else {
      infoResultado= { valor: imc, mensaje: 'obesidad' };
    }

    setResultado(infoResultado);
  };

  return (
    <div>
      <h1>Ejercicio 6</h1>
      <form onSubmit={calcularImc}>
        <div>
          <label>Peso (en kg): </label>
          <input
            type="number"
            value={peso}
            onChange={e => setPeso(e.target.value)}
            placeholder="Ej: 70"
          />
        </div>
        <div>
          <label>Altura (en cm): </label>
          <input
            type="number"
            value={altura}
            onChange={e => setAltura(e.target.value)}
            placeholder="Ej: 175"
          />
        </div>
        <button type="submit">Calcular</button>
      </form>

      {resultado && (
        <div>
          <h3>Resultado:</h3>
          <p>
            Su IMC es: {resultado.valor.toFixed(2)}
          </p>
          <p>
            Diagnóstico: {resultado.mensaje}
          </p>
        </div>
      )}
    </div>
  );
}

export default CalculadoraIMC;