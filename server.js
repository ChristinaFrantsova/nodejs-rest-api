// mongoDB Atlas user Pas: grFbBT4IqBUxc4WF;
const mongoose = require("mongoose");

const app = require("./app");

const DB_HOST =
  "mongodb+srv://Chris:grFbBT4IqBUxc4WF@cluster0.4so3xez.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(3000, () => {
      console.log("Server running. Use our API on port: 3000");
    });
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
