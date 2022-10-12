const fs = require("fs");

const saveUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const users = JSON.parse(data);
    const {gender, name, contact, address, photoUrl} = req.body;
    const id = users[users.length - 1].id + 1;
    users.push({
      id,
      gender,
      name,
      contact,
      address,
      photoUrl,
    });
    fs.writeFile("users.json", JSON.stringify(users), function (err) {
      if (err) throw err;
      res.send("User saved successfully!");
    });
  });
};
module.exports = saveUser;
