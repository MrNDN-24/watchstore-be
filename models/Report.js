const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
  month: {
    type: Number,
    required: true,
    min: [1, 'Tháng không hợp lệ'],
    max: [12, 'Tháng không hợp lệ']
  },
  year: {
    type: Number,
    required: true,
    min: [1900, 'Năm không hợp lệ']
  },
  totalSales: {
    type: Number,
    required: true,
    min: [0, 'Doanh thu không thể nhỏ hơn 0']
  },
  totalOrders: {
    type: Number,
    required: true,
    min: [0, 'Số đơn hàng không thể nhỏ hơn 0']
  },
  productsSold: [{
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
