import { useState } from "react";
import Mensaje from "./Mensaje";

function Contador() {
  const [contador, setContador] = useState(0);

  function aumentar() {
    setContador(contador + 1);
  }

  function disminuir() {
    setContador(contador - 1);
  }

  function reiniciar() {
    setContador(0);
  }

  return (
    <section className="contador">
      <Mensaje texto="Presiona los botones para cambiar el contador" />

      <h2>{contador}</h2>

      <div className="botones">
        <button onClick={disminuir}>-1</button>

        <button onClick={reiniciar}>
          Reiniciar
        </button>

        <button onClick={aumentar}>+1</button>
      </div>
    </section>
  );
}

export default Contador;