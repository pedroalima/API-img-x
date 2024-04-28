const express = require("express") ;
const router = express.Router();

const PictureController = require("../controllers/pictureController");

router.get("/", PictureController.findAll);

module.exports = router;