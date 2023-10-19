const express = require("express");
const { deletereminder, reminderlist, setreminder

} = require("../controllers/reminderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/reminder").post(isAuthenticatedUser, setreminder);

router.route("/deletereminder").post(isAuthenticatedUser, deletereminder);


router.route("/getAllReminder").get(isAuthenticatedUser, reminderlist);

module.exports = router;