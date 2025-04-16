const mongoose = require("mongoose")

const customerSchema = new mongoose.Schema({
    name: { type: String, reqiured: true },
    mobile: { type: String, reqiured: true },
    email: { type: String, reqiured: true },
    otp: { type: String },
    otpSendOn: { type: Date },
    isActive: { type: Boolean, default: true },
},{ timestamps: true })
module.exports = mongoose.model("customer", customerSchema) 