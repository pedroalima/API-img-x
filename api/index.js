const express = require("express");
const app = express();
const main = require("./db.js")

main()

const pictureRouter = require("./routes/picture")

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/pictures", pictureRouter)

app.listen(8080, () => console.log("Server ready on port 8080."));