const mongoose = require("mongoose");
const process = require("process")

require("dotenv").config();

mongoose.set("strictQuery", true)

async function main() {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Database connected");
    } catch (err) {
        console.log(err);
    }
}

module.exports = main;