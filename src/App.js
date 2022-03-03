import './App.css';
import Navbar from './componentes/navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemContainer from './componentes/ItemContainer';

function App() {
  const agregar = () => {
    console.log("Se ha agregado el producto al carrito")
  }
  return (
    <div className="App">
      <header className="App-header">
          <Navbar />
      </header>
        <ItemContainer 
          nombreProducto="Difusor Coco&vainilla" 
          imgURL="../difusor.jpg"
          precio="600"
          agregar={agregar}
        />
    </div>
  );
}

export default App;
