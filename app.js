import express from 'express';
import hbs_sections from "express-handlebars-sections";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import { engine } from "express-handlebars";
import dotenv from 'dotenv';

import homeRouter from './routes/home.route.js';

dotenv.config();

const port = 2211;
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

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
// app.use(express.static(path.join(__dirname, "./assets")));

app.get("/", homeRouter);

app.listen(port, () => {
  console.log(`AI-Based web Application listening at http://localhost:${port}`);
});
