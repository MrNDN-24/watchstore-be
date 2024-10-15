const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: [true, 'Số lượng sản phẩm trong kho là bắt buộc'],
    min: [0, 'Số lượng sản phẩm không thể nhỏ hơn 0']
  },
  dateAdded: {
    type: Date,
    default: Date.now
  }
});

const Inventory = mongoose.model('Inventory', inventorySchema);
module.exports = Inventory;
