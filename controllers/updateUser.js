const fs = require("fs");

const updateUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const id = Number(req.params.id);
    const users = JSON.parse(data);
    const user = users?.find((user) => user.id === id);

    if (user) {
      const {gender, name, contact, address, photoUrl} = user || {};
      user.id = id;
      user.gender = req.body.gender || gender;
      user.name = req.body.name || name;
      user.contact = req.body.contact || contact;
      user.address = req.body.address || address;
      user.photoUrl = req.body.photoUrl || photoUrl;
      fs.writeFile("users.json", JSON.stringify(users), function (err) {
        if (err) throw err;
        res.send("User updated successfully!");
      });
    } else {
      res.send(" User Cannot found!");
    }
  });
};
module.exports = updateUser;
