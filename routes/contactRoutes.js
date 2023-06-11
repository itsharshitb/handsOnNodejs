const express = require("express");
const router = express.Router();
const {
  getContacts,
  getContact,
  updateContact,
  createContact,
  deleteContact,
} = require("../controllers/contactControllers");
const validateToken = require("../middleware/validateTokenHandler");

//first method === below
// router.route("/").get(getContacts);
// router.route("/").post(createContact);
// router.route("/:id").get(getContact);
// router.route("/:id").put(updateContact);
// router.route("/:id").delete(deleteContact);

//another method... line optimise

router.use(validateToken);
router.route("/").get(getContacts).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
