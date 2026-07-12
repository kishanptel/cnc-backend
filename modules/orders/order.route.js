const express = require("express")
const { CreateOrder, GetAllOrders, UpdateOrderStatus } = require("./order.controller")
const route = express.Router()

route.post("/create", CreateOrder)
route.get("/all", GetAllOrders)
route.put("/status/:id", UpdateOrderStatus)

module.exports = route
