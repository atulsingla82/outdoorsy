var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//require('mongoose-type-email');

var UserSchema = new Schema({
	firstname: {
		type: String, 
		trim: true,
		required: true
	},
	lastname: {
		type: String, 
		required: true
	},
	email: {
		type: String, 
		unique: true,
		match: [/.+\@.+\..+/, "Please enter a valid e-mail address"]
		required: true
	},
	// email: {
	// 	type: mongoose.SchemaTypes.Email, required: true
	// },
	password: {
		type: String, 
		required: true,
	    validate: [
	      function(input) {
	        return input.length >= 6;
	      },
	      "Password should be longer."
	    ]	
	}

});

var User = mongoose.model("User", UserSchema);
module.exports = User;