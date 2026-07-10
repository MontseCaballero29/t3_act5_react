import "./App.css";
import Encabezado from "./components/Encabezado";
import Contador from "./components/Contador";
import ListaFunciones from "./components/ListaFunciones";

function App() {
  return (
    <main className="contenedor">
      <Encabezado />
      <Contador />
      <ListaFunciones />
    </main>
  );
}

export default App;