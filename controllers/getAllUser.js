const fs = require("fs");

const getAllUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const users = JSON.parse(data);
    const {s} = req.query;
    if (s) {
      const limitedUsers = users?.filter((user, i) => i < s);
      res.status(200).json(limitedUsers);
    } else {
      res.status(200).json(users);
    }
  });
};
module.exports = getAllUser;
