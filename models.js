var mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const UserSchema = new mongoose.Schema({
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
  },
  FocusedCurrencies: {
    type: Array,
    required: false
  }
})

// module.exports = mongoose.model('User', UserSchema);

var User = mongoose.model('User', UserSchema);
module.exports={
  User: User
}
