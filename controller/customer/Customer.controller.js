// Customer.controller.js

const Customer = require('../../model/customer/Customer.model');

// Get all customers
const getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.json(customers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single customer
const getCustomerById = async (req, res) => {
  res.json(res.customer);
};

// Create a new customer
const createCustomer = async (req, res) => {
  const { name, email, password, city, state, zipcode } = req.body;

  const customer = new Customer({
    name,
    email,
    password,
    city,
    state,
    zipcode
  });

  try {
    const newCustomer = await customer.save();
    res.status(201).json(newCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update an existing customer
const updateCustomer = async (req, res) => {
  if (req.body.name != null) {
    res.customer.name = req.body.name;
  }
  if (req.body.email != null) {
    res.customer.email = req.body.email;
  }
  if (req.body.password != null) {
    res.customer.password = req.body.password;
  }
  if (req.body.city != null) {
    res.customer.city = req.body.city;
  }
  if (req.body.state != null) {
    res.customer.state = req.body.state;
  }
  if (req.body.zipcode != null) {
    res.customer.zipcode = req.body.zipcode;
  }

  try {
    const updatedCustomer = await res.customer.save();
    res.json(updatedCustomer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
  const customerID = req.params.id;

  try {
    await Customer.findByIdAndDelete(customerID);
    res.status(200).json({ status: 'Customer Deleted' });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ status: 'Error with delete customer', error: err.message });
  }
};

// Middleware function to get a single customer by ID
const getCustomer = async (req, res, next) => {
  try {
    const customer = await Customer.findById(req.params.id);
    if (customer == null) {
      return res.status(404).json({ message: 'Cannot find customer' });
    }
    res.customer = customer;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  getCustomer
};
