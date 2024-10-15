const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Tên nhân viên là bắt buộc'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email là bắt buộc'],
    unique: true,
    match: [/.+\@.+\..+/, 'Email không hợp lệ']
  },
  role: {
    type: String,
    enum: ['salesperson', 'delivery staff'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;
