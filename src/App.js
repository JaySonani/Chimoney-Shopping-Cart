import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductsListingPage from './Pages/ProductsListingPage';
import ProductDetailsPage from './Pages/ProductDetailsPage';
import ShoppingCartPage from './Pages/ShoppingCartPage';
import { useNavigate } from 'react-router-dom';


const App = () => {
  // const navigate = useNavigate();

  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<ProductsListingPage />} />
          <Route path='/details' element={<ProductDetailsPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
