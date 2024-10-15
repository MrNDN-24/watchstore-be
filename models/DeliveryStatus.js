const mongoose = require('mongoose');

const deliveryStatusSchema = new mongoose.Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order',
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'shipped', 'delivered', 'cancelled'],
    default: 'pending'
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deliveryDate: {
    type: Date
  }
});

const DeliveryStatus = mongoose.model('DeliveryStatus', deliveryStatusSchema);
module.exports = DeliveryStatus;
