import React, { useState } from 'react';
import './RegisterCustomer.css'; 

const RegisterCustomer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    address: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Registro de cliente:', formData);
  };

  return (
    <div className="register-customer">
      <h2>Registrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>
          Correo Electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </label>
        <label>
          Contraseña:
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </label>
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
};

export default RegisterCustomer;





