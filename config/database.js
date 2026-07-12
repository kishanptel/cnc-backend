const mongoose = require("mongoose")
const { MONGOOSE_URI, DATABASE_NAME } = require("./config")

async function DataBaseConnection() {
    try {
        const conn = await mongoose.connect(MONGOOSE_URI, {
            dbName: DATABASE_NAME
        })
        console.log("Database connected with", conn.connection.host)
        return true
    } catch (error) {
        if (error.name === "MongooseServerSelectionError") {
            console.log("Mongoose Server Selection Error")
        }
        console.log("DataBase Connection Error")
        return false
    }
}

module.exports = DataBaseConnection