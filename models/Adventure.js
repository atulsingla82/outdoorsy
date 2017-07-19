var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

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
	}
	// time: {
	// 	type: 
	// }
	registrants: {
		type: Array,
		required: false
	}
})