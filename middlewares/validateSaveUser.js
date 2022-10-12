const validateSaveUser = (req, res, next) => {
  if (req.body) {
    const {gender, name, contact, address, photoUrl} = req.body;
    if (gender && name && contact && address && photoUrl) {
      next();
    } else {
      res.send("Please send  all required field!");
    }
  } else {
    res.send("Please send a user!");
  }
};
module.exports = validateSaveUser;
