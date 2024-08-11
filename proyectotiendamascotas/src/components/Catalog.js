// src/components/Catalog.js
import React, { useState } from 'react';
import './Catalog.css'; // Asegúrate de que este archivo exista

const Catalog = () => {
  const [products] = useState([
    { id: 1, name: 'Comida Perros', category: 'Comida', store: 'Tienda A', description: 'High-quality dog food.', price: '$20' },
    { id: 2, name: 'Juguetes Gatos', category: 'Juguetes', store: 'Tienda B', description: 'Fun toy for cats.', price: '$15' },
    { id: 3, name: 'Accesorios Aves', category: 'Accesorios', store: 'Tienda C', description: 'Spacious cage for birds.', price: '$50' },
    { id: 4, name: 'Comida Gatos', category: 'Comida', store: 'Tienda B', description: 'Food for cats.', price: '$40' },
    { id: 5, name: 'Comida Conejos', category: 'Comida', store: 'Tienda D', description: 'High-quality food for rabbits.', price: '$20' },
    { id: 6, name: 'Juguetes Perros', category: 'Juguetes', store: 'Tienda A', description: 'Fun toy for dogs.', price: '$15' },
    { id: 7, name: 'Accesorios Gatos', category: 'Accesorios', store: 'Tienda B', description: 'Accessories for cats.', price: '$50' },
    { id: 8, name: 'Comida Ardillas', category: 'Comida', store: 'Tienda E', description: 'Food for squirrels.', price: '$40' },
    { id: 9, name: 'Comida Hamster', category: 'Comida', store: 'Tienda A', description: 'High-quality dog food.', price: '$20' },
    { id: 10, name: 'Juguetes Hamster', category: 'Juguetes', store: 'Tienda B', description: 'Fun toy for cats.', price: '$15' },
    { id: 11, name: 'Accesorios Hamster', category: 'Accesorios', store: 'Tienda C', description: 'Spacious cage for birds.', price: '$50' },
    { id: 12, name: 'Accesorios Gatos', category: 'Comida', store: 'Tienda B', description: 'Food for cats.', price: '$40' },
    { id: 13, name: 'Comida Conejos', category: 'Comida', store: 'Tienda D', description: 'High-quality food for rabbits.', price: '$20' },
    { id: 14, name: 'Juguetes Perros', category: 'Juguetes', store: 'Tienda A', description: 'Fun toy for dogs.', price: '$15' },
    { id: 15, name: 'Accesorios Gatos', category: 'Accesorios', store: 'Tienda B', description: 'Accessories for cats.', price: '$50' },
    { id: 16, name: 'Comida Ardillas', category: 'Comida', store: 'Tienda E', description: 'Food for squirrels.', price: '$40' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const filterProducts = (term) => {
    if (term.trim() === '') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product =>
        product.category.toLowerCase().includes(term.toLowerCase()) ||
        product.store.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    filterProducts(term);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      filterProducts(searchTerm);
    }
  };

  return (
    <section className="catalog">
      <input
        type="text"
        placeholder="Buscar por categoría o tienda..."
        value={searchTerm}
        onChange={handleSearchChange}
        onKeyPress={handleKeyPress}
        className="search-bar"
      />
      <div className="products-list">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="product-card">
              <h2>{product.name}</h2>
              <p>Categoría: {product.category}</p>
              <p>Tienda: {product.store}</p>
              <p>{product.description}</p>
              <p>Precio: {product.price}</p>
              <button>Comprar</button>
            </div>
          ))
        ) : (
          <p>No se encontraron productos.</p>
        )}
      </div>
    </section>
  );
};

export default Catalog;





















