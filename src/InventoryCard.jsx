import React, { useState } from 'react';
import {CartList} from './CartList';

function InventoryCards(props) {
 const { id, productName, brand, quantity, price} = props.item;

 const [setAddToCart] = useState(false);

 const { cartData, setCartData } = (CartList);
 const addItemToCart = () => {
  setAddToCart(true);
  setCartData([...cartData, {id, productName, brand, }])
 }
 return (
    <div className="InventoryCards">
      <p> id: {id}</p>
      <h2>{productName}</h2>
      <p>brand: {brand}</p>
      <p>Price: ${price}</p>
      <p>Quantity: {quantity}</p>
      <button onClick={this.addToCart}>Add to Cart</button>
    </div>
 );
}

export default InventoryCards;
