const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const DaySchema = new Schema({
    date: String,
    hoursWorked: String,
    notes: String
});

module.exports.DaySchema = DaySchema;
