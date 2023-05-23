const express = require('express');
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  getAllCustomers,
  updateCustomer,
  getCustomerById
} = require('../../controller/customer/Customer.controller');

// Create a new customer
router.post('/create', createCustomer);

// Get all customers
router.get('/', getAllCustomers);

// Update customer by ID
router.patch('/:id', updateCustomer);

// Delete customer by ID
router.delete('/:id', deleteCustomer);

// Get customer by ID
router.get('/:id', getCustomerById);

module.exports = router;
