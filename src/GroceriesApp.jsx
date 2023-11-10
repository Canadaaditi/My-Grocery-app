import { products } from './products.js';
import InventoryCards from './InventoryCards.js';
import CartList from './CartList.js';

class GroceriesApp {
  constructor() {
    this.inventory = products;
    this.cart = [];

    this.renderInventory();
    this.renderCart();
  }

  renderInventory() {
    const inventoryContainer = document.getElementById('inventory');
    this.inventory.forEach((product) => {
      const card = new InventoryCards(product, this.addToCart.bind(this));
      inventoryContainer.appendChild(card.getElement());
    });
  }

  renderCart() {
    const cartContainer = document.getElementById('cart');
    const cartList = new CartList(this.cart, this.removeFromCart.bind(this));
    cartContainer.appendChild(cartList.getElement());
  }

  addToCart(item) {
    this.cart.push(item);
    this.renderCart();
  }

  removeFromCart(item) {
    this.cart = this.cart.filter((cartItem) => cartItem !== item);
    this.renderCart();
   }
}


export default GroceriesApp;
