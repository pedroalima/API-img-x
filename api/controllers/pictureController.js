const storeFile = require("../config/db");
const Picture = require("../models/Picture");
const fs = require("fs");

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

exports.create = async (req, res) => {
    try {
        console.log(req.file);
        const file = req.file;

        // storeFile(file.path)

        const picture = new Picture({
            name: file.originalname,
            src: file.path,
        });
        
        await picture.save();

        res.json({ picture, message: "Image salved successfully"});
    } catch (error) {
        console.error("Error saving image:", error);
        res.status(500).json({ message: "Error saving image.", error: error.message });
    }
}

exports.remove = async (req, res) => {
    try {
        const picture = await Picture.findById(req.params.id);

        if (!picture) {
            return res.status(404).json({ message: "Image not found"});
        }

        fs.unlinkSync(picture.src);
        
        await picture.deleteOne();

        res.json({ message: "Image removed successfully"});
    } catch (error) {
        console.error("Error deleting image:", error);
        res.status(500).json({ message: "Error deleting image.", error: error.message});
    }
}