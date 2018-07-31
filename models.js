var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const userSchema = new mongoose.Schema({
  Username: {
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  PhoneNumber: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('user', userSchema);
