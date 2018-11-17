var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	id: String,
	username: String,
	password: String,
	firstName: String,
	lastName: String

});

const Signupuser = mongoose.model("Signupuser", userSchema);

module.exports = Signupuser;