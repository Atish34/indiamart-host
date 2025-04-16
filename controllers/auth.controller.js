const bcrypt = require("bcryptjs")
const Admin = require("../models/Admin")
const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const Customer = require("../models/Customer")
const { differenceInSeconds } = require('date-fns')
const { sendEmail } = require("../utils/email")
const { generateOTP } = require("../utils/otp")

exports.registerAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (result) {
        return res.status(409).json({ message: "email already registered" })
    }
    const hash = await bcrypt.hash(password, 10)
    await Admin.create({ ...req.body, password: hash })

    res.json({ message: "admin register success" })
}

exports.loginAdmin = async (req, res) => {
    const { email, password } = req.body
    const result = await Admin.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials email" })
    }

    const isVerify = await bcrypt.compare(password, result.password)
    if (!isVerify) {
        return res.status(401).json({ message: "invalid credentials password" })
    }

    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET)

    res.cookie("admin", token, {
        maxAge: 1000 * 60 * 60 * 24,
        httpOnly: true,
        secure: true
    })

    res.json({
        message: "admin login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
        }
    })
}
exports.logoutAdmin = async (req, res) => {
    res.clearCookie("admin")
    res.json({ message: "admin logout success" })
}

exports.registerCustomer = asyncHandler(async (req, res) => {
    const { email, name, mobile } = req.body
    const result = await Customer.findOne({
        $or: [
            { mobile },
            { email }
        ]
    })
    if (result) {
        return res.status(409).json({ message: "email or mobile already registered" })
    }
    await Customer.create(req.body)
    res.json({ message: "User register success" })

})


exports.loginCustomer= asyncHandler(async (req, res) => {
    const { mobile } = req.body

    const result = await Customer.findOne({ mobile })
    if (!result) {
        return res.status(400).json({ message: "invalid credentials" })
    }
    const otp = generateOTP()
    await Customer.findByIdAndUpdate(result._id, { otp, otpSendOn: Date.now() })
    res.json({ message: "otp send" })
})



exports.verifyCustomerOTP = asyncHandler(async (req, res) => {
    const { otp, mobile } = req.body  
    const result = await Customer.findOne({ mobile })
    if (!result) {
        return res.status(401).json({ message: "invalid credentials" })
    }
    if (result.otp !== otp) {
        return res.status(401).json({ message: "invalid otp" })
    }
    if (differenceInSeconds(Date.now(), result.otpSendOn) > process.env.OTP_EXPIRE) {
        await Customer.findByIdAndUpdate(result._id, { otp: null })
        return res.status(401).json({ message: "otp expire" })
    }

    await Customer.findByIdAndUpdate(result._id, { otp: null })
    const token = jwt.sign({ _id: result._id }, process.env.JWT_SECRET, { expiresIn: "365d" })

    res.cookie("customer", token, {
        maxAge: 1000 * 60 * 60 * 24 * 365,
        httpOnly: true,
        secure: process.env.NODE_ENV === "production"
    })

    res.json({
        message: "login success",
        result: {
            name: result.name,
            mobile: result.mobile,
            email: result.email,
            customerId: result._id,
        }
    })
})


exports.logoutCustomer = asyncHandler(async (req, res) => {
    res.clearCookie("customer")
    res.json({ message: "logout user success" })
})