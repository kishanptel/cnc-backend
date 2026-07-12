const express = require("express")
const { SubmitContactInquiry } = require("./contact.controller")
const route = express.Router()

route.post("/inquiry", SubmitContactInquiry)

module.exports = route
