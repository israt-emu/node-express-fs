const fs = require("fs");

const updateMultipleUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const usersId = req.body.usersId;
    const users = JSON.parse(data);
    usersId.map((id) => {
      const user = users?.find((user) => user.id === id);
      if (user) {
        const {gender, name, contact, address, photoUrl} = user || {};
        user.id = id;
        user.gender = req.body.gender || gender;
        user.name = req.body.name || name;
        user.contact = req.body.contact || contact;
        user.address = req.body.address || address;
        user.photoUrl = req.body.photoUrl || photoUrl;
      }
    });
    fs.writeFile("users.json", JSON.stringify(users), function (err) {
      if (err) throw err;
      res.send("Users updated successfully!");
    });
  });
};
module.exports = updateMultipleUser;
