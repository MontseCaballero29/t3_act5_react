function ListaFunciones() {
  const funciones = [
    "Aumentar el contador",
    "Disminuir el contador",
    "Reiniciar el contador",
  ];

  return (
    <section>
      <h2>Funciones disponibles</h2>

      <ul>
        {funciones.map((funcion, indice) => (
          <li key={indice}>
            {funcion}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ListaFunciones;