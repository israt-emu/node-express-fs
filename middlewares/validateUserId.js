const validateUserId = (req, res, next) => {
  if (req.params.id) {
    if (typeof Number(req.params.id) === "number") {
      next();
    } else {
      res.send("Please send a valid user id!");
    }
  } else {
    res.send("Please send a user id!");
  }
};
module.exports = validateUserId;
