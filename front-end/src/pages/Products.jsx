import React, { useState, useEffect } from 'react';
import getAllProducts from '../api/products';
import ListProducts from '../components/ListProducts';

export default function Products() {
  const [products, setProducts] = useState([]);

  const fecthProducts = () => {
    const result = getAllProducts();
    setProducts(result);
  };

  useEffect(() => {
    fecthProducts();
  }, []);

  return (
    <div>
      <h3>Produtos</h3>
      <ListProducts products={ products } />
    </div>
  );
}
