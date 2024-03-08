const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mohankuldeep1234:PpFsmAeBbpKxwdmr@cluster0.xkg430h.mongodb.net/");
const userSchema = new mongoose.Schema({
  username:String,
  firstName:String,
  lastName:String,
  password:String
});
const User = mongoose.model('User',userSchema);
const accountSchema = new mongoose.Schema({
  userId: {
      type: mongoose.Schema.Types.ObjectId, // Reference to User model
      ref: 'User',
      required: true
  },
  balance: {
      type: Number,
      required: true
  }
});

const Account = mongoose.model('Account', accountSchema);

module.exports = {
  User,
  Account
};