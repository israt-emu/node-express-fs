const fs = require("fs");

const deleteUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const id = Number(req.params.id);
    const users = JSON.parse(data);
    const restUsers = users?.filter((user) => user.id !== id);

    fs.writeFile("users.json", JSON.stringify(restUsers), function (err) {
      if (err) throw err;
      res.send("User deleted successfully!");
    });
  });
};
module.exports = deleteUser;
