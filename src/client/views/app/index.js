
import { useState, useEffect } from 'react';

import { getProducts, calculateTaxForProducts } from '../../api/index';
import ShoppingBasket from '../shopping-basket/index';

import './app.css';

function App() {

  const [ loading, setLoading ] = useState(true);
  const [ taxCalculated, setTaxCalculated ] = useState(false);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const products = await getProducts();
      setProducts(products);
      setLoading(false);
    }
    fetchData();
  }, []);

  const onCheckoutClick = async () => {
    const updatedProducts = await calculateTaxForProducts([1, 2, 3, 4, 5]);
    setProducts(updatedProducts);
    setTaxCalculated(true);
  }  

  return loading ? 
  (<div className="loading">loading....</div>) :
  (
    <div className="app">
      <h1>Shopping Basket</h1>

      <ShoppingBasket products={products} />

      {!taxCalculated && 
        <button className="btn-calculate-tax" onClick={onCheckoutClick}>Calculate Tax</button>
      }
    </div>
  );
}

export default App;
