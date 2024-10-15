const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  code: {
    type: String,
    required: [true, 'Mã khuyến mãi là bắt buộc'],
    unique: true,
    trim: true
  },
  discount: {
    type: Number,
    required: [true, 'Giảm giá là bắt buộc'],
    min: [0, 'Giảm giá phải ít nhất là 0']
  },
  appliedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
