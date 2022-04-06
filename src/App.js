import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './componentes/navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer'
import ItemDetailContainer from './componentes/ItemDetailContainer'
import Cart from './componentes/Cart'
import Success from './componentes/Success'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import {CustomCartContext} from './context/CustomCartContext'

function App() {
  return (
    <CustomCartContext>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            <Route path='/productos/:categoria' element={<ItemListContainer />}/>
            <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
            <Route path='/cart' element={<Cart />}/>
            <Route path='/success/:orderId' element={<Success />}/>
            <Route path='*' element={<Navigate to="/"/>}/>
          </Routes>
        </BrowserRouter>
      </CustomCartContext>
  );
}

export default App;
