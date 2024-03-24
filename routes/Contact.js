const express = require("express");
const {
  addContact,
  fetchContacts,
  deleteContact,
} = require("../controllers/Contact");
const contactRouter = express.Router();

contactRouter.route("/contact").post(addContact);
contactRouter.route("/admin/contact/:id").delete(deleteContact);
contactRouter.route("/admin/contacts").get(fetchContacts);

module.exports = contactRouter;
