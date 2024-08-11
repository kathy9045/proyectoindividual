// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Catalog from './components/Catalog';
import RegisterCustomer from './components/RegisterCustomer';
import RegisterShop from './components/RegisterShop';
import './App.css'; // Asegúrate de que este archivo exista
import './styles.css'; // Asegúrate de que este archivo exista

import logo from './images/descarga.jpg'; // Ruta correcta a tu imagen

const Home = () => (
  <div className="home">
    <h1>Bienvenido a OmegaPetShop</h1>
    <p>Encuentra los mejores productos para tus mascotas.</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} alt="Logo" className="logo" />
        <h1>OmegaPetShop</h1>
        <nav>
          <a href="/">Inicio</a>
          <a href="/catalog">Catálogo</a>
          <a href="/register-customer">Registrar Cliente</a>
          <a href="/register-shop">Registrar Tienda</a>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/register-shop" element={<RegisterShop />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>&copy; 2024 OmegaPetShop. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;












