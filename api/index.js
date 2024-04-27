const express = require("express");
const app = express();
const main = require("./db.js")

main()

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(8080, () => console.log("Server ready on port 8080."));

module.exports = app;