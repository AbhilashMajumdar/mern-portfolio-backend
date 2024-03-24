const Contact = require("../models/Contact");

exports.addContact = async (req, res, next) => {
  const contactContent = new Contact(req.body);
  try {
    await contactContent.save();
    return res.status(201).json(contactContent);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.fetchContacts = async (req, res, next) => {
  try {
    const contacts = await Contact.find();
    if (!contacts) {
      return res.status(404).json({
        message: "Contacts not found",
      });
    }
    return res.status(200).json(contacts);
  } catch (error) {
    return res.status(400).json(error);
  }
};

exports.deleteContact = async (req, res, next) => {
  try {
    let id = req.params.id;
    const deletedContact = await Contact.findByIdAndDelete(id);
    return res.status(200).json({
      data: deletedContact,
      message: "Contact deleted successfully!",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
};
