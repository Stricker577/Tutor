const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {type: String},
  displayName: {type: String},
  firstName: {type: String},
  lastName: {type: String},
  image: {type: String},
  email:{type:String},
  createdAt: {type: Date,default: Date.now,}
});

module.exports = mongoose.model('User', UserSchema);