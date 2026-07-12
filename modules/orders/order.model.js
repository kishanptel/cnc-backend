const mongoose = require("mongoose")

const OrderItemSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    quantity: { type: Number, required: true }
}, { _id: false })

const OrderSchema = new mongoose.Schema({
    userEmail: { type: String, required: true },
    userName: { type: String, required: true },
    items: [OrderItemSchema],
    totalPrice: { type: Number, required: true },
    status: { type: String, default: "Pending" }
}, { versionKey: false, timestamps: true })

const OrderModel = mongoose.model("orders", OrderSchema)

module.exports = OrderModel
