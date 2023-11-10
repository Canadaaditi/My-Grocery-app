import react, { useState } from 'react';
class CartList extends useState {
  calculateTotal = () => {
    const { cart } = this.props;
    return cart.reduce((total, product) => total + product.price, 0);
  };

  render() {
    const { cart, removeFromCart } = this.props;
    const total = this.calculateTotal();

    return (
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your Cart is Empty!</p>
        ) : (
          <div>
            {cart.map((product) => (
              <div key={product.id}>
                <h3>{product.name}</h3>
                <p>Price: ${product.price}</p>
                <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
              </div>
            ))}
            <p>Total Price: ${total}</p>
            <button onClick={() => alert(`Total Price: $${total}`)}>Buy</button>
            <button onClick={() => removeFromCart()}>Empty the Cart</button>
          </div>
        )}
      </div>
    );
  }
}

export default CartList;
 