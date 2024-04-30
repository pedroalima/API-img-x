const express = require("express");
const app = express();
const main = require("./db.js");
const cors = require("cors");

main();

app.use(cors());

const pictureRouter = require("./routes/picture");

app.get("/", (req, res) => res.send("Express on Vercel"));

app.use("/pictures", pictureRouter);

app.listen(8080, () => console.log("Server ready on port 8080."));