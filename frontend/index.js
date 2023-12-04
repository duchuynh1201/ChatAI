const express = require('express');
const hbs_sections = require('express-handlebars-sections');
const path = require('path');
const {engine} = require('express-handlebars');

const app = express();
const port = 4000;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.engine(
  "handlebars",
  engine({
    defaultLayout: "main.handlebars",
    helpers: {
      section: hbs_sections(),
    },
  })
);

// app.use("/public", express.static(path.join(__dirname, "public")));
app.set("view engine", "handlebars");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "./assets")));
const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3000/v1";

app.get("/", function (req, res) {
  // res.send('Hello World.');
  res.render("home", {
    title: 'Home',
    BACKEND_URL,
  })
});

app.listen(port, () => {
  console.log(`AI-Based web Application listening at http://localhost:${port}`);
});
