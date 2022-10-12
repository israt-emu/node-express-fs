const express = require("express");
const deleteUser = require("../controllers/deleteUser");
const router = express.Router();
const getAllUser = require("../controllers/getAllUser");
const getRandomUser = require("../controllers/getRandomUser");
const saveUser = require("../controllers/saveUser");
const updateMultipleUser = require("../controllers/updateMultipleUser");
const updateUser = require("../controllers/updateUser");
const validateSaveUser = require("../middlewares/validateSaveUser");
const validateUserBody = require("../middlewares/validateUserBody");
const validateUserId = require("../middlewares/validateUserId");

router.get("/random", getRandomUser);
router.get("/all", getAllUser);
router.post("/save", validateSaveUser, saveUser);
router.delete("/delete/:id", validateUserId, deleteUser);
router.patch("/update/:id", validateUserId, updateUser);
router.patch("/bulk-update", validateUserBody, updateMultipleUser);
module.exports = router;
