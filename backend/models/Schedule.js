const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String}
},{timestamps: true});

module.exports = mongoose.model('Schedule',ScheduleSchema,);

