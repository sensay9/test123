const mongoose = require('mongoose');

const StoreSchema = new mongoose.Schema({
  storeId:{
    type: String,
    required: [true, 'Please add a store ID'],
    unique: true,
    trim: true,
    maxlength: [10, 'Store Id must be less than 10 chars']
  },
  address:{
    type: String,
    required: [true, 'Please add an address']
  },
  location: {
    type: {
      type: String, // Don't do `{ location: { type: String } }`
      enum: ['Point'], // 'location.type' must be 'Point'
       //  required: true
    },
    coordinates: {
      type: [Number],
      index: '2dsphere'
    //  required: true
  },
    formattedAddess: String
  },
  createdAt:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Store',StoreSchema);
