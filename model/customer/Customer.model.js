const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  password: String,
  city: String,
  state: String,
  zipcode: String,
});

// Hash and salt the password before saving
customerSchema.pre('save', async function(next) {
  try {
    if (!this.isModified('password') && !this.isNew) {
      return next();
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
    return next();
  } catch (err) {
    return next(err);
  }
});


const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;