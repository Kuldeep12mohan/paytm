const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://mohankuldeep1234:PpFsmAeBbpKxwdmr@cluster0.xkg430h.mongodb.net/");
const userSchema = new mongoose.Schema({
  username:String,
  firstName:String,
  lastName:String,
  password:String
});
const User = mongoose.model('User',userSchema);
module.exports = {
  User
};