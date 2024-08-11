import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = () => {
  return (
    <div className="home">
      <h1>Bienvenido a OmegaPetShop</h1>
      <nav>
        <Link to="/catalog">Ir al Catálogo</Link>
      </nav>
    </div>
  );
};

export default ProductList;


