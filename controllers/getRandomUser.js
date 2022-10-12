const fs = require("fs");

const getRandomUser = (req, res) => {
  fs.readFile("users.json", function (err, data) {
    const users = JSON.parse(data);
    const numberOfUsers = users?.length;
    let randomUser = undefined;

    while (randomUser === undefined) {
      const randomId = Math.floor(Math.random() * numberOfUsers) + 1;
      randomUser = users?.find((user) => user.id === randomId);
    }
    res.status(200).json(randomUser);
  });
};
module.exports = getRandomUser;
