const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

// app.get("/", function (req, res) {
//   res.send("Hello World!");
// });

// app.get("/api/contacts", (req, res) => {
//   res.status(200).json({ message: "Get All Contacts" });
// });

app.use(express.json()); //to get json object from the request body
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler); //custom middleware for converting custom msgs to responce json

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});
