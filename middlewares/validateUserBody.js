const validateUserBody = (req, res, next) => {
  if (req.body) {
    if (req.body.usersId) {
      next();
    } else {
      res.send("Please send multiple users id in an array");
    }
  }
};
module.exports = validateUserBody;
