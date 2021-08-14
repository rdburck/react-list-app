const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TestSchema = new Schema({
	message: {
		type: String,
		unique: false,
		trim: true,
		required: true,
	},
});

const TestModel = mongoose.model("Test", TestSchema);

module.exports = TestModel;
