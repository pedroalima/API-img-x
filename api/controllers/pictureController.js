const Picture = require("../models/Picture");

exports.findAll = async (req, res) => {
    try {
        const pictures = await Picture.find();

        res.json(pictures);
        console.log("All pictures: ", pictures)
    } catch (error) {
        console.error("Error when searching for images:", error);
        res.status(500).json({ message: "Error when searching for images", error: error.message });
    }
}