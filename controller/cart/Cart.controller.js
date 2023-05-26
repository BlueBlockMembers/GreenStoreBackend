const Cart = require("../../model/cart/cart.model");
const Fertilizer = require("../../model/fertilizer/Fertilizer.model");
const Customer = require("../../model/customer/Customer.model");

// Add item to cart
const addItemToCart = async (req, res) => {
  const { customerId, fertilizerId, quantity } = req.body;

  try {
    // Find the customer
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ message: "Customer not found" });
    }

    // Find the fertilizer
    const fertilizer = await Fertilizer.findById(fertilizerId);
    if (!fertilizer) {
      return res.status(404).json({ message: "Fertilizer not found" });
    }

    // Create the cart item
    const cartItem = {
      product: fertilizer._id,
      quantity,
      price: fertilizer.price,
    };

    // Find or create the cart
    let cart = await Cart.findOne({ customer: customerId });
    if (!cart) {
      cart = new Cart({
        customer: customerId,
        items: [cartItem],
        total: fertilizer.price * quantity,
      });
    } else {
      // Check if the item already exists in the cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.product.toString() === fertilizerId
      );
      if (existingItemIndex !== -1) {
        // Update the quantity and price of the existing item
        cart.items[existingItemIndex].quantity += quantity;
        cart.items[existingItemIndex].price =
          fertilizer.price * cart.items[existingItemIndex].quantity;
      } else {
        // Add the new item to the cart
        cart.items.push(cartItem);
      }

      // Update the total price
      cart.total += fertilizer.price * quantity;
    }

    // Save the cart
    await cart.save();

    res.status(201).json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error adding item to cart" });
  }
};

// Get cart by customer ID
const getCartByCustomerId = async (req, res) => {
  const customerId = req.params.customerId;

  try {
    const cart = await Cart.findOne({ customer: customerId }).populate(
      'items.product'
    );
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }
    res.json(cart);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error getting cart" });
  }
};

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  const customerId = req.params.customerId;
  const itemId = req.params.itemId;

  try {
    const cart = await Cart.findOne({ customer: customerId });
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const itemIndex = cart.items.findIndex((item) => item._id.toString() === itemId);
    if (itemIndex === -1) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Calculate the price of the item being removed
    const itemPrice = cart.items[itemIndex].price;

    // Update the total price
    cart.total -= itemPrice;

    // Remove the item from the cart
    cart.items.splice(itemIndex, 1);

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Item removed from cart", cart });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error removing item from cart" });
  }
};

const updateCartItemQuantity = async (req, res) => {
  const { cartId, itemId } = req.params;
  const { quantity } = req.body;

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: "Cart not found" });
    }

    const item = cart.items.find((item) => item._id.toString() === itemId);
    if (!item) {
      return res.status(404).json({ message: "Item not found in cart" });
    }

    // Calculate the price difference based on the new quantity
    const priceDiff = (quantity - item.quantity) * item.price;

    // Update the quantity and price of the item
    item.quantity = quantity;
    item.price += priceDiff;

    // Update the total price of the cart
    cart.total += priceDiff;

    // Save the updated cart
    await cart.save();

    res.status(200).json({ message: "Item quantity updated", cart });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating item quantity" });
  }
};




module.exports = {
  addItemToCart,
  getCartByCustomerId,
  removeItemFromCart,
  updateCartItemQuantity
};
