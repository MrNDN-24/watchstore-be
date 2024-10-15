const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  addressLine: {
    type: String,
    required: [true, 'Địa chỉ là bắt buộc'],
    trim: true
  },
  city: {
    type: String,
    required: [true, 'Thành phố là bắt buộc'],
    trim: true
  },
  postalCode: {
    type: String,
    required: [true, 'Mã bưu điện là bắt buộc'],
    match: [/^[0-9]{5}$/, 'Mã bưu điện không hợp lệ']
  },
  country: {
    type: String,
    required: [true, 'Quốc gia là bắt buộc'],
    trim: true
  }
});

const Address = mongoose.model('Address', addressSchema);
module.exports = Address;
