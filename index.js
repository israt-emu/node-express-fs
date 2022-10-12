const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const usersRoute = require("./routes/users.route");
app.use(express.json());
//using user router
app.use("/api/v1/user", usersRoute);

app.all("*   ", (req, res) => {
  res.send("No route found");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
