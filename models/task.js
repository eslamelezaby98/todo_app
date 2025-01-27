const mongoose = require("mongoose")

const taskSchema = mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: false },
    isCompleted: { type: Boolean, default: false },
})

module.exports = mongoose.model('task', taskSchema)
