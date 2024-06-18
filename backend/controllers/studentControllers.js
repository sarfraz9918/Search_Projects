const stuModel = require("../models/studentModels");

const stuRecSave = async (req, res) => {
    try {
        const myData = new stuModel(req.body);
        const data = await myData.save();
        res.json({ msg: "Data saved successfully!" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const stuDisplay = async (req, res) => {
    try {
        const data = await stuModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const upDisplay = async (req, res) => {
    try {
        const data = await stuModel.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const stuSearch = async (req, res) => {
    try {
        const rollno = req.body;
        const data = await stuModel.find(rollno);
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    stuRecSave,
    stuDisplay,
    upDisplay,
    stuSearch
};
