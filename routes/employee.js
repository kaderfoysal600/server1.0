const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");
const upload = require("../middleware/upload");


router.get("/", EmployeeController.index);
router.get("/organic",EmployeeController.organic)
router.post("/show", EmployeeController.show);
router.post("/store", upload.single("avatar"), EmployeeController.store);
router.put("/update", EmployeeController.update);
router.delete("/delete", EmployeeController.destory);

module.exports = router;
