import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/navbar/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>
        <ItemListContainer />     
    </div>
  );
}

export default App;
