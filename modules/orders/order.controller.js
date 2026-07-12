const OrderModel = require("./order.model")

const CreateOrder = async (req, res) => {
    try {
        const { userEmail, userName, items, totalPrice } = req.body
        if (!userEmail || !userName || !items || !items.length || !totalPrice) {
            return res.status(400).json({ message: "Invalid order details." })
        }

        const newOrder = new OrderModel({
            userEmail,
            userName,
            items,
            totalPrice
        })

        const Data = await newOrder.save()

        res.status(201).json({
            success: true,
            message: "Order placed successfully!",
            Data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const GetAllOrders = async (req, res) => {
    try {
        const orders = await OrderModel.find().sort({ createdAt: -1 })
        res.status(200).json({
            success: true,
            orders
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

const UpdateOrderStatus = async (req, res) => {
    try {
        const { id } = req.params
        const { status } = req.body
        if (!status) {
            return res.status(400).json({ message: "Status is required." })
        }

        const order = await OrderModel.findByIdAndUpdate(id, { status }, { new: true })
        if (!order) {
            return res.status(404).json({ message: "Order not found." })
        }

        res.status(200).json({
            success: true,
            message: "Order status updated successfully!",
            order
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

module.exports = { CreateOrder, GetAllOrders, UpdateOrderStatus }
