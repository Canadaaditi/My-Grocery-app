import React, { useState } from 'react';
import InventoryCards from './InventoryCards';
import CartList from './CartList';
import products from './products';

function GroceriesApp() {
 const [inventory, setInventory] = useState(products);
 const [cart, setCart] = useState([]);

 const addToCart = (item) => {
    setCart([...cart, item]);
 };

 const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
 };

 const emptyCart = () => {
    setCart([]);
 };

 const totalPrice = cart.reduce((total, item) => total + item.price, 0);

 return (
    <div className="GroceriesApp">
      <h1>Groceries App</h1>
      <InventoryCards inventory={inventory} addToCart={addToCart} />
      <CartList cart={cart} removeFromCart={removeFromCart} emptyCart={emptyCart} totalPrice={totalPrice} />
    </div>
 );
}

export default GroceriesApp;