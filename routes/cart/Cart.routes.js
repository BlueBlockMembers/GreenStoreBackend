const express = require('express');
const router = express.Router();
const {
  addItemToCart,
  getCartByCustomerId,
  removeItemFromCart,
  updateCartItemQuantity
} = require('../../controller/cart/Cart.controller');

// Add item to cart
router.post('/:customerId/add', addItemToCart);

// Get cart by customer ID
router.get('/:customerId', getCartByCustomerId);

// Remove item from cart
router.delete('/:customerId/items/:itemId', removeItemFromCart);

//update quantity
router.patch('/:cartId/items/:itemId', updateCartItemQuantity);

module.exports = router;
