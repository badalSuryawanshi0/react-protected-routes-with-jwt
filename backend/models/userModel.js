const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const newUserSchema = new Schema({
    username: { type: String },
    email: { type: String, unique: true },
    password: { type: String }
});

const NewUserModel = mongoose.model('NewUser', newUserSchema);

module.exports = { NewUserModel };
