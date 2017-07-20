var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose')

var AdventureSchema = new Schema ({
	activityType: {
		type: String, 
		required: true
	},
	date: {
		type: Date,
		required: true
	},
	savedBy: {
		type: Array,
		required: true
	},
	time: {
		type: String // is this correct?
	},
	attendees: {
		type: Array,
		required: false
	}
})

AdventureSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Adventure", AdventureSchema);