import React, { useState } from 'react';
import './RegisterShop.css'; // Asegúrate de que este archivo CSS exista

const RegisterShop = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    shopName: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviar los datos a un servidor
    console.log('Datos de la tienda registrados:', formData);
  };

  return (
    <div className="register-shop">
      <h2>Registrar Tienda</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input 
            type="text" 
            name="username" 
            value={formData.username} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Contraseña:
          <input 
            type="password" 
            name="password" 
            value={formData.password} 
            onChange={handleChange} 
            required 
          />
        </label>
        <label>
          Nombre de la Tienda:
          <input 
            type="text" 
            name="shopName" 
            value={formData.shopName} 
            onChange={handleChange} 
            required 
          />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterShop;






