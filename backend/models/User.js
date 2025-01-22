const mongoose = require('mongoose'); // Fix typo in `mongose`

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
