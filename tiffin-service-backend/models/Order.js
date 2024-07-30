const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  items: [
    {
      foodName: { type: String, required: true },
      price: { type: Number, required: true }
    }
  ],
  date: { type: Date, default: Date.now },
  review: { type: String }
});

module.exports = mongoose.model('Order', OrderSchema);
