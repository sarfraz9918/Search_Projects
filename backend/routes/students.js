const express = require("express");
const router = express.Router();
const stuControllers = require("../controllers/studentControllers");

router.get("/datadisplay", stuControllers.stuDisplay);
// Assuming stuDisplay is a function exported from studentControllers

router.post("/datasave", stuControllers.stuRecSave); 
// Assuming stuRecSave is a function exported from studentControllers

router.get("/update", stuControllers.upDisplay);
 // Assuming stuDisplay is a function exported from studentControllers
 

 // Assuming stuDisplay is a function exported from studentControllers

 
 
 router.post("/stusearch", stuControllers.stuSearch);

module.exports = router;

