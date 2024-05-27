const express = require("express");
// const path = require("path");
const bodyParser = require("body-parser");
// const mongoConnect = require("./util/database").mongodbConnect;
const session = require("express-session");

const routes = require("./routes/routes");

const app = express();

// app.set("view engine", "ejs");
// app.set("views", "views");

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "some-secret-example",
    resave: false,
    saveUninitialized: false,
  })
);

app.use(routes);

// app.use((req, res) => {
//   res.render("404");
// });

// const options = {
//   pfx: fs.readFileSync("./ut"),
//   passphrase: "sample",
// };

// mongoConnect(() => {
//   app.listen(80);
// });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
