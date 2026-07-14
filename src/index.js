const DataBaseConnection = require("../config/database");
const app = require("./app");
const UserModel = require("../modules/users/user.model");

let isConnected = false;
let adminSeeded = false;

module.exports = async (req, res) => {
    try {
        if (!isConnected) {
            await DataBaseConnection();
            isConnected = true;
        }

        if (!adminSeeded) {
            const adminExist = await UserModel.findOne({ isAdmin: true });

            if (!adminExist) {
                await UserModel.create({
                    name: "Admin",
                    email: "admin@cacaoncrumb.com",
                    password: "admin123",
                    isAdmin: true,
                    profile: "/cacaoncrumb_logo.png"
                });

                console.log("Admin account seeded.");
            }

            adminSeeded = true;
        }

        return app(req, res)
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: err.message
        })
    }
}