import React, { useState } from 'react';
import './Cart.css'; // Importa los estilos específicos

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCashOnDelivery, setIsCashOnDelivery] = useState(true);

  const handleCheckout = () => {
    // Aquí podrías enviar la información del carrito y la opción de pago al servidor
    console.log('Carrito:', cartItems);
    console.log('Opción de pago contraentrega:', isCashOnDelivery);
    alert('Compra realizada con éxito. Te contactaremos para la entrega.');
  };

  return (
    <div className="cart">
      <h2>Tu Carrito</h2>
      {/* Muestra los artículos del carrito */}
      <div>
        {cartItems.length > 0 ? (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>{item.name} - {item.price}</li>
              ))}
            </ul>
            <label>
              <input
                type="checkbox"
                checked={isCashOnDelivery}
                onChange={() => setIsCashOnDelivery(!isCashOnDelivery)}
              />
              Pagar contraentrega
            </label>
            <button onClick={handleCheckout}>Realizar Compra</button>
          </div>
        ) : (
          <p>El carrito está vacío.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
