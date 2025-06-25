import React, { useState } from 'react';

function Ejercicio4() {

  const [estaIzquierdoHabilitado, setEstaIzquierdoHabilitado] = useState(true);

  const manejarClicIzquierdo = () => {

    setEstaIzquierdoHabilitado(false);
  };

  const manejarClicDerecho = () => {

    setEstaIzquierdoHabilitado(true);
  };

  return (
    <div>
      <h1>Ejercicio 4: Botones Alternados</h1>
      
      {/* Botón Izquierdo */}
      <button 
        onClick={manejarClicIzquierdo} 
        disabled={!estaIzquierdoHabilitado}
      >
        Izquierdo
      </button>

      {/* Botón Derecho */}
      <button 
        onClick={manejarClicDerecho} 
        disabled={estaIzquierdoHabilitado}
      >
        Derecho
      </button>
    </div>
  );
}

export default Ejercicio4;